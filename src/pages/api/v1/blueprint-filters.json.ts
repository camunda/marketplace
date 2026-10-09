import { getListings, isBlueprint, facetValues } from '../../../lib/data';

const slugValue = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function options(values: string[], group: string) {
  return values.map((v) => ({ value: slugValue(v), label: v, group }));
}

/**
 * Replicates marketplace-api: GET /api/v1/blueprint-filters
 */
export async function GET() {
  const blueprints = (await getListings()).filter(isBlueprint);
  const groups = [
    { value: 'blueprintCategory', label: 'Type', link: null, options: options(facetValues(blueprints, 'categories'), 'type') },
    { value: 'industry', label: 'Industry', link: null, options: options(facetValues(blueprints, 'industries'), 'industry') },
    { value: 'useCase', label: 'Use case', link: null, options: options(facetValues(blueprints, 'useCases'), 'useCase') },
    { value: 'creator', label: 'Creator', link: null, options: options(facetValues(blueprints, 'creatorType'), 'creator') },
    { value: 'camundaVersion', label: 'Compatible version', link: null, options: options(facetValues(blueprints, 'compatibleVersions'), 'version') },
  ];
  return Response.json(groups.filter((g) => g.options.length > 0));
}
