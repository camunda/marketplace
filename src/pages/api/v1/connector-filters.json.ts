import { getListings, isConnector, facetValues } from '../../../lib/data';

const CONNECTOR_TYPE_LABELS: Record<string, string> = { inbound: 'Inbound', outbound: 'Outbound' };
const RUNTIME_LABELS: Record<string, string> = {
  bundle: 'Camunda connectors',
  'self-hosted': 'Self-hosted connectors',
};
const CREATOR_LABELS: Record<string, string> = {
  camunda: 'Camunda',
  partner: 'Partner',
  community: 'Community',
};

const bpmnValue = (s: string) => {
  const name = s.replace('bpmn:', '');
  return name.charAt(0).toLowerCase() + name.slice(1);
};
const bpmnLabel = (s: string) => {
  const label = s
    .replace('bpmn:', '')
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return label === 'Sub Process' ? 'Subprocess' : label;
};

function options(values: string[], group: string, labels: Record<string, string> = {}) {
  return values.map((v) => ({ value: v, label: labels[v] ?? v, group }));
}

/**
 * Replicates marketplace-api: GET /api/v1/connector-filters
 * Same keys, values and labels as the live contract; options computed from the data.
 */
export async function GET() {
  const connectors = (await getListings()).filter(isConnector);
  const groups = [
    { value: 'creatorType', label: 'Creator', link: null, options: options(facetValues(connectors, 'creatorType'), 'creator', CREATOR_LABELS) },
    {
      value: 'connectorType',
      label: 'Type',
      link: {
        href: 'https://docs.camunda.io/docs/components/connectors/connector-types/',
        text: 'Learn about connector types',
      },
      options: options(facetValues(connectors, 'connectorTypes'), 'connectorType', CONNECTOR_TYPE_LABELS),
    },
    {
      value: 'connectorRuntime',
      label: 'Runtime',
      link: {
        href: 'https://docs.camunda.io/docs/components/connectors/introduction-to-connectors/',
        text: 'Learn about connector runtimes',
      },
      options: options(facetValues(connectors, 'runtimes'), 'runtime', RUNTIME_LABELS),
    },
    {
      value: 'requiredCamundaVersion',
      label: 'Compatible version',
      link: null,
      options: facetValues(connectors, 'compatibleVersions')
        .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
        .map((v) => ({ value: v, label: `Zeebe ${v}`, group: 'version' })),
    },
    {
      value: 'supportedBpmnType',
      label: 'Supported BPMN type',
      link: null,
      options: facetValues(connectors, 'bpmnTypes')
        // live enum order
        .sort(
          (a, b) =>
            ['bpmn:Task', 'bpmn:StartEvent', 'bpmn:IntermediateCatchEvent', 'bpmn:IntermediateThrowEvent', 'bpmn:BoundaryEvent', 'bpmn:SubProcess'].indexOf(a) -
            ['bpmn:Task', 'bpmn:StartEvent', 'bpmn:IntermediateCatchEvent', 'bpmn:IntermediateThrowEvent', 'bpmn:BoundaryEvent', 'bpmn:SubProcess'].indexOf(b),
        )
        .map((v) => ({
          value: bpmnValue(v),
          label: bpmnLabel(v),
          group: 'bpmnType',
        })),
    },
  ];
  return Response.json(groups.filter((g) => g.options.length > 0));
}
