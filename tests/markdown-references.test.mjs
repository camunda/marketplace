import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { stripMarkdownReferences } from '../scripts/markdown-references.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));

test('removes reference images and their definitions', () => {
  assert.equal(
    stripMarkdownReferences('![remote][asset]\n\n[asset]: https://example.com/a.png').trim(),
    '',
  );
});

test('removes reference images with a next-line destination', () => {
  assert.equal(
    stripMarkdownReferences('![remote][asset]\n\n[asset]:\n  https://example.com/a.png').trim(),
    '',
  );
});

test('keeps reference link text and removes its definition', () => {
  assert.equal(
    stripMarkdownReferences('[docs][site]\n\n[site]: <https://example.com/docs> "Docs"').trim(),
    'docs',
  );
});

test('sanitizes collapsed and shortcut references', () => {
  assert.equal(
    stripMarkdownReferences(
      '[site][] and [site]\n\n[site]: https://example.com "Docs"',
    ).trim(),
    'site and site',
  );
});

test('issue submissions use the GitHub run ID', () => {
  const work = mkdtempSync(join(tmpdir(), 'listing-submission-'));
  try {
    const issueBody = join(work, 'issue.md');
    writeFileSync(
      issueBody,
      '### Listing name\nRun ID test\n\n### Listing type\nConnector\n\n' +
        '### Short description\nTest\n\n### Detail page content\nDescription\n',
    );
    execFileSync('node', [join(ROOT, 'scripts/submit-listing.mjs'), issueBody], {
      cwd: work,
      env: { ...process.env, SUBMISSION_ID: '900000002' },
    });

    const listing = readFileSync(
      join(work, 'src/content/listings/connectors/run-id-test/listing.md'),
      'utf8',
    );
    assert.match(listing, /^id: 900000002$/m);
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
});
