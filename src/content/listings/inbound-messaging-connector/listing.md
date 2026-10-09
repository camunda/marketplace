---
id: 677340
slug: "inbound-messaging-connector"
name: "Inbound Messaging Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Ganesh Kumar"
creatorUrl: "https://www.linkedin.com/in/ganesh-kumar-g-01a047325/"
categories: 
  - "External Data Services"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Arabic-ready inbound messaging for Camunda"
tagline: "Real-Time Messaging Integration for GCC Workflows"
templates: 
  - id: null
    name: "Inbound Messaging Connector"
    url: "https://raw.githubusercontent.com/ganeshkumargunaseelan-web/camunda-inbound-connector/refs/heads/main/assets/connector-template.json"
saasTemplate: "https://raw.githubusercontent.com/ganeshkumargunaseelan-web/camunda-inbound-connector/refs/heads/main/assets/connector-template.json"
smTemplate: null
githubRepo: "https://github.com/ganeshkumargunaseelan-web/camunda-inbound-connector/"
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-12-17"
---

A GCC-focused inbound connector that brings WhatsApp, Telegram, and SMS messages into Camunda 8 workflows with Arabic normalization, message routing, and real-time process triggering.

## Features

### Multi-Channel Message Ingestion

Receives and processes messages from WhatsApp Business API, Telegram Bot API, and GCC SMS providers including Unifonic, Infobip, STC, and Etisalat.

### Arabic Language Normalization

Normalizes diacritics, tatweel, hamza variants, and Eastern Arabic numerals to ensure accurate routing and workflow automation.

### Process Instantiation & Message Correlation

Starts new BPMN process instances or correlates follow-up messages to existing workflows using correlation keys and routing rules.

### Unified Message Model

Converts incoming channel-specific payloads into a consistent InboundMessage structure for predictable automation behavior.

### Attachment Handling

Downloads and stores images, PDFs, and media files to Local Storage, MinIO, or AWS S3.

### Session State Tracking

Maintains conversational state across messages to support multi-step chat-driven workflows.
