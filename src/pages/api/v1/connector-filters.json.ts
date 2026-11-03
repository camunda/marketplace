/**
 * Replicates marketplace-api: GET /api/v1/connector-filters
 *
 * Static payload, byte-compatible with the live contract: the Java service
 * built these groups from its filter enums (fixed values, labels and order),
 * not from the listing data. Keep in sync with the live response when the
 * enums change (camunda/marketplace-api service/appdirect/*).
 */
export async function GET() {
  return Response.json([
    {
      value: 'creatorType',
      label: 'Creator',
      options: [
        { value: 'camunda', label: 'Camunda' },
        { value: 'partner', label: 'Partner' },
        { value: 'community', label: 'Community' },
      ],
    },
    {
      value: 'connectorType',
      label: 'Type',
      link: {
        href: 'https://docs.camunda.io/docs/components/connectors/connector-types/',
        text: 'Learn about connector types',
      },
      options: [
        { value: 'inbound', label: 'Inbound' },
        { value: 'outbound', label: 'Outbound' },
      ],
    },
    {
      value: 'connectorRuntime',
      label: 'Runtime',
      link: {
        href: 'https://docs.camunda.io/docs/components/connectors/introduction-to-connectors/',
        text: 'Learn about connector runtimes',
      },
      options: [
        { value: 'bundle', label: 'Camunda connectors' },
        { value: 'self-hosted', label: 'Self-hosted connectors' },
      ],
    },
    {
      value: 'requiredCamundaVersion',
      label: 'Compatible version',
      options: [
        { value: '8.9', label: 'Zeebe 8.9' },
        { value: '8.8', label: 'Zeebe 8.8' },
        { value: '8.7', label: 'Zeebe 8.7' },
        { value: '8.6', label: 'Zeebe 8.6' },
        { value: '8.5', label: 'Zeebe 8.5' },
      ],
    },
    {
      value: 'supportedBpmnType',
      label: 'Supported BPMN type',
      options: [
        { value: 'task', label: 'Task' },
        { value: 'startEvent', label: 'Start Event' },
        { value: 'intermediateCatchEvent', label: 'Intermediate Catch Event' },
        { value: 'intermediateThrowEvent', label: 'Intermediate Throw Event' },
        { value: 'boundaryEvent', label: 'Boundary Event' },
        { value: 'subProcess', label: 'Subprocess' },
      ],
    },
  ]);
}
