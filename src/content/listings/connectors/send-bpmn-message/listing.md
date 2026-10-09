---
id: 448966
name: "Send BPMN Message"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
categories: 
  - "Technical Protocols"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.5"
availability: "open-source"
description: "Send a BPMN message"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-sendBPMNmessage"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-sendBPMNmessage/blob/1.2.0/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2024-08-04"
---

*Send a BPMN Message*

This blueprint demonstrates how to send a BPMN message that optionally includes variables, a correlation key, and/or a duration.

## Features

### Send BPMN Message

Send a BPMN message to start a new process. You can include variables.

### Send BPMN Message with Correlation

Send a BPMN message with a variable to target a catch event message. The correlation value is provided. You can set a duration.
