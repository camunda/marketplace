---
id: 836162
name: "Cohere Connector"
creatorType: "community"
creatorName: "Zishan Ali Khan"
creatorUrl: "https://www.linkedin.com/in/zishanalikhan/"
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
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Bring Cohere models into processes"
templates: 
  - url: "https://raw.githubusercontent.com/zishan-c8academy/camunda-connector-cohere/master/src/cohere-connector.json"
    name: "Cohere Connector Outbound Template"
smTemplate: "https://github.com/zishan-c8academy/camunda-connector-cohere"
links: 
  docs: "https://github.com/zishan-c8academy/camunda-connector-cohere#readme"
  support: "https://github.com/zishan-c8academy/camunda-connector-cohere/issues"
lastModified: "2026-07-15"
---

*Put Cohere chat, embeddings, and reranking to work in your processes*

Integrate Cohere into Camunda business processes: chat with Command models, get schema-conformant JSON answers, classify text for routing decisions, embed documents for semantic search, and rerank retrieval hits by relevance, all from a service task.

## Features

### Rerank retrieval hits by relevance

Pass vector-store hits and a query to Cohere Rerank and get back relevance-ordered documents, ready to feed an AI agent or a human review step. Positions are 1-based so they index FEEL lists directly.

### Get guaranteed JSON answers

Provide a JSON schema and the structured output operation returns a string that is guaranteed to parse as JSON conforming to it, ideal for driving gateways and downstream automation.

### Classify text for routing

Give a list of allowed labels and get back exactly one, enforced through a structured-output enum at temperature 0, so a gateway condition such as cohereLabel = "approve" just works.

### Track token spend per instance

Chat operations map Cohere's billed token counts into a plain process variable, so you can aggregate cost in Camunda Optimize variable reports or explain a single instance in Camunda Operate.

### Pick any model, current or future

Every operation offers the current Cohere lineup plus a custom model field for fine-tuned or newly released models, and a list-models utility operation shows what your API key can access.

### Run anywhere with zero hosting

The connector is an element template on Camunda's built-in REST connector, so it works on SaaS and Self-Managed 8.5+ with no Java, no custom runtime, and secrets kept in the cluster.
