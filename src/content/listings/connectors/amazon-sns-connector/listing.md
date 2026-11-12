---
id: 417995
name: "Amazon SNS Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Cloud Computing Services"
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
description: "Leverage Amazon SNS pub/sub capabilities"
seoDescription: "Send and receive messages between Camunda and Amazon SNS. Enhance your business processes with dynamic messaging capabilities and instant responsiveness."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSSNS.v1/latest/aws-sns-outbound-connector.json"
    id: "io.camunda.connectors.AWSSNS.v1"
    name: "Amazon SNS outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.AWSSNS.IntermediateCatchEvent.v1/latest/aws-sns-inbound-intermediate.json"
    id: "io.camunda.connectors.inbound.AWSSNS.IntermediateCatchEvent.v1"
    name: "Amazon SNS intermediate"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.AWSSNS.MessageStartEvent.v1/latest/aws-sns-inbound-message-start.json"
    id: "io.camunda.connectors.inbound.AWSSNS.MessageStartEvent.v1"
    name: "Amazon SNS start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.AWSSNS.Boundary.v1/latest/aws-sns-inbound-boundary.json"
    name: "Amazon SNS Boundary"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/aws/aws-sns/element-templates"
links: 
  support: "https://forum.camunda.io/"
  website: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/aws-sns/"
lastModified: "2025-09-03"
---

Send and receive messages between Camunda and Amazon SNS. Enhance your business processes with dynamic messaging capabilities and instant responsiveness.

## Features

### Send Messages

Easily dispatch messages from Camunda to Amazon SNS, enabling real-time notifications and interactions with other AWS services or subscribers.

### Receive Messages

Capture messages from Amazon SNS directly within Camunda. Use these messages to trigger specific processes or tasks, fully capitalizing on the capabilities of an event-driven architecture.
