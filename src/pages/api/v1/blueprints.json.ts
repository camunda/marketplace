import { getListings, isBlueprint, requiredVersion, saasTemplateUrls, assetUrl, hasSourceFiles } from '../../../lib/data';

/**
 * Replicates marketplace-api: GET /api/v1/blueprints
 * Matches the live default: blueprints without source files
 * (availability "listing-only" / "coming-soon") are excluded.
 */
export async function GET() {
  const listings = await getListings();
  const items = listings.filter(isBlueprint).filter(hasSourceFiles).map((l) => ({
    id: String(l.id),
    name: l.name,
    overview: l.tagline ?? l.description,
    description: l.description,
    creatorName: l.creatorName,
    documentationUrl: new URL(`/listings/${l.slug}/`, import.meta.env.SITE).toString(),
    iconUrl: assetUrl(l, l.icon) ? new URL(assetUrl(l, l.icon)!, import.meta.env.SITE).toString() : null,
    overviewImageUrl: assetUrl(l, l.heroImage) ? new URL(assetUrl(l, l.heroImage)!, import.meta.env.SITE).toString() : null,
    requiredCamundaVersion: requiredVersion(l),
    cta: saasTemplateUrls(l).length
      ? { text: 'Use in Web Modeler', iconRef: 'web-modeler' }
      : null,
  }));
  return Response.json({ items });
}
