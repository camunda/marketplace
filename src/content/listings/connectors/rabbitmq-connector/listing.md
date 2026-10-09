---
id: 418729
name: "RabbitMQ Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Cloud Computing Services"
useCases: 
  - "Microservices orchestration"
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
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Integrate RabbitMQ messaging with Camunda"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.RabbitMQ.v1/latest/rabbitmq-outbound-connector.json"
    name: "Rabbit MQ Outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.RabbitMQ.Intermediate.v1/latest/rabbitmq-inbound-connector-intermediate.json"
    name: "Rabbit MQ Inbound Intermediate"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.RabbitMQ.MessageStart.v1/latest/rabbitmq-inbound-connector-message-start.json"
    name: "Rabbit MQ Inbound Start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.RabbitMQ.Boundary.v1/latest/rabbitmq-inbound-connector-boundary.json"
    name: "Rabbit MQ Inbound Boundary"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/rabbitmq/element-templates"
links: 
  website: "https://camunda.com"
lastModified: "2025-09-10"
---

*Synchronized Messaging in Orchestrated Workflows with Camunda and RabbitMQ*

Integrate reliable RabbitMQ messaging within orchestrated business processes. Ideal for real-time processing, task synchronization, and seamless multi-system communications.

## Features

### Receive Messages

Enables Camunda to listen to RabbitMQ queues, allowing for real-time intake of messages that can trigger or influence subsequent process steps. This feature is particularly useful for scenarios such as order processing, task synchronization, and alerts.

### Send Messages

Allows Camunda to publish messages to RabbitMQ queues, facilitating the initiation or modification of downstream processes in other systems. This feature is useful for orchestrating multi-system activities such as data sharing, notifications, and event-driven architecture.
