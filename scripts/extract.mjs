#!/usr/bin/env node
/**
 * Migrates the AppDirect export (appdirect-export/) into Astro content.
 *
 * Input : appdirect-export/listing.json + appdirect-export/products/<id>.json
 * Output: src/content/listings/<type>s/<slug>/listing.md  (frontmatter + markdown body)
 *         src/content/listings/<type>s/<slug>/*.png       (icon.png, gallery-*.png)
 *
 * Re-runnable. Safe to execute before cutover to pick up AppDirect changes.
 *
 * Usage: node scripts/extract.mjs [--skip-images]
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const EXPORT_DIR = join(ROOT, 'appdirect-export', 'products');
const CONTENT_DIR = join(ROOT, 'src', 'content', 'listings');
const SKIP_IMAGES = process.argv.includes('--skip-images');
const IMAGE_CONCURRENCY = 8;

// ---------------------------------------------------------------------------
// Tag mapping. AppDirect has two tag kinds:
// - CATEGORY ("Connectors", "Blueprints", "Partner Solutions"): membership is
//   the listing type, the children are the category facet.
// - ATTRIBUTE_GROUP: filter facets (Industry, Use Case, ...). The "Application"
//   group duplicates the Connectors subcategories and is dropped.
// ---------------------------------------------------------------------------

const PRODUCT_TYPE_CATEGORIES = {
  Connectors: 'connector',
  Blueprints: 'blueprint',
  'Partner Solutions': 'solution',
};

const TYPE_DIRS = { connector: 'connectors', blueprint: 'blueprints', solution: 'solutions' };

const RUNTIME_MAP = {
  'Camunda Connectors Bundle': 'bundle',
  'Host yourself': 'self-hosted',
};

const CONNECTOR_TYPE_MAP = {
  'Inbound Connector': 'inbound',
  'Outbound Connector': 'outbound',
};

const AVAILABILITY_MAP = {
  'Open Source': 'open-source',
  'Listing Only': 'listing-only',
  'Coming soon': 'coming-soon',
};

// Categories with only 1-2 entries fold into a larger sibling.
const CATEGORY_MERGE = {
  'Best Practices': 'Patterns',
  'DMN': 'Patterns',
  'Form': 'Patterns',
};

const CUSTOM_ATTRIBUTE_MAP = {
  '0-creator-link': 'creatorUrl',
  '1-template-only-for-SAAS': 'saasTemplate',
  '2-template-only-for-sm': 'smTemplate',
  '1-github-repo-compile-yourself': 'github',
  '2-compile-yourself-Guide': 'docs',
  '3-bpmn-process-preview': 'preview',
  'request-demo': 'demo',
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function tagChildren(product, groupName) {
  return (product.tags ?? [])
    .filter((t) => t.name === groupName)
    .flatMap((t) => (t.children ?? []).map((c) => c.name));
}

/** Tags of AppDirect kind CATEGORY: carry the listing type and its subcategories. */
function categoryTags(product) {
  return (product.tags ?? []).filter((t) => t.type === 'CATEGORY');
}

function customAttributes(product) {
  const result = {};
  for (const attr of product.customAttributes ?? []) {
    const key = CUSTOM_ATTRIBUTE_MAP[(attr.attributeKey ?? '').trim()];
    if (key && attr.value) result[key] = String(attr.value).trim();
  }
  return result;
}

function compareVersions(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  return pa[0] - pb[0] || (pa[1] ?? 0) - (pb[1] ?? 0);
}

function isoDate(epochMs) {
  return epochMs ? new Date(epochMs).toISOString().slice(0, 10) : null;
}

function extractTemplates(product) {
  const templates = [];
  for (const edition of product.pricing?.editions ?? []) {
    let link = null;
    let id = null;
    for (const bullet of edition.bullets ?? []) {
      if (bullet.content === 'templateLink') link = bullet.tooltip;
      if (bullet.content === 'templateId') id = bullet.tooltip;
    }
    if (link) {
      const t = { url: link };
      if (id) t.id = id;
      if (edition.name) t.name = edition.name;
      templates.push(t);
    }
  }
  return templates;
}

// Canonical vendor names: providers that differ only in punctuation/legal
// suffix ("Acheron Software Consultancy Pvt Ltd" vs "... Private Limited")
// collapse onto the most frequent spelling.
function buildVendorCanonicalizer(products) {
  const groups = new Map();
  for (const p of products) {
    const name = p.provider?.name;
    if (!name) continue;
    const key = name.toLowerCase().replace(/private limited/g, 'pvt ltd').replace(/[^a-z0-9]/g, '');
    if (!groups.has(key)) groups.set(key, new Map());
    const variants = groups.get(key);
    variants.set(name, (variants.get(name) ?? 0) + 1);
  }
  const canonical = new Map();
  for (const variants of groups.values()) {
    const winner = [...variants.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
    for (const name of variants.keys()) canonical.set(name, winner);
  }
  return (name) => canonical.get(name) ?? name;
}

// ---------------------------------------------------------------------------
// Minimal YAML emitter (strings are JSON-quoted => always valid YAML).
// null/undefined/[] fields are omitted entirely.
// ---------------------------------------------------------------------------

function yamlValue(value, indent) {
  if (Array.isArray(value)) {
    const pad = ' '.repeat(indent);
    return (
      '\n' +
      value
        .map((item) => {
          if (item !== null && typeof item === 'object') {
            const entries = Object.entries(item).filter(([, v]) => v !== undefined && v !== null);
            const [first, ...rest] = entries;
            let out = `${pad}- ${first[0]}: ${yamlValue(first[1], indent + 2)}`;
            for (const [k, v] of rest) out += `\n${pad}  ${k}: ${yamlValue(v, indent + 2)}`;
            return out;
          }
          return `${pad}- ${yamlValue(item, indent + 2)}`;
        })
        .join('\n')
    );
  }
  if (typeof value === 'object' && value !== null) {
    const pad = ' '.repeat(indent);
    return (
      '\n' +
      Object.entries(value)
        .map(([k, v]) => `${pad}${k}: ${yamlValue(v, indent + 2)}`)
        .join('\n')
    );
  }
  if (typeof value === 'string') return JSON.stringify(value);
  return String(value);
}

function toYaml(record) {
  const lines = [];
  for (const [key, value] of Object.entries(record)) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value) && value.length === 0) continue;
    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) continue;
    lines.push(`${key}: ${yamlValue(value, 2)}`);
  }
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Images. icon.png plus a single gallery-*.png series (hero image first,
// then screenshots - AppDirect used both for the same purpose).
// ---------------------------------------------------------------------------

const imageJobs = new Map(); // "<dir>|<url>" -> { dir, file }

function queueImage(url, dir, baseName) {
  if (!url) return null;
  const key = `${dir}|${url}`;
  if (imageJobs.has(key)) return imageJobs.get(key).file;
  const ext = url.match(/\.(png|jpe?g|gif|svg|webp)(\?|$)/i)?.[1]?.toLowerCase().replace('jpeg', 'jpg') ?? 'png';
  const used = new Set([...imageJobs.values()].filter((j) => j.dir === dir).map((j) => j.file));
  let name = `${baseName}.${ext}`;
  let n = 1;
  while (used.has(name)) name = `${baseName}-${++n}.${ext}`;
  imageJobs.set(key, { dir, file: name });
  return name;
}

async function downloadImages() {
  if (SKIP_IMAGES) return { ok: 0, failed: 0, failures: [] };
  const jobs = [...imageJobs.entries()];
  let ok = 0;
  let failed = 0;
  const failures = [];
  async function worker() {
    while (jobs.length) {
      const [key, { dir, file }] = jobs.pop();
      const url = key.slice(key.indexOf('|') + 1);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const target = join(CONTENT_DIR, dir, file);
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, Buffer.from(await res.arrayBuffer()));
        ok++;
      } catch (err) {
        failed++;
        failures.push(`${url} -> ${err.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: IMAGE_CONCURRENCY }, worker));
  return { ok, failed, failures };
}

// ---------------------------------------------------------------------------
// Main mapping
// ---------------------------------------------------------------------------

function toListing(product, canonicalVendor, usedSlugs) {
  const id = product.id;
  const attrs = customAttributes(product);

  const categoryTags = categoryTagsOf(product);
  const types = [...new Set(categoryTags.map((t) => PRODUCT_TYPE_CATEGORIES[t.name]).filter(Boolean))];

  // Category children, e.g. "AI Services" (connector), "Quick Start" (blueprint).
  const categoryValues = [
    ...new Set(
      categoryTags.flatMap((t) => (t.children ?? []).map((c) => CATEGORY_MERGE[c.name] ?? c.name)),
    ),
  ].sort();

  const versions = tagChildren(product, 'Version Compatibility').sort(compareVersions);

  // "useEditionTemplateLinks" means: the editions carry the template links.
  const templates = extractTemplates(product);
  const saasTemplate =
    attrs.saasTemplate &&
    attrs.saasTemplate !== 'useEditionTemplateLinks' &&
    !templates.some((t) => t.url === attrs.saasTemplate)
      ? attrs.saasTemplate
      : null;

  const listing = product.listing ?? {};

  let slug = slugify(product.name);
  if (usedSlugs.has(slug)) slug = `${slug}-${id}`;
  usedSlugs.add(slug);

  // Directory: <type>s/<slug>/. Multi-type listings keep an explicit type field.
  const typeDir = TYPE_DIRS[types[0]] ?? 'misc';
  const dir = `${typeDir}/${slug}`;

  // Prefer the 2x srcset variant where AppDirect provides one.
  queueImage(listing.myAppLogoIconSrcset?.['2x'] ?? listing.myAppLogoIconUrl ?? listing.imageUrl, dir, 'icon');
  const gallerySources = [
    product.overview?.imageSrcset?.['2x'] ?? product.overview?.imageUrl,
    ...(product.screenshots ?? []).map((s) => s.imageUrlSrcset?.['2x'] ?? s.imageUrl),
  ];
  gallerySources.filter(Boolean).forEach((url, i) => queueImage(url, dir, `gallery-${i + 1}`));

  const links = {
    github: attrs.github,
    docs: attrs.docs,
    preview: attrs.preview,
    demo: attrs.demo,
    support: product.support?.knowledgebaseUrl ?? undefined,
    website: product.referUrl ?? undefined,
  };
  for (const k of Object.keys(links)) if (!links[k]) delete links[k];

  const resources = (product.resources ?? [])
    .map((r) => ({ type: r.resourceType ?? null, title: r.name ?? null, url: r.link ?? r.url ?? null }))
    .filter((r) => r.url);

  const record = {
    id,
    name: product.name,
    type: types.length > 1 ? types : undefined,
    creatorType: tagChildren(product, 'Creator')[0]?.toLowerCase() ?? null,
    creatorName: product.provider?.name ? canonicalVendor(product.provider.name) : null,
    creatorUrl: attrs.creatorUrl ?? null,
    categories: categoryValues,
    industries: tagChildren(product, 'Industry').filter((i) => i !== 'Any'),
    useCases: tagChildren(product, 'Use Case'),
    resourceTypes: tagChildren(product, 'Resource Types Included'),
    bpmnTypes: tagChildren(product, 'Supported BPMN Types'),
    runtimes: tagChildren(product, 'Connector Runtime').map((r) => RUNTIME_MAP[r]).filter(Boolean),
    connectorTypes: tagChildren(product, 'Connector Type').map((t) => CONNECTOR_TYPE_MAP[t]).filter(Boolean),
    compatibleVersions: versions,
    availability: AVAILABILITY_MAP[tagChildren(product, 'Availability')[0]] ?? null,
    description: ((listing.blurb ?? '').trim() || (listing.overview ?? '').trim()) ?? null,
    templates,
    saasTemplate,
    smTemplate: attrs.smTemplate ?? null,
    video: product.overview?.demoUrl ?? null,
    links,
    resources,
    lastModified: isoDate(product.lastModified),
  };

  return { dir, record, body: toMarkdownBody(product) };
}

function categoryTagsOf(product) {
  return categoryTags(product).filter((t) => t.name in PRODUCT_TYPE_CATEGORIES);
}

/** Tagline (lead), overview text and feature list as a single Markdown document. */
function toMarkdownBody(product) {
  const parts = [];
  const listing = product.listing ?? {};
  const overview = (listing.overview ?? '').trim();
  const blurb = (listing.blurb ?? '').trim();
  const tagline = (product.overview?.splashTitle ?? '').trim();
  if (tagline && !overview.includes(tagline)) parts.push(`*${tagline}*`);
  if (overview && overview !== blurb) parts.push(overview);
  const features = (product.features ?? []).filter((f) => f.header || f.description);
  if (features.length) {
    parts.push('## Features');
    for (const f of features) {
      const header = (f.header ?? '').replace(/:$/, '').trim();
      if (header) parts.push(`### ${header}`);
      if (f.description) parts.push(f.description.trim());
    }
  }
  return parts.join('\n\n');
}

// ---------------------------------------------------------------------------

const products = readdirSync(EXPORT_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(EXPORT_DIR, f), 'utf8')));

const canonicalVendor = buildVendorCanonicalizer(products);
const usedSlugs = new Set();

const listings = products
  .map((p) => toListing(p, canonicalVendor, usedSlugs))
  .sort((a, b) => a.record.name.localeCompare(b.record.name));

for (const { dir, record, body } of listings) {
  const absDir = join(CONTENT_DIR, dir);
  mkdirSync(absDir, { recursive: true });
  writeFileSync(join(absDir, 'listing.md'), `---\n${toYaml(record)}---\n\n${body}\n`);
}

const { ok, failed, failures } = await downloadImages();

const byDir = (d) => listings.filter((l) => l.dir.startsWith(d)).length;
console.log(`extracted ${listings.length} listings -> ${CONTENT_DIR}`);
console.log(`  connectors: ${byDir('connectors')}, blueprints: ${byDir('blueprints')}, solutions: ${byDir('solutions')}, misc: ${byDir('misc')}`);
console.log(`images: ${ok} downloaded, ${failed} failed${SKIP_IMAGES ? ' (skipped)' : ''}`);
for (const f of failures) console.log(`  FAILED ${f}`);
