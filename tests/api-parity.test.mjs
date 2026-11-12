import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'));

test('blueprint feed exposes API facet values without changing public entries', () => {
  const apiDir = join(root, 'dist/api/v1');
  const full = readJson(join(apiDir, 'blueprints-full.json')).items;
  const publicItems = readJson(join(apiDir, 'blueprints.json')).items;
  const byId = (id) => {
    const item = full.find((entry) => entry.id === id);
    assert.ok(item, `missing blueprint ${id}`);
    return item;
  };

  assert.ok(byId('449343').facets.categories.includes('solutions'));
  assert.ok(byId('719979').facets.categories.includes('solutions'));
  assert.ok(!byId('519046').facets.categories.includes('solutions'));
  assert.ok(byId('450289').facets.industries.includes('supply chain and logistics'));
  assert.ok(byId('587865').facets.industries.includes('any'));
  assert.ok(!byId('449343').facets.industries.includes('any'));
  assert.equal(byId('519046').facets.hasSourceFiles, false);
  assert.deepEqual(
    full.filter((item) => item.facets.hasSourceFiles).map(({ facets, ...item }) => item),
    publicItems,
  );
});

test('extraction retains curated blueprint types and source Any tags', (t) => {
  const dir = mkdtempSync(join(tmpdir(), 'marketplace-extract-test-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  mkdirSync(join(dir, 'scripts'), { recursive: true });
  mkdirSync(join(dir, 'appdirect-export/products'), { recursive: true });
  mkdirSync(join(dir, 'src/content/listings/solutions/curated-solution'), { recursive: true });
  symlinkSync(join(root, 'node_modules'), join(dir, 'node_modules'), 'dir');
  writeFileSync(join(dir, 'scripts/extract.mjs'), readFileSync(join(root, 'scripts/extract.mjs')));
  writeFileSync(
    join(dir, 'scripts/markdown-references.mjs'),
    readFileSync(join(root, 'scripts/markdown-references.mjs')),
  );
  writeFileSync(
    join(dir, 'src/content/listings/solutions/curated-solution/listing.md'),
    '---\nid: 1\ntype: [solution, blueprint]\n---\n',
  );
  writeFileSync(join(dir, 'appdirect-export/listing.json'), '[]');
  for (const [id, name, industries, blueprintCategory] of [
    [1, 'Curated Solution', ['Any', 'Insurance'], false],
    [2, 'Other Solution', ['Insurance'], false],
    [3, 'Tagged Blueprint', ['Insurance'], true],
  ]) {
    const product = {
      id,
      name,
      tags: [
        { type: 'CATEGORY', name: 'Partner Solutions', children: [{ name: 'Solution Accelerators' }] },
        ...(blueprintCategory
          ? [{ type: 'CATEGORY', name: 'Blueprints', children: [{ name: 'Solution Accelerators' }] }]
          : []),
        { name: 'Industry', children: industries.map((industry) => ({ name: industry })) },
      ],
      listing: { blurb: name },
    };
    writeFileSync(join(dir, `appdirect-export/products/${id}.json`), JSON.stringify(product));
  }

  const listing = (slug) => {
    const text = readFileSync(join(dir, `src/content/listings/solutions/${slug}/listing.md`), 'utf8');
    return parseYaml(text.split('---')[1]);
  };
  for (let run = 0; run < 2; run++) {
    execFileSync(process.execPath, [join(dir, 'scripts/extract.mjs'), '--skip-images']);
    assert.deepEqual(listing('curated-solution').type, ['solution', 'blueprint']);
    assert.deepEqual(listing('curated-solution').industries, ['Insurance']);
    assert.equal(listing('curated-solution').apiAnyIndustry, true);
    assert.equal(listing('curated-solution').apiSolutionCategory, undefined);
    assert.equal(listing('other-solution').type, undefined);
    assert.equal(listing('other-solution').apiAnyIndustry, undefined);
    assert.equal(listing('tagged-blueprint').apiSolutionCategory, true);
  }
});
