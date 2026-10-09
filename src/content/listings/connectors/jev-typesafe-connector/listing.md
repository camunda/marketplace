---
id: 871712
name: "Jev (TypeSafe) Connector"
creatorType: "community"
creatorName: "Mathias Geat"
categories: 
  - "AI Services"
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
description: "Turn text and structured data into decisions your processes can act on."
templates: 
  - url: "https://raw.githubusercontent.com/maff/camunda-connector-typesafe-jev/refs/heads/main/element-templates/typesafe-jev-connector.json"
    name: "Jev (TypeSafe) Connector Outbound Template"
smTemplate: "https://github.com/maff/camunda-connector-typesafe-jev"
links: 
  docs: "https://github.com/maff/camunda-connector-typesafe-jev/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-09-23"
---

Use TypeSafe's Jev model to classify, score, or judge any piece of text or structured data, and get back reliable, structured answers your process can act on directly.

## Features

### Flexible judgments in one step

Ask several questions about the same data in one task. Tailor the choice criteria and scoring scale to your workflow: classify a support request, score customer frustration, and check urgency together.

### Structured answers for process decisions

Receive typed answers, confidence scores, and probabilities as process data. Route work, prioritize cases, or trigger reviews using Camunda gateway conditions instead of parsing free-form AI text.

### Simple Camunda integration

Integrates through an element template that runs on Camunda's standard HTTP connector. No custom worker or additional connector runtime needs to be deployed.
