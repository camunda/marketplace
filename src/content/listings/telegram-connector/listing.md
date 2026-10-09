---
id: 782060
slug: "telegram-connector"
name: "Telegram Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Leon Deng"
creatorUrl: "https://github.com/deng-leon/"
categories: 
  - "Collaboration Tools"
industries: []
useCases: []
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
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Send and receive Telegram events"
tagline: "Automate Telegram Messaging and Webhooks"
templates: 
  - id: null
    name: "Telegram Connector Outbound Template"
    url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/connectors/telegram-connector.json"
  - id: null
    name: "Telegram Connector Inbound Start Template"
    url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/element-templates/telegram-inbound-connector-message-start-event.json"
  - id: null
    name: "Telegram Connector Inbound Intermediate Template"
    url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/element-templates/telegram-inbound-connector-intermediate-catch-event.json"
  - id: null
    name: "Telegram Connector Inbound Boundary Template"
    url: "https://raw.githubusercontent.com/deng-leon/telegram-connector/refs/heads/main/element-templates/telegram-inbound-connector-boundary-event.json"
saasTemplate: null
smTemplate: "https://github.com/deng-leon/telegram-connector/"
githubRepo: null
docsUrl: "https://github.com/deng-leon/telegram-connector/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
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
