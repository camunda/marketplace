/**
 * Replicates marketplace-api: GET /api/v1/blueprint-filters
 *
 * Static payload, byte-compatible with the live contract: the Java service
 * built these groups from its filter enums (fixed values, labels, order and
 * grouping), not from the listing data. Note the quirks kept for parity:
 * "public Sector" (capital S) in the industry values and `group` present
 * only on the type options.
 */
export async function GET() {
  return Response.json([
    {
      groupName: 'left',
      filters: [
        {
          value: 'processBlueprintType',
          label: 'Type',
          options: [
            { value: 'microservice orchestration', label: 'Microservice Orchestration', group: 'Use cases' },
            { value: 'human task orchestration', label: 'Human Task Orchestration', group: 'Use cases' },
            { value: 'rpa bot orchestration', label: 'RPA Bot Orchestration', group: 'Use cases' },
            { value: 'simplified case management', label: 'Simplified Case Management', group: 'Use cases' },
            { value: 'agentic ai orchestration', label: 'Agentic AI Orchestration', group: 'Use cases' },
          ],
        },
        {
          value: 'processBlueprintCategory',
          label: 'Category',
          options: [
            { value: 'best practices', label: 'Best practices' },
            { value: 'quick start', label: 'Quick start' },
            { value: 'solutions', label: 'Solutions' },
            { value: 'patterns', label: 'Patterns' },
            { value: 'dmn', label: 'DMN' },
            { value: 'form', label: 'Form' },
          ],
        },
      ],
    },
    {
      groupName: 'top',
      filters: [
        {
          value: 'processBlueprintIndustry',
          label: 'All industries',
          options: [
            { value: 'financial services', label: 'Financial Services' },
            { value: 'insurance', label: 'Insurance' },
            { value: 'media and entertainment', label: 'Media and entertainment' },
            { value: 'technology', label: 'Technology' },
            { value: 'healthcare', label: 'Healthcare' },
            { value: 'manufacturing', label: 'Manufacturing' },
            { value: 'retail', label: 'Retail' },
            { value: 'supply chain and logistics', label: 'Supply chain & logistics' },
            { value: 'public Sector', label: 'Public Sector' },
            { value: 'telecommunications', label: 'Telecommunications' },
            { value: 'any', label: 'Any' },
          ],
        },
        {
          value: 'creatorType',
          label: 'All creators',
          options: [
            { value: 'camunda', label: 'Camunda' },
            { value: 'partner', label: 'Partner' },
            { value: 'community', label: 'Community' },
          ],
        },
        {
          value: 'requiredCamundaVersion',
          label: 'All Camunda versions',
          options: [
            { value: '8.9', label: 'Zeebe 8.9' },
            { value: '8.8', label: 'Zeebe 8.8' },
            { value: '8.7', label: 'Zeebe 8.7' },
            { value: '8.6', label: 'Zeebe 8.6' },
            { value: '8.5', label: 'Zeebe 8.5' },
          ],
        },
      ],
    },
  ]);
}
