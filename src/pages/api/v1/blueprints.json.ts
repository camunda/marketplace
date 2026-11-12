import { getListings, isBlueprint, hasSourceFiles } from '../../../lib/data';
import { blueprintListEntry } from '../../../lib/api';

/**
 * Replicates marketplace-api: GET /api/v1/blueprints
 * Matches the live default: blueprints without source files
 * (availability "listing-only" / "coming-soon") are excluded.
 */
export async function GET() {
  const listings = await getListings();
  const items = listings.filter(isBlueprint).filter(hasSourceFiles).map(blueprintListEntry);
  return Response.json({ items });
}
