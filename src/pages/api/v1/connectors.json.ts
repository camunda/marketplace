import { getListings, isConnector, requiredVersion, selfHosted, assetUrl, type Listing } from '../../../lib/data';

/**
 * Replicates marketplace-api: GET /api/v1/connectors
 * Served as a static file. Point the CDN at /api/v1/connectors -> /api/v1/connectors.json
 * (or configure the host to serve .json extensionless).
 */
export async function GET() {
  const listings = await getListings();
  const items = listings.filter(isConnector).map((l: Listing) => ({
    id: String(l.id),
    name: l.name,
    description: l.description,
    creatorName: l.creatorName,
    documentationUrl: new URL(`/listings/${l.slug}/`, import.meta.env.SITE).toString(),
    iconUrl: assetUrl(l, l.icon) ? new URL(assetUrl(l, l.icon)!, import.meta.env.SITE).toString() : null,
    requiredCamundaVersion: requiredVersion(l),
    selfHosted: selfHosted(l),
  }));
  return Response.json({ items });
}
