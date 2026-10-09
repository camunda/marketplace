---
id: 449341
slug: "activemq-connector"
name: "ActiveMQ Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "Infosys"
creatorUrl: null
categories: 
  - "Automation Services"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.3"
availability: "listing-only"
description: "Push messages to ActiveMQ"
tagline: "ActiveMQ Connector"
templates: []
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/aloksingh25/activemq-connector"
docsUrl: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-08-09"
---

Easily integrate the ActiveMQ message broker into Camunda-based business processes.

## Features

### Push Messages to ActiveMQ Queues

Push messages to an ActiveMQ queue as part of a Camunda-based process.

### Push Messages to ActiveMQ Topics

Push messages to an ActiveMQ topic as part of a Camunda-based process.

### Verify Messages Pushed to Topics

ActiveMQ messages that are sent to a topic are not visible in the ActiveMQ console. Sample code is provided to verify the message that is pushed to a topic, so you can verify it in the logs.

### Default Credentials for Testing

Default credentials are configured in the Connector to enable easy testing. To use them, select the "default" authorization and start sending messages. Ensure you use this feature for testing purposes only.

### Custom Credentials

You can optionally configure user-provided credentials for the ActiveMQ broker.

### Adjustable Delivery Mode

You can optionally adjust delivery modes if you are using the activemq-connector template JSON.
