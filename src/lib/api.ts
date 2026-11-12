import {
  requiredVersion,
  selfHosted,
  assetUrl,
  saasTemplateUrls,
  hasSourceFiles,
  type Listing,
} from './data';

const siteUrl = (path: string) => new URL(path, import.meta.env.SITE).toString();

/** "bpmn:StartEvent" -> "startEvent" (marketplace-api filter value shape). */
export const bpmnValue = (s: string) => {
  const name = s.replace('bpmn:', '');
  return name.charAt(0).toLowerCase() + name.slice(1);
};

export function connectorListEntry(l: Listing) {
  return {
    id: String(l.id),
    name: l.name,
    description: l.description,
    creatorName: l.creatorName ?? null,
    documentationUrl: siteUrl(`/listings/${l.slug}/`),
    iconUrl: assetUrl(l, l.icon) ? siteUrl(assetUrl(l, l.icon)!) : null,
    requiredCamundaVersion: requiredVersion(l),
    selfHosted: selfHosted(l),
  };
}

export function blueprintListEntry(l: Listing) {
  // Live contract (Jackson NON_ABSENT): requiredCamundaVersion is only
  // present when the listing declares compatible versions.
  const version = requiredVersion(l);
  return {
    id: String(l.id),
    name: l.name,
    overview: l.description,
    description: l.description,
    creatorName: l.creatorName ?? null,
    documentationUrl: siteUrl(`/listings/${l.slug}/`),
    iconUrl: assetUrl(l, l.icon) ? siteUrl(assetUrl(l, l.icon)!) : null,
    overviewImageUrl: l.gallery[0] ? siteUrl(assetUrl(l, l.gallery[0])!) : null,
    ...(version ? { requiredCamundaVersion: version } : {}),
    cta: saasTemplateUrls(l).length ? { text: 'Use in Web Modeler', iconRef: 'web-modeler' } : null,
  };
}

/** Facet fields consumed by njs/filter.js (CONNECTOR_FACETS). */
export function connectorFacets(l: Listing) {
  return {
    connectorTypes: l.connectorTypes,
    runtimes: l.runtimes,
    creatorType: l.creatorType ?? null,
    compatibleVersions: l.compatibleVersions,
    bpmnTypes: l.bpmnTypes.map(bpmnValue),
  };
}

/** Facet fields consumed by njs/filter.js (BLUEPRINT_FACETS + hasSourceFiles). */
export function blueprintFacets(l: Listing) {
  return {
    // The live API matches use cases by AppDirect attribute id; its filter
    // values differ from the tag spelling ("Microservices" -> "microservice").
    useCases: l.useCases.map((u) =>
      u.toLowerCase() === 'microservices orchestration' ? 'microservice orchestration' : u,
    ),
    categories: [...l.categories, ...(l.apiSolutionCategory ? ['solutions'] : [])],
    industries: [
      ...l.industries.map((i) =>
        i.toLowerCase() === 'supply chain & logistics' ? 'supply chain and logistics' : i,
      ),
      ...(l.apiAnyIndustry ? ['any'] : []),
    ],
    creatorType: l.creatorType ?? null,
    compatibleVersions: l.compatibleVersions,
    hasSourceFiles: hasSourceFiles(l),
  };
}
