---
id: 422918
name: "REST API Polling"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Technical Protocols"
useCases: 
  - "Microservices orchestration"
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
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
description: "Efficient REST API Intermediate Polling"
seoDescription: "Empower your Camunda workflows with the REST API Polling Connector. Keep tabs on external system changes by polling REST APIs and triggering intermediate events based on custom conditions. Perfect for when you're dealing with systems that don't support webhooks"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.http.Polling/latest/http-polling-connector.json"
    name: "REST API Polling Inbound Intermediate Template"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.http.Polling.Boundary/latest/http-polling-boundary-catch-event-connector.json"
    name: "REST API Polling Inbound Boundary Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/http/polling"
links: 
  support: "https://forum.camunda.io/"
lastModified: "2025-09-09"
---

Empower your Camunda workflows with the REST API Polling Connector. Keep tabs on external system changes by polling REST APIs and triggering intermediate events based on custom conditions. Perfect for when you're dealing with systems that don't support webhooks

## Features

### Configurable REST Calls

Configure your REST API calls with standard HTTP methods, headers, and other configurations. This feature is ideal for cases where you need to retrieve status updates from third-party services that do not provide real-time event notifications, such as ticketing systems, order management systems, or any external database.

### Polling Interval and Conditions

Define the frequency of polling and set conditions that determine when to trigger an intermediate event. Use this feature for continuous monitoring of long-running processes or to check for specific status changes that require immediate action within your workflow.
