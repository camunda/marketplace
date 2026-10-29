import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { u } from './url';

export type ListingEntry = CollectionEntry<'listings'>;

/**
 * View over a listing entry: the directory path provides slug and type,
 * and the media files (icon.*, gallery-*) are detected from the directory.
 */
export interface Listing extends ListingEntry['data'] {
  slug: string;
  type: ('connector' | 'blueprint' | 'solution')[];
  icon: string | null;
  gallery: string[];
  entry: ListingEntry;
}

const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'listings');
const TYPE_DIRS: Record<string, Listing['type'][number]> = {
  connectors: 'connector',
  blueprints: 'blueprint',
  solutions: 'solution',
};

function toListing(entry: ListingEntry): Listing {
  // entry.id from the glob loader: "<typeDir>/<slug>/listing"
  const [typeDir, slug] = entry.id.split('/');
  const dir = join(CONTENT_DIR, typeDir, slug);
  const files = existsSync(dir) ? readdirSync(dir) : [];
  const icon = files.find((f) => /^icon\.(png|jpe?g|gif|svg|webp)$/i.test(f)) ?? null;
  const gallery = files
    .filter((f) => /^gallery-\d+\.(png|jpe?g|gif|svg|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return {
    ...entry.data,
    slug,
    type: entry.data.type ?? [TYPE_DIRS[typeDir] ?? 'connector'],
    icon,
    gallery,
    entry,
  };
}

/** Old AppDirect URL slugs by product id, from the export snapshot. */
export function appDirectSlugs(): Map<number, string> {
  const raw = JSON.parse(
    readFileSync(join(process.cwd(), 'appdirect-export', 'listing.json'), 'utf8'),
  ) as { id: number; url: string | null }[];
  const map = new Map<number, string>();
  for (const p of raw) {
    const slug = p.url?.split(`/apps/${p.id}/`)[1]?.replace(/\/+$/, '');
    if (slug) map.set(p.id, slug);
  }
  return map;
}

export async function getListings(): Promise<Listing[]> {
  const entries = await getCollection('listings');
  // Most recently updated first; fall back to the name.
  return entries
    .map(toListing)
    .sort((a, b) => (b.lastModified ?? '').localeCompare(a.lastModified ?? '') || a.name.localeCompare(b.name));
}

export const isConnector = (l: Listing) => l.type.includes('connector');
export const isBlueprint = (l: Listing) => l.type.includes('blueprint');
export const isSolution = (l: Listing) => l.type.includes('solution');

/** URL of a media file that sits next to listing.md. */
export function assetUrl(l: Listing, file: string | null): string | null {
  return file ? u(`/listings/${l.slug}/assets/${file}`) : null;
}

/** Lowest compatible Camunda version, matching marketplace-api's requiredCamundaVersion. */
export const requiredVersion = (l: Listing) => l.compatibleVersions[0] ?? null;

/** marketplace-api: selfHosted = self-hosted only, not part of the SaaS bundle. */
export const selfHosted = (l: Listing) =>
  l.runtimes.includes('self-hosted') && !l.runtimes.includes('bundle');

/** marketplace-api: blueprints marked "listing-only"/"coming-soon" have no source files
 *  and are hidden from the default /api/v1/blueprints response. */
export const hasSourceFiles = (l: Listing) =>
  l.availability !== 'listing-only' && l.availability !== 'coming-soon';

/** All template URLs usable in Web Modeler SaaS ("Use in SaaS" button). */
export function saasTemplateUrls(l: Listing): string[] {
  if (l.saasTemplate) return [l.saasTemplate];
  return l.templates.map((t) => t.url);
}

export function webModelerImportUrl(l: Listing): string | null {
  const urls = saasTemplateUrls(l);
  if (!urls.length) return null;
  return `https://modeler.cloud.camunda.io/import/resources?source=${urls.join(',')}&title=${encodeURIComponent(l.name)}`;
}

export function parseVideo(url: string | undefined): { provider: string; id?: string; url: string } | null {
  if (!url) return null;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (yt) return { provider: 'youtube', id: yt[1], url };
  const vimeo = url.match(/(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { provider: 'vimeo', id: vimeo[1], url };
  return { provider: 'link', url };
}

export function videoEmbedUrl(l: Listing): string | null {
  const v = parseVideo(l.video);
  if (!v?.id) return null;
  if (v.provider === 'youtube') return `https://www.youtube.com/embed/${v.id}`;
  if (v.provider === 'vimeo') return `https://player.vimeo.com/video/${v.id}`;
  return null;
}

/** Sorted unique values of a facet across a set of listings. */
export function facetValues(listings: Listing[], key: keyof Listing): string[] {
  const values = new Set<string>();
  for (const l of listings) {
    const v = l[key];
    if (Array.isArray(v)) {
      for (const x of v) {
        if (typeof x === 'string') values.add(x);
      }
    } else if (typeof v === 'string' && v) {
      values.add(v);
    }
  }
  return [...values].sort();
}
