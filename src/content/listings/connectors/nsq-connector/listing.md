---
id: 553452
name: "NSQ Connector"
creatorType: "community"
creatorName: "Charan Teja Choppavarapu"
creatorUrl: "https://www.linkedin.com/in/charanteja-choppavarapu/"
categories: 
  - "Technical Protocols"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.7"
availability: "open-source"
description: "Perform message delivery to NSQ"
seoDescription: "Publish messages to NSQ topics as part of a service task, enabling asynchronous communication and decoupling of processes."
templates: 
  - url: "https://raw.githubusercontent.com/charanteja469/Camunda-NSQ-Outbound-Connector/refs/heads/master/element-templates/NSQ%20Outbound%20Connector.json"
    name: "NSQ Outbound Connector"
smTemplate: "https://github.com/charanteja469/Camunda-NSQ-Outbound-Connector"
links: 
  github: "https://github.com/charanteja469/Camunda-NSQ-Outbound-Connector"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2025-06-27"
---

Publish messages to NSQ topics as part of a service task, enabling asynchronous communication and decoupling of processes.

## Features

### Asynchronous messaging

Decouples process execution from message delivery. This design enhances process efficiency by preventing delays while waiting for message handling.

### Seamless NSQ integration

Directly connects Camunda-based processes to NSQ. This establishes a straightforward bridge for Camunda processes to interact with the NSQ messaging system.

### Customizable via BPMN

Allows configuration of messages and topics within the process model. Developers can easily define message content and target NSQ topics directly in their business process diagrams.

### Leverages NSQ capabilities

Utilizes NSQ's distributed and reliable messaging. This ensures robust and scalable message delivery by capitalizing on NSQ's inherent strengths.
