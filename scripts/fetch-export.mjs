#!/usr/bin/env node
/**
 * Fetches a fresh snapshot of the AppDirect marketplace API into appdirect-export/.
 *
 * Output: appdirect-export/listing.json        (catalog index, /listing)
 *         appdirect-export/products/<id>.json  (one full product record each)
 *
 * Files are pretty-printed (2-space indent, UTF-8, trailing newline) so re-runs
 * produce line-level diffs showing exactly which listings changed.
 *
 * Usage: node scripts/fetch-export.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const EXPORT_DIR = join(ROOT, 'appdirect-export');
const API_BASE = 'https://marketplace.camunda.com/api/marketplace/v1';
const CONCURRENCY = 8;

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

const listing = await fetchJson(`${API_BASE}/listing`);
writeJson(join(EXPORT_DIR, 'listing.json'), listing);
console.log(`listing.json: ${listing.length} entries`);

mkdirSync(join(EXPORT_DIR, 'products'), { recursive: true });

let done = 0;
let failed = 0;
const queue = [...listing];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const { id } = queue.shift();
      try {
        const product = await fetchJson(`${API_BASE}/products/${id}`);
        writeJson(join(EXPORT_DIR, 'products', `${id}.json`), product);
        done++;
      } catch (err) {
        failed++;
        console.error(err.message);
      }
    }
  }),
);

console.log(`products: ${done} written, ${failed} failed`);
if (failed) process.exit(1);
