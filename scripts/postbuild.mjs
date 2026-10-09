#!/usr/bin/env node
/**
 * GitHub Pages has no rewrite rules, so the marketplace-api contract URLs
 * (/api/v1/connector-filters, not .../connector-filters.json) only work if
 * real files exist at those paths. Copies dist/api/**.json to an
 * extensionless sibling where the path is free.
 *
 * Limitation: /api/v1/connectors and /api/v1/blueprints are also directories
 * (they hold the <id>.json detail endpoints), so no extensionless file can
 * exist there. On GitHub Pages those two URLs cannot serve JSON; consumers
 * must use the .json URL, or a CDN in front must rewrite. Local dev is not
 * affected: src/middleware.ts rewrites extensionless API paths.
 */

import { copyFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const API_DIR = new URL('../dist/api', import.meta.url).pathname;

let copied = 0;
const skipped = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
    } else if (name.endsWith('.json')) {
      const target = path.slice(0, -'.json'.length);
      if (existsSync(target)) {
        skipped.push(target);
      } else {
        copyFileSync(path, target);
        copied++;
      }
    }
  }
}
walk(API_DIR);
console.log(`postbuild: ${copied} extensionless API files created`);
for (const s of skipped) console.log(`postbuild: skipped ${s} (path is a directory)`);

