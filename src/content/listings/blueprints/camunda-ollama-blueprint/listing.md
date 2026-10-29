---
id: 871406
name: "Camunda + Ollama Blueprint"
creatorType: "community"
creatorName: "Rajesh Ponna"
creatorUrl: "https://www.linkedin.com/in/ponna-rajesh"
categories: 
  - "Quick Start"
industries: 
  - "Technology"
useCases: 
  - "Microservices orchestration"
resourceTypes: 
  - "Connector Template"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.9"
availability: "open-source"
description: "End-to-end local AI workflow"
seoDescription: "Run a complete Camunda 8 workflow powered by a locally hosted AI model via Ollama \u2014 no cloud API costs, full data privacy, fully self-hosted."
templates: 
  - url: "https://raw.githubusercontent.com/rajeshponna/ollama-custom-connector/main/element-templates/ollama-chat.json"
    name: "Camunda + Ollama Blueprint"
smTemplate: "https://raw.githubusercontent.com/rajeshponna/ollama-custom-connector/main/element-templates/ollama-chat.json"
links: 
  docs: "https://github.com/rajeshponna/ollama-custom-connector/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-09-15"
---

Run a complete Camunda 8 workflow powered by a locally hosted AI model via Ollama — no cloud API costs, full data privacy, fully self-hosted.

## Features

### Run on your own hardware

The entire process runs against a model on your own machine; no data leaves your infrastructure.

### Includes a ready-to-deploy Docker setup

Includes Docker Compose modifications that bridge the connector container to host-based Ollama.

### Use Ollama as a native BPMN task

The Ollama Chat element template makes prompt/response wiring a simple form fill in Camunda Modeler.

### Skip per-token and per-request billing

No per-token or per-request billing because the model runs on local hardware.

### Swap in any Ollama-supported model

Works with any Ollama-supported model — swap llama3.2, mistral, or qwen2.5 without changing the process.
