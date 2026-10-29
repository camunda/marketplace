---
id: 782060
name: "Telegram Connector"
creatorType: "community"
creatorName: "Camunda / Leon Deng"
creatorUrl: "https://github.com/deng-leon/"
categories: 
  - "Collaboration Tools"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Send and receive Telegram events"
seoDescription: "Enable end-to-end bot automation with outbound API actions and inbound webhook events."
templates: 
  - url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/connectors/telegram-connector.json"
    name: "Telegram Connector Outbound Template"
  - url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/element-templates/telegram-inbound-connector-message-start-event.json"
    name: "Telegram Connector Inbound Start Template"
  - url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/element-templates/telegram-inbound-connector-intermediate-catch-event.json"
    name: "Telegram Connector Inbound Intermediate Template"
  - url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/element-templates/telegram-inbound-connector-boundary-event.json"
    name: "Telegram Connector Inbound Boundary Template"
smTemplate: "https://github.com/deng-leon/telegram-connector/"
links: 
  docs: "https://github.com/deng-leon/telegram-connector/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-02-27"
---

Enable end-to-end bot automation with outbound API actions and inbound webhook events.

## Features

### Outbound bot actions

Invoke Telegram Bot API operations including sendMessage, sendChatAction, and media and chat management endpoints.

### Inbound webhook triggering

Receive Telegram updates via webhook and correlate into BPMN start, intermediate, and boundary events.

### Camunda template coverage

Generated templates for message start, intermediate catch, boundary, and start event variants.

### Correlation and output mapping

Supports activation conditions, correlation key expressions, message TTL, and result expression mapping.
