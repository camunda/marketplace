---
id: 632607
slug: "sap-eventing-message-start-event-connector"
name: "SAP Eventing Message Start Event Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Enterprise Applications"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:StartEvent"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Start Camunda processes from SAP AEM"
tagline: "Start BPMN processes from SAP CloudEvents"
templates: 
  - id: null
    name: "SAP Eventing Message Start Event Connector Inbound Start Template"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates/sap-eventing-message-start-event-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/sap-connectors/tree/ec7ed38ed3cae366e905bacc81c132b0a73b1afa/eventing-connectors/element-templates"
githubRepo: null
docsUrl: "https://docs.camunda.io/docs/components/camunda-integrations/sap/eventing"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
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
