---
id: 844262
name: "Chameleon Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
categories: 
  - "Automation Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Simulate any connector for testing"
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-chameleon/refs/heads/main/element-templates/chameleon-function.json"
    name: "Chameleon Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-chameleon"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-chameleon/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-07-28"
---

*Simulate any Camunda connector*

The Chameleon connector mimics any connector so you can build and test processes before the real integration is ready. Simulate delays, produce variables, trigger BPMN errors, or work with documents on demand.

## Features

### Simulate delays and set variables

Delay connector execution to simulate a real connector, then return variables. Provide multiple sets of variables, each with an assigned probability, to vary the response.

### Throw BPMN errors on demand

Configure different BPMN errors, each with an assigned probability, to simulate real error conditions during testing.

### Access and produce documents

Provide a document reference to verify that a document was produced correctly. The connector can also write a document to simulate real output.
