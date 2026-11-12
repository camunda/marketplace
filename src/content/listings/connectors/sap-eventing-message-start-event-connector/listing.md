---
id: 632607
name: "SAP Eventing Message Start Event Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Enterprise Applications"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:StartEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Start Camunda processes from SAP AEM"
seoDescription: "Start Camunda processes from SAP Advanced Event Mesh CloudEvents for real-time, event-driven orchestration of SAP systems."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates/sap-eventing-message-start-event-connector.json"
    name: "SAP Eventing Message Start Event Connector Inbound Start Template"
smTemplate: "https://github.com/camunda/sap-connectors/tree/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates"
links: 
  docs: "https://docs.camunda.io/docs/components/camunda-integrations/sap/eventing"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-21"
---

Start Camunda processes from SAP Advanced Event Mesh CloudEvents for real-time, event-driven orchestration of SAP systems.

## Features

### Event-driven process start

Automatically creates new process instances when CloudEvents arrive from SAP AEM.

### Secure webhook endpoint

Generates unique webhook URLs on deployment for secure AEM event delivery.

### Direct CloudEvent payload mapping

Relays full CloudEvent header and body payloads into Camunda for immediate use.
