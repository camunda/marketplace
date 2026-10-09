---
id: 632751
name: "SAP Eventing Intermediate Event Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Enterprise Applications"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Correlate CloudEvents to BPMN"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates/sap-eventing-intermediate-event-connector.json"
    name: "SAP Eventing Intermediate Event Connector Inbound Intermediate Template"
smTemplate: "https://github.com/camunda/sap-connectors/tree/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates"
links: 
  docs: "https://docs.camunda.io/docs/components/camunda-integrations/sap/eventing"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-15"
---

*Correlate CloudEvents with running processes*

Correlate SAP AEM CloudEvents to running Camunda processes using CloudEvent metadata or payload for advanced event-driven orchestration.

## Features

### Advanced message correlation

Match CloudEvents to process instances using CloudEvent metadata or body fields as correlation keys.

### Automatic header handling

Supports AEM's Solace-User-Property header mapping for CloudEvent attributes.

### Native CloudEvent delivery

Passes all CloudEvent headers and payload data directly to Camunda-based processes for flexible use.
