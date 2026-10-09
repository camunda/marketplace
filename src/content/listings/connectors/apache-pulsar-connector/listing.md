---
id: 596758
name: "Apache Pulsar Connector"
creatorType: "community"
creatorName: "Charan Teja Choppavarapu"
creatorUrl: "https://www.linkedin.com/in/charanteja-choppavarapu/"
categories: 
  - "External Data Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Easily integrate with Apache Pulsar"
templates: 
  - url: "https://raw.githubusercontent.com/charanteja469/Camunda-ApachePulsar-Outbound-Connector/refs/heads/master/element-templates/Apache%20Pulsar%20Connector.json"
    name: "Apache Pulsar Connector Outbound Template"
smTemplate: "https://github.com/charanteja469/Camunda-ApachePulsar-Outbound-Connector"
links: 
  docs: "https://github.com/charanteja469/Camunda-ApachePulsar-Outbound-Connector/blob/master/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2025-08-26"
---

*Perform message delivery to Apache Pulsar*

Enables Camunda-based processes to publish real-time events to Apache Pulsar, driving seamless event-driven automation.

## Features

### Simplified process orchestration

Facilitates event-driven architectures by enabling Camunda to trigger asynchronous downstream actions via Pulsar messages.

### Customizable via BPMN

Allows configuration of message content, topics, and publishing parameters within BPMN process models, giving developers flexible control over messaging.

### Asynchronous messaging

Decouples Camunda process execution from Pulsar message delivery, enhancing process efficiency by preventing delays while waiting for message handling.

### Scalable event streaming

Supports high-throughput message publishing, allowing Camunda-based processes to handle large volumes of real-time events seamlessly.
