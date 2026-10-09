---
id: 871407
slug: "ollama-connector"
name: "Ollama Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Rajesh Ponna"
creatorUrl: "https://www.linkedin.com/in/ponna-rajesh"
categories: 
  - "AI Services"
industries: 
  - "Technology"
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
availability: "open-source"
description: "Local, private AI for Camunda"
tagline: "Run local AI models inside your processes"
templates: 
  - id: null
    name: "Ollama Connector"
    url: "https://raw.githubusercontent.com/rajeshponna/ollama-custom-connector/main/element-templates/ollama-chat.json"
saasTemplate: "https://raw.githubusercontent.com/rajeshponna/ollama-custom-connector/main/element-templates/ollama-chat.json"
smTemplate: "https://raw.githubusercontent.com/rajeshponna/ollama-custom-connector/main/element-templates/ollama-chat.json"
githubRepo: "https://github.com/rajeshponna/ollama-custom-connector"
docsUrl: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-09-15"
---

Run open-weight AI models locally with Ollama inside Camunda processes, with no cloud API costs, full data privacy, and a native BPMN task powered by a custom Java outbound connector.

## Features

### Run models on your own infrastructure

Runs open-weight models (llama3.2, mistral, qwen2.5, gpt-oss:20b) directly on your own infrastructure via Ollama's OpenAI-compatible API.

### Skip per-request AI billing

No cloud AI billing; fixed local compute replaces pay-per-token API fees.

### Keep prompts and responses local

Prompts and responses never leave your local infrastructure.

### Use a native Camunda Modeler template

Ships an "Ollama Chat" element template so the connector appears as a proper task type in BPMN diagrams.

### Use the official Docker Compose setup

Extends Camunda's official Self-Managed Docker Compose distribution with extra_hosts, LOADER_PATH, and a JAR mount, without touching the official files.

### Configure prompt and response mapping

Configure endpoint, model name, and prompt/output variable mapping directly from the BPMN task.
