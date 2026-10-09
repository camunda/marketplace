---
id: 418729
slug: "rabbitmq-connector"
name: "RabbitMQ Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Cloud Computing Services"
industries: []
useCases: 
  - "Microservices orchestration"
resourceTypes: []
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Integrate RabbitMQ messaging with Camunda"
tagline: "Synchronized Messaging in Orchestrated Workflows with Camunda and RabbitMQ"
templates: 
  - id: null
    name: "Rabbit MQ Outbound"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.RabbitMQ.v1/latest/rabbitmq-outbound-connector.json"
  - id: null
    name: "Rabbit MQ Inbound Intermediate"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.RabbitMQ.Intermediate.v1/latest/rabbitmq-inbound-connector-intermediate.json"
  - id: null
    name: "Rabbit MQ Inbound Start"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.RabbitMQ.MessageStart.v1/latest/rabbitmq-inbound-connector-message-start.json"
  - id: null
    name: "Rabbit MQ Inbound Boundary"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.RabbitMQ.Boundary.v1/latest/rabbitmq-inbound-connector-boundary.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/rabbitmq/element-templates"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: null
referUrl: "https://camunda.com"
lastModified: "2025-09-10"
---

Integrate reliable RabbitMQ messaging within orchestrated business processes. Ideal for real-time processing, task synchronization, and seamless multi-system communications.

## Features

### Receive Messages

Enables Camunda to listen to RabbitMQ queues, allowing for real-time intake of messages that can trigger or influence subsequent process steps. This feature is particularly useful for scenarios such as order processing, task synchronization, and alerts.

### Send Messages

Allows Camunda to publish messages to RabbitMQ queues, facilitating the initiation or modification of downstream processes in other systems. This feature is useful for orchestrating multi-system activities such as data sharing, notifications, and event-driven architecture.
