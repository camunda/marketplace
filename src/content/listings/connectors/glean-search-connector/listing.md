---
id: 584408
name: "Glean Search Connector"
creatorType: "community"
creatorName: "Camunda / Peter Bojtos"
creatorUrl: "https://github.com/bojtospeter"
categories: 
  - "AI Services"
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
availability: "open-source"
description: "Search Glean from business processes"
seoDescription: "Integrate Glean's AI-powered search into enterprise processes to make more informed decisions."
templates: 
  - url: "https://raw.githubusercontent.com/bojtospeter/camunda-glean-connector/refs/heads/main/element-templates/glean_search_connector.json"
    name: "Glean Search Connector Outbound Template"
smTemplate: "https://github.com/bojtospeter/camunda-glean-connector"
links: 
  docs: "https://github.com/bojtospeter/camunda-glean-connector"
  support: "https://forum.camunda.io/"
lastModified: "2025-08-08"
---

Integrate Glean's AI-powered search into enterprise processes to make more informed decisions.

## Features

### AI-driven enterprise search from business processes

Send questions directly from a Camunda-based process to Glean’s AI-powered enterprise search API. Instantly retrieve the most relevant documents, snippets, and links from across your organization's indexed knowledge base.

### Flexible query customization

Easily configure the search query from within a BPMN-based, whether it’s a fixed keyword search or a dynamic question assembled from process variables. Fine-tune parameters such as snippet size, page size, and whether to return LLM-generated content.

### Direct result mapping to process variables

Map search results, complete with text snippets and URLs, into structured process variables for downstream tasks. Use this data immediately for approvals, decision gateways, document generation, or chatbot responses.
