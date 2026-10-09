import { getListings, isConnector } from '../../../../lib/data';

/**
 * Replicates marketplace-api: GET /api/v1/connectors/{id}
 */
export async function getStaticPaths() {
  const listings = await getListings();
  return listings.filter(isConnector).map((l) => ({
    params: { id: String(l.id) },
    props: { l },
  }));
}

export async function GET({ props }: { props: { l: Awaited<ReturnType<typeof getListings>>[number] } }) {
  const { l } = props;
  return Response.json({
    creatorUrl: l.creatorUrl,
    templates: l.templates,
  });
}
