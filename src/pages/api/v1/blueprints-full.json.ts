import { getListings, isBlueprint } from '../../../lib/data';
import { blueprintListEntry, blueprintFacets } from '../../../lib/api';

/**
 * Internal feed for the marketplace-api nginx filter: all blueprints,
 * including fileless ones (availability "listing-only" / "coming-soon"),
 * each with a `facets` object. The filter applies the default
 * fileless exclusion and facet matching, then strips `facets`.
 */
export async function GET() {
  const listings = await getListings();
  const items = listings
    .filter(isBlueprint)
    
    .map((l) => ({ ...blueprintListEntry(l), facets: blueprintFacets(l) }));
  return Response.json({ items });
}
