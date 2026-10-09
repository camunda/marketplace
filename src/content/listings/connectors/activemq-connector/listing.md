---
id: 449341
name: "ActiveMQ Connector"
creatorType: "partner"
creatorName: "Infosys"
categories: 
  - "Automation Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.3"
availability: "listing-only"
description: "Push messages to ActiveMQ"
links: 
  github: "https://github.com/aloksingh25/activemq-connector"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2024-08-09"
---

*ActiveMQ Connector*

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
