import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { getListings } from '../../../../lib/data';

const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'listings');

const CONTENT_TYPES: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  webp: 'image/webp',
};

/**
 * Serves the media files that sit next to a listing's listing.yaml
 * (icon.png, screenshot-1.png, ...) as static files at
 * /listings/<slug>/assets/<file>. Keeps each listing self-contained.
 */
export async function getStaticPaths() {
  const listings = await getListings();
  const paths = [];
  for (const l of listings) {
    const dir = join(CONTENT_DIR, l.slug);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) {
      const ext = file.split('.').pop()?.toLowerCase() ?? '';
      if (ext in CONTENT_TYPES) {
        paths.push({ params: { slug: l.slug, file }, props: { slug: l.slug, file } });
      }
    }
  }
  return paths;
}

export async function GET({ props }: { props: { slug: string; file: string } }) {
  const { slug, file } = props;
  const body = readFileSync(join(CONTENT_DIR, slug, file));
  const ext = file.split('.').pop()?.toLowerCase() ?? '';
  return new Response(new Uint8Array(body), {
    headers: {
      'Content-Type': CONTENT_TYPES[ext] ?? 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
