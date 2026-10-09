#!/usr/bin/env node
/**
 * Migrates the AppDirect export (appdirect-export/) into Astro content.
 *
 * Input : appdirect-export/listing.json + appdirect-export/products/<id>.json
 * Output: src/content/listings/<slug>/listing.yaml  (one directory per listing)
 *         src/content/listings/<slug>/*.png         (vendored icons, screenshots)
 *
 * Re-runnable. Safe to execute before cutover to pick up AppDirect changes.
 *
 * Usage: node scripts/extract.mjs [--skip-images]
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
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

const RUNTIME_MAP = {
  'Camunda Connectors Bundle': 'bundle',
  'Host yourself': 'self-hosted',
};

const AVAILABILITY_MAP = {
  'Open Source': 'open-source',
  'Listing Only': 'listing-only',
  'Coming soon': 'coming-soon',
};

const CUSTOM_ATTRIBUTE_MAP = {
  '0-creator-link': 'creatorUrl',
  '1-template-only-for-SAAS': 'saasTemplate',
  '2-template-only-for-sm': 'smTemplate',
  '1-github-repo-compile-yourself': 'githubRepo',
  '2-compile-yourself-Guide': 'docsUrl',
  '3-bpmn-process-preview': 'previewImage',
  'related_connectors': 'relatedConnectors',
  'request-demo': 'demoRequestUrl',
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

function parseVideo(url) {
  if (!url) return null;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (yt) return { provider: 'youtube', id: yt[1], url };
  const vimeo = url.match(/(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { provider: 'vimeo', id: vimeo[1], url };
  return { provider: 'link', url };
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
    if (link) templates.push({ id, name: edition.name ?? null, url: link });
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
// Minimal YAML emitter (strings are JSON-quoted => always valid YAML)
// ---------------------------------------------------------------------------

function yamlValue(value, indent) {
  if (value === null || value === undefined) return 'null';
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const pad = ' '.repeat(indent);
    return (
      '\n' +
      value
        .map((item) => {
          if (item !== null && typeof item === 'object') {
            const entries = Object.entries(item).filter(([, v]) => v !== undefined);
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
  if (typeof value === 'object') {
    const pad = ' '.repeat(indent);
    return (
      '\n' +
      Object.entries(value)
        .filter(([, v]) => v !== undefined)
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
    if (key === 'body') {
      lines.push('body: |-');
      for (const line of String(value ?? '').split('\n')) lines.push('  ' + line.trimEnd());
      continue;
    }
    lines.push(`${key}: ${yamlValue(value, 2)}`);
  }
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------

const imageJobs = new Map(); // "<slug>|<url>" -> { slug, file }

function queueImage(url, slug, baseName) {
  if (!url) return null;
  const key = `${slug}|${url}`;
  if (imageJobs.has(key)) return imageJobs.get(key).file;
  const ext = url.match(/\.(png|jpe?g|gif|svg|webp)(\?|$)/i)?.[1]?.toLowerCase().replace('jpeg', 'jpg') ?? 'png';
  const used = new Set([...imageJobs.values()].filter((j) => j.slug === slug).map((j) => j.file));
  let name = `${baseName}.${ext}`;
  let n = 1;
  while (used.has(name)) name = `${baseName}-${++n}.${ext}`;
  imageJobs.set(key, { slug, file: name });
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
      const [key, { slug, file }] = jobs.pop();
      const url = key.slice(key.indexOf('|') + 1);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const target = join(CONTENT_DIR, slug, file);
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

  const categories = categoryTags(product);
  const type = [...new Set(categories.map((t) => PRODUCT_TYPE_CATEGORIES[t.name]).filter(Boolean))];

  // Category children, e.g. "AI Services" (connector), "Quick Start" (blueprint).
  const categoryValues = [...new Set(categories.flatMap((t) => (t.children ?? []).map((c) => c.name)))].sort();

  const versions = tagChildren(product, 'Version Compatibility').sort(compareVersions);

  // "useEditionTemplateLinks" means: the editions carry the template links.
  const templates = extractTemplates(product);
  const saasTemplate = attrs.saasTemplate && attrs.saasTemplate !== 'useEditionTemplateLinks' ? attrs.saasTemplate : null;

  const listing = product.listing ?? {};
  const overview = (listing.overview ?? '').trim();
  const blurb = (listing.blurb ?? '').trim();

  let slug = slugify(product.name);
  if (usedSlugs.has(slug)) slug = `${slug}-${id}`;
  usedSlugs.add(slug);

  const icon = queueImage(listing.myAppLogoIconUrl ?? listing.imageUrl, slug, 'icon');
  const image = queueImage(listing.imageUrl, slug, 'thumb');
  const heroImage = queueImage(product.overview?.imageUrl, slug, 'hero');
  const screenshots = (product.screenshots ?? [])
    .map((s, i) => queueImage(s.imageUrl, slug, `screenshot-${i + 1}`))
    .filter(Boolean);

  return {
    id,
    slug,
    name: product.name,
    type,
    creatorType: tagChildren(product, 'Creator')[0]?.toLowerCase() ?? null,
    creatorName: product.provider?.name ? canonicalVendor(product.provider.name) : null,
    creatorUrl: attrs.creatorUrl ?? null,
    categories: categoryValues,
    industries: tagChildren(product, 'Industry').filter((i) => i !== 'Any'),
    useCases: tagChildren(product, 'Use Case'),
    resourceTypes: tagChildren(product, 'Resource Types Included'),
    bpmnTypes: tagChildren(product, 'Supported BPMN Types'),
    runtimes: tagChildren(product, 'Connector Runtime').map((r) => RUNTIME_MAP[r]).filter(Boolean),
    compatibleVersions: versions,
    availability: AVAILABILITY_MAP[tagChildren(product, 'Availability')[0]] ?? null,
    description: blurb || overview,
    tagline: product.overview?.splashTitle ?? null,
    body: overview && overview !== blurb ? overview : '',
    features: (product.features ?? []).map((f) => ({ header: f.header ?? null, description: f.description ?? null })),
    templates,
    saasTemplate,
    smTemplate: attrs.smTemplate ?? null,
    githubRepo: attrs.githubRepo ?? null,
    docsUrl: attrs.docsUrl ?? null,
    previewImage: attrs.previewImage ?? null,
    demoRequestUrl: attrs.demoRequestUrl ?? null,
    relatedConnectors: attrs.relatedConnectors ?? null,
    demoVideo: parseVideo(product.overview?.demoUrl),
    icon,
    image,
    heroImage,
    screenshots,
    resources: (product.resources ?? [])
      .map((r) => ({ type: r.resourceType ?? null, title: r.name ?? null, url: r.link ?? r.url ?? null }))
      .filter((r) => r.url),
    supportUrl: product.support?.knowledgebaseUrl ?? null,
    termsUrl: product.termsUrl ?? null,
    referUrl: product.referUrl ?? null,
    publishedOn: isoDate(product.publishedOn),
    lastModified: isoDate(product.lastModified),
  };
}

// ---------------------------------------------------------------------------

const products = readdirSync(EXPORT_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(EXPORT_DIR, f), 'utf8')));

const canonicalVendor = buildVendorCanonicalizer(products);
const usedSlugs = new Set();
mkdirSync(CONTENT_DIR, { recursive: true });

const listings = products
  .map((p) => toListing(p, canonicalVendor, usedSlugs))
  .sort((a, b) => a.name.localeCompare(b.name));

for (const listing of listings) {
  const dir = join(CONTENT_DIR, listing.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'listing.yaml'), toYaml(listing));
}

const { ok, failed, failures } = await downloadImages();

const byType = (t) => listings.filter((l) => l.type.includes(t)).length;
console.log(`extracted ${listings.length} listings -> ${CONTENT_DIR}`);
console.log(`  connectors: ${byType('connector')}, blueprints: ${byType('blueprint')}, solutions: ${byType('solution')}`);
console.log(`images: ${ok} downloaded, ${failed} failed${SKIP_IMAGES ? ' (skipped)' : ''}`);
for (const f of failures) console.log(`  FAILED ${f}`);
