---
id: 677340
name: "Inbound Messaging Connector"
creatorType: "community"
creatorName: "Ganesh Kumar"
creatorUrl: "https://www.linkedin.com/in/ganesh-kumar-g-01a047325/"
categories: 
  - "External Data Services"
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
templates: 
  - url: "https://raw.githubusercontent.com/ganeshkumargunaseelan-web/camunda-inbound-connector/refs/heads/main/assets/connector-template.json"
    name: "Inbound Messaging Connector"
links: 
  github: "https://github.com/ganeshkumargunaseelan-web/camunda-inbound-connector/"
  support: "https://forum.camunda.io/"
lastModified: "2025-12-17"
---

*Real-Time Messaging Integration for GCC Workflows*

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
