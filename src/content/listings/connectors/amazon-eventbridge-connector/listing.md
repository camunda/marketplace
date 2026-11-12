---
id: 419044
name: "Amazon EventBridge Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Cloud Computing Services"
useCases: 
  - "Microservices orchestration"
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
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Real-time event handling in Camunda"
seoDescription: "Supercharge your Camunda processes with the Amazon EventBridge Connector. Receive and send events in real time, effortlessly connecting Camunda processes with AWS services to establish a dynamic, event-driven architecture."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSEventBridge.v1/latest/aws-eventbridge-outbound-connector.json"
    id: "io.camunda.connectors.AWSEventBridge.v1"
    name: "Amazon Event Bridge Outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSEventBridge.MessageStart.v1/latest/aws-eventbridge-connector-message-start.json"
    id: "io.camunda.connectors.AWSEventBridge.MessageStart.v1"
    name: "Amazon Event Bridge Inbound Start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSEventBridge.intermediate.v1/latest/aws-eventbridge-connector-intermediate.json"
    id: "io.camunda.connectors.AWSEventBridge.intermediate.v1"
    name: "Amazon Event Bridge Inbound Intermediate"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSEventBridge.boundary.v1/latest/aws-eventbridge-connector-boundary.json"
    name: "Amazon Event Bridge Boundary"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/aws/aws-eventbridge/element-templates"
links: 
  support: "https://forum.camunda.io/"
  website: "https://camunda.com"
lastModified: "2025-09-03"
---

Supercharge your Camunda processes with the Amazon EventBridge Connector. Receive and send events in real time, effortlessly connecting Camunda processes with AWS services to establish a dynamic, event-driven architecture.

## Features

### Receive Events from EventBridge

Leverage Amazon EventBridge as an event source to trigger Camunda processes. This is particularly useful in scenarios where multiple AWS services are involved in your workflow and you want to initiate Camunda tasks based on changes or updates in those services. It also enables centralized event management, making it easier to monitor and troubleshoot your workflows.

### Send Events to EventBridge

Publish events from Camunda processes to Amazon EventBridge, facilitating interactions with a multitude of AWS services and third-party applications. This allows you to extend your Camunda workflows beyond the BPM engine, integrating them into broader AWS architectures for analytics, monitoring, or further automated actions.
