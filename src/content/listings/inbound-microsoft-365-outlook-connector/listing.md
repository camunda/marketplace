---
id: 789327
slug: "inbound-microsoft-365-outlook-connector"
name: "Inbound Microsoft 365 Outlook Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Enterprise Applications"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.9"
availability: "open-source"
description: "Integrate email handling into process"
tagline: "Act on emails in processes"
templates: 
  - id: null
    name: "Outlook Email  Inbound Connector Inbound Start Template"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/microsoft/email-inbound/element-templates/microsoft-o365-email-message-start-event-connector.json"
  - id: null
    name: "Outlook Email  Inbound Connector Inbound Intermediate Template"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/microsoft/email-inbound/element-templates/microsoft-o365-email-intermediate-catch-event-connector.json"
  - id: null
    name: "Outlook Email  Inbound Connector Inbound Boundary Template"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/microsoft/email-inbound/element-templates/microsoft-o365-email-boundary-event-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/microsoft/email-inbound"
githubRepo: null
docsUrl: "https://docs.camunda.io/docs/next/components/connectors/out-of-the-box-connectors/microsoft-o365-mail-inbound/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-04-09"
---

Safely connect Microsoft 365 Outlook accounts and manage emails in business processes.

## Features

### React to incoming email

The inbound connector turns messages arriving in an Outlook inbox into Camunda events, which you can catch in intermediary events or use to start processes.

### Post-process emails

Handle incoming emails by marking them as read, moving them, or deleting them.

### Filter at your convinience

With support for advanced OData filter queries in addition to a simple setup for common use cases, you can filter emails intelligently and efficiently.

### Enterprise-grade authentification

With delegated permissions, users can self-service register and get a refresh token scoped to them and valid for 90 days at a time. Through enterprise applications and client credentials, you can have functional inboxes polled indefinitely by the connector.
