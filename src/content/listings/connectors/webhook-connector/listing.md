---
id: 418745
name: "Webhook Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Technical Protocols"
useCases: 
  - "Microservices orchestration"
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
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Integrate any webhook seamlessly, securely"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.webhook.WebhookConnectorBoundary.v1/latest/webhook-connector-boundary.json"
    name: "Webhook Inbound Boundary Template"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.webhook.WebhookConnectorStartMessage.v1/latest/webhook-connector-start-message.json"
    name: "Webhook Inbound Start Template"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.webhook.WebhookConnectorIntermediate.v1/latest/webhook-connector-intermediate.json"
    name: "Webhook Inbound Intermediate Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/webhook/element-templates"
video: "https://vimeo.com/812763971?share=copy"
links: 
  website: "https://camunda.com"
lastModified: "2025-09-10"
---

*Unleash the Power of Webhooks in Your Camunda Processes*

Integrate any external webhook into your Camunda processes. Supports all HTTP methods and offers robust security through JWT, Basic, API KEY, and HMAC authentication.

## Features

### Supports All HTTP Methods

Flexible to manage GET, POST, PUT, DELETE, PATCH, and more, making this Connector versatile for any external integration.

### Multiple Authorization Mechanisms

JWT allows integration with services that use JSON Web Tokens for security. Basic authentication leverages username and password authentication for simplicity. API key integration allows you to work with services that use API keys for authentication.

### HMAC Authentication

Provides an extra layer of security by requiring the request to be signed by a secret key.
