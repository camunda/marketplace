import { getListings, isConnector, facetValues } from '../../../lib/data';

const slugValue = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function options(values: string[], group: string) {
  return values.map((v) => ({ value: slugValue(v), label: v, group }));
}

/**
 * Replicates marketplace-api: GET /api/v1/connector-filters
 * Filter groups are computed from the data instead of hard-coded AppDirect ids.
 */
export async function GET() {
  const connectors = (await getListings()).filter(isConnector);
  const groups = [
    { value: 'creator', label: 'Creator', link: null, options: options(facetValues(connectors, 'creatorType'), 'creator') },
    {
      value: 'connectorType',
      label: 'Category',
      link: {
        href: 'https://docs.camunda.io/docs/components/connectors/connector-types/',
        text: 'Learn about connector types',
      },
      options: options(facetValues(connectors, 'categories'), 'category'),
    },
    {
      value: 'connectorRuntime',
      label: 'Runtime',
      link: {
        href: 'https://docs.camunda.io/docs/components/connectors/introduction-to-connectors/',
        text: 'Learn about connector runtimes',
      },
      options: options(facetValues(connectors, 'runtimes'), 'runtime'),
    },
    { value: 'camundaVersion', label: 'Compatible version', link: null, options: options(facetValues(connectors, 'compatibleVersions'), 'version') },
    { value: 'bpmnType', label: 'Supported BPMN type', link: null, options: options(facetValues(connectors, 'bpmnTypes'), 'bpmnType') },
  ];
  return Response.json(groups.filter((g) => g.options.length > 0));
}
