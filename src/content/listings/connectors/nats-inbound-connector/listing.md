---
id: 419444
name: "NATS Inbound Connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Enterprise Applications"
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.3"
  - "8.4"
availability: "open-source"
description: "Drive processes using NATS"
seoDescription: "Send messages to topics in NATS and start process instances or send messages to Camunda to drive process instances."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-nats/main/element-templates/nats-start-connector.json"
    name: "io.camunda.connectors.InboundNATS.start"
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-nats/refs/heads/main/element-templates/nats-intermediate-connector.json"
    name: "io.camunda.connectors.InboundNATS.intermediate"
links: 
  github: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-nats"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2025-02-13"
---

Send messages to topics in NATS and start process instances or send messages to Camunda to drive process instances.

## Features

### Consume Messages

This feature enables Camunda to consume real-time messages from NATS topics. Incoming messages can start workflows within Camunda as well as drive process instances via intermediate catch events.
