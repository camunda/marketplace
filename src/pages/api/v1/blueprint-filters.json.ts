import { getListings, isBlueprint, facetValues, hasSourceFiles } from '../../../lib/data';

const lower = (s: string) => s.toLowerCase();

function options(values: string[], group: string) {
  return values.map((v) => ({ value: lower(v), label: v, group }));
}

const CREATOR_LABELS: Record<string, string> = {
  camunda: 'Camunda',
  partner: 'Partner',
  community: 'Community',
};

/**
 * Replicates marketplace-api: GET /api/v1/blueprint-filters
 * Grouped layout (left column / top bar) as in the live contract.
 * Options are computed from the same blueprint set the list endpoint serves.
 */
export async function GET() {
  const blueprints = (await getListings()).filter(isBlueprint).filter(hasSourceFiles);
  const groups = [
    {
      groupName: 'left',
      filters: [
        { value: 'processBlueprintType', label: 'Type', options: options(facetValues(blueprints, 'useCases'), 'Use cases') },
        { value: 'processBlueprintCategory', label: 'Category', options: options(facetValues(blueprints, 'categories'), 'Categories') },
      ],
    },
    {
      groupName: 'top',
      filters: [
        { value: 'processBlueprintIndustry', label: 'All industries', options: options(facetValues(blueprints, 'industries'), 'Industries') },
        {
          value: 'creatorType',
          label: 'All creators',
          options: facetValues(blueprints, 'creatorType').map((v) => ({
            value: v,
            label: CREATOR_LABELS[v] ?? v,
            group: 'Creator',
          })),
        },
        {
          value: 'requiredCamundaVersion',
          label: 'All Camunda versions',
          options: facetValues(blueprints, 'compatibleVersions')
            .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
            .map((v) => ({ value: v, label: v, group: 'Version' })),
        },
      ],
    },
  ];
  for (const g of groups) g.filters = g.filters.filter((f) => f.options.length > 0);
  return Response.json(groups.filter((g) => g.filters.length > 0));
}
