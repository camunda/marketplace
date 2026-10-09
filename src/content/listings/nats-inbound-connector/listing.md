---
id: 419444
slug: "nats-inbound-connector"
name: "NATS Inbound Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Enterprise Applications"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.3"
  - "8.4"
availability: "open-source"
description: "Drive processes using NATS"
tagline: "Drive processes in Camunda using NATS"
templates: 
  - id: null
    name: "io.camunda.connectors.InboundNATS.start"
    url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-nats/main/element-templates/nats-start-connector.json"
  - id: null
    name: "io.camunda.connectors.InboundNATS.intermediate"
    url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-nats/refs/heads/main/element-templates/nats-intermediate-connector.json"
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-nats"
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
lastModified: "2025-02-13"
---

Send messages to topics in NATS and start process instances or send messages to Camunda to drive process instances.

## Features

### Consume Messages

This feature enables Camunda to consume real-time messages from NATS topics. Incoming messages can start workflows within Camunda as well as drive process instances via intermediate catch events.
