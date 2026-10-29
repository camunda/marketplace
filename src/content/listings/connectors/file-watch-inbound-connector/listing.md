---
id: 419637
name: "File Watch Inbound Connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Technical Protocols"
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
availability: "open-source"
description: "Drive processes using file updates"
seoDescription: "This connector will start process instances or send messages to running process instances based on the creation, modification, or deletion of files in monitored directories."
links: 
  github: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-file-watch/tree/main"
  docs: "https://docs.camunda.io/docs/next/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2024-04-08"
---

This connector will start process instances or send messages to running process instances based on the creation, modification, or deletion of files in monitored directories.

## Features

### Consume file events

Monitor for file creation, modification, or deletion events in a directory and start or drive Camunda process instances.
