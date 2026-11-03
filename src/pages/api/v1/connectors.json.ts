import { getListings, isConnector } from '../../../lib/data';
import { connectorListEntry } from '../../../lib/api';

/**
 * Replicates marketplace-api: GET /api/v1/connectors
 * Served as a static file. Point the CDN at /api/v1/connectors -> /api/v1/connectors.json
 * (or configure the host to serve .json extensionless).
 */
export async function GET() {
  const listings = await getListings();
  const items = listings.filter(isConnector).map(connectorListEntry);
  return Response.json({ items });
}
