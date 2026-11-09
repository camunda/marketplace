---
id: 632753
name: "Perplexity AI Connector"
creatorType: "partner"
creatorName: "Nagarro"
creatorUrl: "https://www.nagarro.com/en/"
categories: 
  - "AI Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Ask AI questions in Camunda-based processes"
seoDescription: "Query Perplexity AI from Camunda to enrich business processes with real-time, intelligent, natural language responses."
templates: 
  - url: "https://raw.githubusercontent.com/surbhi1091996/perplexityAI/refs/heads/main/perplexity-ai-connector.json"
    name: "PerplexityAI Connector Outbound Template"
smTemplate: "https://github.com/surbhi1091996/perplexityAI"
links: 
  docs: "https://github.com/surbhi1091996/perplexityAI/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-17"
---

Query Perplexity AI from Camunda to enrich business processes with real-time, intelligent, natural language responses.

## Features

### Send prompts to Perplexity AI

Easily send natural language prompts to Perplexity AI directly from BPMN elements in Camunda processes (such as service tasks and message events). Use any supported model and configure prompts dynamically based on process variables.

### Retrieve and use AI responses

Automatically capture AI-generated responses from Perplexity and use them in downstream workflow logic such as approvals, summaries, and decision gateways, all without writing any custom code.
