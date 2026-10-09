---
id: 779051
slug: "redpanda-connector"
name: "Redpanda Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Satya Lakshmi Charitha Rayapudi"
creatorUrl: "https://www.linkedin.com/in/charitha-r-a9a882330/"
categories: 
  - "Technical Protocols"
industries: []
useCases: []
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
tagline: "Stream events into Camunda-based business processes"
templates: 
  - id: null
    name: "Red Panda Connector Outbound Template"
    url: "https://raw.githubusercontent.com/charitha1310/Camunda-RedPanda-Outbound-Connector/refs/heads/master/element-templates/Red%20Panda%20Connector.json"
saasTemplate: null
smTemplate: "https://github.com/charitha1310/Camunda-RedPanda-Outbound-Connector"
githubRepo: null
docsUrl: "https://github.com/charitha1310/Camunda-RedPanda-Outbound-Connector/blob/master/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-02-19"
---

Integrate Camunda and Redpanda by publishing messages to and subscribing to messages from the Redpanda streaming platform using Kafka APIs. Take advantage of event-driven orchestration with high-throughput streaming for real-time process triggers and state updates.

## Features

### Publish events to Redpanda

Publish process data as messages to Redpanda topics using the Kafka producer API, with configurable topic and key settings.

### Control message payloads

Serialize JSON or string payloads and map process variables to message content to keep event contracts consistent across producers and consumers.
