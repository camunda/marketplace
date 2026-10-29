---
id: 632606
name: "SAP Eventing Outbound Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Enterprise Applications"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Send CloudEvents to SAP AEM"
seoDescription: "Enables real-time, event-driven integrations across SAP BTP, S/4HANA, and ECC systems."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates/sap-eventing-outbound-connector.json"
    name: "SAP Eventing Outbound Connector Outbound Template"
smTemplate: "https://github.com/camunda/sap-connectors/tree/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates"
links: 
  docs: "https://docs.camunda.io/docs/components/camunda-integrations/sap/eventing"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-15"
---

Enables real-time, event-driven integrations across SAP BTP, S/4HANA, and ECC systems.

## Features

### CloudEvent publishing made simple

Send CloudEvents directly from Camunda to SAP AEM topics or queues using HTTP POST.

### Native CloudEvent structure

Automatically handles CloudEvent metadata and JSON body formatting—no manual mapping required.

### Built-in authentication options

Supports basic, API key, OAuth 2.0, and bearer token authentication for secure AEM access.
