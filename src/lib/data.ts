import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Listing = CollectionEntry<'listings'>['data'];

export async function getListings(): Promise<Listing[]> {
  const entries = await getCollection('listings');
  // Most recently updated first; fall back to the name.
  return entries
    .map((e) => e.data)
    .sort((a, b) => (b.lastModified ?? '').localeCompare(a.lastModified ?? '') || a.name.localeCompare(b.name));
}

export const isConnector = (l: Listing) => l.type.includes('connector');
export const isBlueprint = (l: Listing) => l.type.includes('blueprint');
export const isSolution = (l: Listing) => l.type.includes('solution');

/** URL of a vendored media file (icon, screenshot, ...) that sits next to listing.yaml. */
export function assetUrl(l: Listing, file: string | null): string | null {
  return file ? `/listings/${l.slug}/assets/${file}` : null;
}

/** Lowest compatible Camunda version, matching marketplace-api's requiredCamundaVersion. */
export const requiredVersion = (l: Listing) => l.compatibleVersions[0] ?? null;

/** marketplace-api: selfHosted = self-hosted only, not part of the SaaS bundle. */
export const selfHosted = (l: Listing) =>
  l.runtimes.includes('self-hosted') && !l.runtimes.includes('bundle');

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

export function videoEmbedUrl(l: Listing): string | null {
  const v = l.demoVideo;
  if (!v?.id) return null;
  if (v.provider === 'youtube') return `https://www.youtube.com/embed/${v.id}`;
  if (v.provider === 'vimeo') return `https://player.vimeo.com/video/${v.id}`;
  return null;
}

/** marketplace-api: blueprints marked "listing-only"/"coming-soon" have no source files
 *  and are hidden from the default /api/v1/blueprints response. */
export const hasSourceFiles = (l: Listing) =>
  l.availability !== 'listing-only' && l.availability !== 'coming-soon';

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
