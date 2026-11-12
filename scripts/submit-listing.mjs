#!/usr/bin/env node
/**
 * Convert a "New Marketplace listing" issue into a listing directory.
 *
 * The issue form (.github/ISSUE_TEMPLATE/new-listing.yml) renders the
 * submission as Markdown with one "### <Label>" section per field. This
 * script parses those sections, downloads icon and gallery images, and
 * writes src/content/listings/<type>s/<slug>/listing.md.
 *
 * Usage: node scripts/submit-listing.mjs <issue-body-file>
 * Prints "dir=<typeDir>/<slug>" as the last stdout line.
 */
import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { stripMarkdownReferences } from './markdown-references.mjs';

const CONTENT_DIR = join(process.cwd(), 'src/content', 'listings');
const MAX_IMAGES = 8;
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

const TYPE_DIRS = { Connector: 'connectors', Blueprint: 'blueprints', Solution: 'solutions' };
const CREATOR_TYPES = {
  'Community Member': 'community',
  'Camunda Partner': 'partner',
  'Camunda Employee': 'camunda',
};
const RUNTIMES = {
  'Camunda Connectors Runtime': 'bundle',
  'Self Hosted': 'self-hosted',
};
const AVAILABILITY = {
  'Open source': 'open-source',
  'Listing only': 'listing-only',
  'Coming soon': 'coming-soon',
};

// Fixed option sets of the multi-select fields. Used to match the rendered
// values no matter how the issue renderer separates them (lines or commas).
const MULTI_SELECTS = {
  Categories: [
    'AI Services', 'Agentic Solutions', 'Automation Services', 'Cloud Computing Services',
    'Collaboration Tools', 'Data & Analytics', 'Enterprise Applications', 'External Data Services',
    'Migration Solutions', 'Patterns', 'Quick Start', 'Solution Accelerators', 'Technical Protocols',
  ],
  Industries: [
    'Financial Services', 'Healthcare', 'Insurance', 'Manufacturing', 'Media and Entertainment',
    'Public Sector', 'Retail', 'Supply Chain & Logistics', 'Technology', 'Telecommunications',
  ],
  'Use cases': [
    'Agentic AI orchestration', 'Human Task orchestration', 'Microservices orchestration',
    'RPA bot orchestration', 'Simplified case management',
  ],
  'Compatible Camunda versions': ['8.2', '8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9', '8.10'],
  'Connector runtimes': Object.keys(RUNTIMES),
  'Connector types': ['inbound', 'outbound'],
};

// ---------------------------------------------------------------------------
// Issue form parsing
// ---------------------------------------------------------------------------

// Labels of the issue form fields. Only these split the body into sections,
// so a "###" line inside user content cannot break the parsing.
const KNOWN_LABELS = new Set([
  'Company / Contributor',
  'I am a',
  'Link to your website',
  'Listing name',
  'Listing type',
  'Short description',
  'SEO description',
  'Detail page content',
  'Icon URL',
  'Video URL',
  'Gallery images',
  ...Object.keys(MULTI_SELECTS),
  'Availability',
  'Resources',
  'Self-Managed template URL',
  'GitHub repository',
  'Documentation',
  'Preview',
  'Demo',
  'Support',
  'Website',
]);

// Markdown section headers of the issue form. They appear verbatim in the
// rendered body and also end the previous field section.
const KNOWN_BLOCKS = new Set(['Your information', 'Your listing', 'Classification', 'Resources', 'Links']);

function parseIssueForm(body) {
  const fields = new Map();
  const headings = [...body.matchAll(/^(#{2,3})\s+(.+?)\s*$/gm)].filter((m) =>
    m[1] === '###' ? KNOWN_LABELS.has(m[2]) : KNOWN_BLOCKS.has(m[2]),
  );
  for (let i = 0; i < headings.length; i++) {
    const isField = headings[i][1] === '###';
    const label = headings[i][2];
    const start = headings[i].index + headings[i][0].length;
    const end = i + 1 < headings.length ? headings[i + 1].index : body.length;
    let value = body.slice(start, end).trim();
    if (value === '_No response_') value = '';
    if (isField) fields.set(label, value);
  }
  return fields;
}

function pickOptions(value, known) {
  if (!value) return [];
  const tokens = value.split(/[\r\n,]+/).map((t) => t.trim()).filter(Boolean);
  return known.filter((option) => tokens.includes(option));
}

function extractImageUrls(text) {
  if (!text) return [];
  const urls = [];
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    // Dragged-and-dropped files render as Markdown images.
    const images = [...trimmed.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
    if (images.length) urls.push(...images);
    else if (/^https?:\/\/\S+$/.test(trimmed)) urls.push(trimmed);
  }
  return [...new Set(urls)].slice(0, MAX_IMAGES);
}

// "Name | https://url" or a bare URL, one resource per line.
function parseResources(text) {
  if (!text) return [];
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const named = line.match(/^(.*?)\s*\|\s*(https?:\/\/\S+)$/);
      if (named) return { name: named[1].trim() || undefined, url: named[2] };
      if (/^https?:\/\/\S+$/.test(line)) return { url: line };
      return null;
    })
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Listing helpers (kept in sync with scripts/extract.mjs)
// ---------------------------------------------------------------------------

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/**
 * Guardrails for contributor-provided rich text: keep paragraphs, lists,
 * bold and italic; strip links (keeping the link text), images, headings and
 * raw HTML so listings cannot embed off-site assets or arbitrary markup.
 */
function sanitizeRichText(text) {
  return stripMarkdownReferences(text)
    .trim()
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/<[^>]+>/g, '') // raw HTML tags
    .replace(/^#{1,6}\s+/gm, '') // headings -> plain text
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

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

function listingFiles() {
  const out = [];
  for (const typeDir of Object.values(TYPE_DIRS)) {
    const abs = join(CONTENT_DIR, typeDir);
    let slugs = [];
    try {
      slugs = readdirSync(abs, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const s of slugs) {
      const file = join(abs, s.name, 'listing.md');
      try {
        readdirSync(join(abs, s.name));
        out.push({ typeDir, slug: s.name, file });
      } catch {
        /* not a directory */
      }
    }
  }
  return out;
}

function nextId(files) {
  let max = 0;
  for (const { file } of files) {
    const m = readFileSync(file, 'utf8').match(/^id:\s*(\d+)/m);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
}

function listingId(files) {
  const runId = process.env.SUBMISSION_ID;
  if (!runId) return nextId(files);
  const id = Number(runId);
  if (!Number.isSafeInteger(id) || id <= 0) fail(`invalid GitHub run id: ${runId}`);
  return id;
}

function uniqueSlug(name, files) {
  const used = new Set(files.map((f) => f.slug));
  const base = slugify(name) || 'listing';
  let slug = base;
  let n = 1;
  while (used.has(slug)) slug = `${base}-${++n}`;
  return slug;
}

// ---------------------------------------------------------------------------
// Image download
// ---------------------------------------------------------------------------

function extOf(url, contentType) {
  const fromUrl = url.match(/\.(png|jpe?g|gif|svg|webp)(\?|#|$)/i)?.[1]?.toLowerCase();
  if (fromUrl) return fromUrl === 'jpeg' ? 'jpg' : fromUrl;
  const byType = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/gif': 'gif',
    'image/svg+xml': 'svg',
    'image/webp': 'webp',
  };
  return byType[(contentType ?? '').split(';')[0].trim()] ?? 'png';
}

async function downloadImage(url, fileBase) {
  const res = await fetch(url, { signal: AbortSignal.timeout(20000), redirect: 'follow' });
  if (!res.ok) throw new Error(`GET ${url} -> HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length > MAX_IMAGE_BYTES) throw new Error(`image too large: ${url}`);
  const file = `${fileBase}.${extOf(url, res.headers.get('content-type'))}`;
  writeFileSync(file, buffer);
  return file;
}

// ---------------------------------------------------------------------------

function fail(message) {
  console.error(`submission invalid: ${message}`);
  process.exit(1);
}

const bodyFile = process.argv[2];
if (!bodyFile) fail('no issue body file given (usage: node scripts/submit-listing.mjs <file>)');

const fields = parseIssueForm(readFileSync(bodyFile, 'utf8'));
const get = (label) => (fields.get(label) ?? '').trim();

const name = get('Listing name');
const typeLabel = get('Listing type');
const description = get('Short description');
if (!name) fail('missing required field: Listing name');
if (!TYPE_DIRS[typeLabel]) fail(`missing or unknown Listing type: "${typeLabel}"`);
if (!description) fail('missing required field: Short description');

const files = listingFiles();
const typeDir = TYPE_DIRS[typeLabel];
const slug = uniqueSlug(name, files);
const dir = join(CONTENT_DIR, typeDir, slug);
mkdirSync(dir, { recursive: true });

const links = {
  github: get('GitHub repository') || undefined,
  docs: get('Documentation') || undefined,
  preview: get('Preview') || undefined,
  demo: get('Demo') || undefined,
  support: get('Support') || undefined,
  website: get('Website') || undefined,
};
for (const key of Object.keys(links)) if (!links[key]) delete links[key];

const smTemplate = get('Self-Managed template URL') || undefined;
// Rule for duplicate targets: when the documentation URL is also the
// Self-Managed template URL, point the documentation at the README.
if (links.docs && smTemplate && links.docs.replace(/\/$/, '') === smTemplate.replace(/\/$/, '')) {
  links.docs = `${links.docs}#readme`;
}

const record = {
  id: listingId(files),
  name,
  creatorType: CREATOR_TYPES[get('I am a')] ?? undefined,
  creatorName: get('Company / Contributor') || undefined,
  creatorUrl: get('Link to your website') || undefined,
  categories: pickOptions(get('Categories'), MULTI_SELECTS.Categories),
  industries: pickOptions(get('Industries'), MULTI_SELECTS.Industries),
  useCases: pickOptions(get('Use cases'), MULTI_SELECTS['Use cases']),
  runtimes: pickOptions(get('Connector runtimes'), MULTI_SELECTS['Connector runtimes']).map(
    (r) => RUNTIMES[r],
  ),
  connectorTypes: pickOptions(get('Connector types'), MULTI_SELECTS['Connector types']),
  compatibleVersions: pickOptions(
    get('Compatible Camunda versions'),
    MULTI_SELECTS['Compatible Camunda versions'],
  ),
  availability: AVAILABILITY[get('Availability')] ?? undefined,
  description,
  seoDescription: get('SEO description') || undefined,
  templates: parseResources(get('Resources')),
  smTemplate,
  video: get('Video URL') || undefined,
  links,
  lastModified: new Date().toISOString().slice(0, 10),
};

const content = sanitizeRichText(get('Detail page content'));
if (!content) fail('missing required field: Detail page content');

writeFileSync(join(dir, 'listing.md'), `---\n${toYaml(record)}---\n\n${content}\n`);

const iconUrl = get('Icon URL');
const galleryUrls = extractImageUrls(get('Gallery images'));
let imageCount = 0;
for (const [url, fileBase] of [
  ...(iconUrl ? [[iconUrl, join(dir, 'icon')]] : []),
  ...galleryUrls.map((url) => [url, null]),
]) {
  try {
    const base = fileBase ?? join(dir, `gallery-${imageCount + 1}`);
    const file = await downloadImage(url, base);
    if (!fileBase) imageCount++;
    console.log(`downloaded ${url} -> ${file}`);
  } catch (error) {
    // A failed image must not block the submission; a reviewer can fix it.
    console.error(`image skipped: ${error.message}`);
  }
}

console.log(`dir=${typeDir}/${slug}`);
