---
id: 448966
slug: "send-bpmn-message"
name: "Send BPMN Message"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: null
categories: 
  - "Technical Protocols"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.5"
availability: "open-source"
description: "Send a BPMN message"
tagline: "Send a BPMN Message"
templates: []
saasTemplate: null
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-sendBPMNmessage"
githubRepo: null
docsUrl: "https://github.com/camunda-community-hub/camunda-8-connector-sendBPMNmessage/blob/1.2.0/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-08-04"
---

This blueprint demonstrates how to send a BPMN message that optionally includes variables, a correlation key, and/or a duration.

## Features

### Send BPMN Message

Send a BPMN message to start a new process. You can include variables.

### Send BPMN Message with Correlation

Send a BPMN message with a variable to target a catch event message. The correlation value is provided. You can set a duration.
