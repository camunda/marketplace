---
id: 779051
name: "Redpanda Connector"
creatorType: "community"
creatorName: "Satya Lakshmi Charitha Rayapudi"
creatorUrl: "https://www.linkedin.com/in/charitha-r-a9a882330/"
categories: 
  - "Technical Protocols"
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
  - "8.9"
availability: "open-source"
description: "Connect Camunda to Redpanda streams"
templates: 
  - url: "https://raw.githubusercontent.com/charitha1310/Camunda-RedPanda-Outbound-Connector/refs/heads/master/element-templates/Red%20Panda%20Connector.json"
    name: "Red Panda Connector Outbound Template"
smTemplate: "https://github.com/charitha1310/Camunda-RedPanda-Outbound-Connector"
links: 
  docs: "https://github.com/charitha1310/Camunda-RedPanda-Outbound-Connector/blob/master/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-02-19"
---

*Stream events into Camunda-based business processes*

Integrate Camunda and Redpanda by publishing messages to and subscribing to messages from the Redpanda streaming platform using Kafka APIs. Take advantage of event-driven orchestration with high-throughput streaming for real-time process triggers and state updates.

## Features

### Publish events to Redpanda

Publish process data as messages to Redpanda topics using the Kafka producer API, with configurable topic and key settings.

### Control message payloads

Serialize JSON or string payloads and map process variables to message content to keep event contracts consistent across producers and consumers.
