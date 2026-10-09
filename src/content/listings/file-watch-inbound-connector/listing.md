---
id: 419637
slug: "file-watch-inbound-connector"
name: "File Watch Inbound Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Technical Protocols"
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
availability: "open-source"
description: "Drive processes using file updates"
tagline: "Start and drive Camunda processes using file updates in a monitored directory"
templates: []
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-file-watch/tree/main"
docsUrl: "https://docs.camunda.io/docs/next/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-04-08"
---

This connector will start process instances or send messages to running process instances based on the creation, modification, or deletion of files in monitored directories.

## Features

### Consume file events

Monitor for file creation, modification, or deletion events in a directory and start or drive Camunda process instances.
