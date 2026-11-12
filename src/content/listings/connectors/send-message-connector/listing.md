---
id: 608291
name: "Send Message Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "http://camunda.com"
categories: 
  - "Automation Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Invoke the message API without a worker"
seoDescription: "Publish or correlate BPMN messages in business processes without writing code. This connector provides robust error handling and supports reusability through element templates."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.message.sendtask.v1/latest/send-message-connector-send-task.json"
    name: "Send Camunda BPMN Messages Outbound Template"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.message.end.v1/latest/send-message-connector-message-end-event.json"
    name: "Send Message End Event"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.message.intermediate.v1/latest/send-message-connector-intermediate-throw-event.json"
    name: "Send Message Intermediate"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/camunda-message/"
video: "https://youtu.be/64lRFfdDo34?si=yGw38UxgzDdNhoji"
links: 
  docs: "https://github.com/camunda/connectors/blob/main/connectors/camunda-message/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2025-09-18"
---

Publish or correlate BPMN messages in business processes without writing code. This connector provides robust error handling and supports reusability through element templates.

## Features

### Publish or correlate messages

Decide which API to use for sending messages. Publish with buffering or correlate with synchronous feedback. All parameters of the API are supported and can be set dynamically, if required.

### Combine with multiple BPMN symbols

Use the Send Message connector with popular BPMN symbols such as Send Tasks, Intermediate Throw Message Events, and Message End events.

### Configure correlation key and payload

Configure the correlation key and the payload using a Friendly Enough Expression Language (FEEL) expression.
