import { getListings, isConnector } from '../../../lib/data';
import { connectorListEntry, connectorFacets } from '../../../lib/api';

/**
 * Internal feed for the marketplace-api nginx filter: the public
 * /api/v1/connectors entries plus a `facets` object per item.
 * Not part of the public contract; the filter strips `facets` before
 * responding to filtered list requests.
 */
export async function GET() {
  const listings = await getListings();
  const items = listings
    .filter(isConnector)
    
    .map((l) => ({ ...connectorListEntry(l), facets: connectorFacets(l) }));
  return Response.json({ items });
}
