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
  // Live contract (Jackson NON_ABSENT): creatorUrl is omitted when unset,
  // templates carry id, name and url, each omitted when unset.
  return Response.json({
    ...(l.creatorUrl ? { creatorUrl: l.creatorUrl } : {}),
    templates: l.templates.map((t) => ({
      ...(t.id ? { id: t.id } : {}),
      ...(t.name ? { name: t.name } : {}),
      url: t.url,
    })),
  });
}
