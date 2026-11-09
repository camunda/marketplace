---
id: 418713
name: "Amazon SQS Connector"
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
description: "Scalable message queueing with SQS and Camunda"
seoDescription: "Integrate Camunda with Amazon SQS for scalable, efficient message queuing. Perfect for triggering processes and enhancing asynchronous tasks within Camunda."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSSQS.startmessage.v1/latest/aws-sqs-start-message.json"
    name: "Amazon SQS Start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSSQS.intermediate.v1/latest/aws-sqs-inbound-intermediate-connector.json"
    name: "Amazon SQS Intermediate"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSSQS.v1/latest/aws-sqs-outbound-connector.json"
    name: "Amazon SQS Outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSSQS.boundary.v1/latest/aws-sqs-boundary-connector.json"
    name: "Amazon SQS Inbound Boundary"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/aws/aws-sqs/element-templates"
video: "https://player.vimeo.com/video/823992376?share=copy"
links: 
  website: "https://camunda.com"
resources: 
  - type: "VIDEO"
    title: "How to configure the Amazon SQS Connector"
    url: "https://vimeo.com/823992376?share=copy"
lastModified: "2025-09-05"
---

Integrate Camunda with Amazon SQS for scalable, efficient message queuing. Perfect for triggering processes and enhancing asynchronous tasks within Camunda.

## Features

### Send Messages

Facilitate smoother batch processing by queuing messages from Camunda to Amazon SQS. Asynchronous communication allows complex tasks like data analytics or calculations to be handled separately, improving overall operational efficiency

### Receive Messages

Receive messages directly from Amazon SQS within Camunda to act as triggers for specific workflows or tasks. For example, a message in SQS can initiate a customer onboarding process or trigger an inventory restocking event in Camunda
