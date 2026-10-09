---
id: 418722
name: "Kafka Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Automation Services"
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
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Streamline Kafka messaging in Camunda"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.KafkaMessageStart.v1/latest/kafka-inbound-connector-start-message.json"
    name: "Kafka Inbound Start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.KafkaIntermediate.v1/latest/kafka-inbound-connector-intermediate.json"
    name: "Kafka Inbound Intermediate"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.KAFKA.v1/latest/kafka-outbound-connector.json"
    name: "Kafka Outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.KafkaBoundary.v1/latest/kafka-inbound-connector-boundary.json"
    name: "Kafka Inbound Boundary"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/kafka/element-templates"
video: "https://player.vimeo.com/video/1003712454?share=copy"
links: 
  website: "https://camunda.com/"
lastModified: "2025-09-09"
---

*Camunda and Kafka: Orchestrating Real-Time Data Streams*

Leverage the real-time data streaming of Apache Kafka with the process orchestration capabilities of Camunda. Perfect for real-time analytics, notifications, and multi-system orchestration.

## Features

### Consume Message

This feature enables Camunda to consume real-time messages from Kafka topics. For example, incoming messages can trigger immediate actions or initiate complex workflows within Camunda, such as order processing or real-time analytics.

### Produce Message

Empower Camunda workflows to produce messages to Kafka topics. This feature can be beneficial for initiating downstream activities in other systems (such as inventory updates or sending notifications), all orchestrated seamlessly within Camunda.
