---
id: 430253
slug: "robocorp-connector"
name: "Robocorp Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "Incentro"
creatorUrl: "https://www.incentro.com/en"
categories: 
  - "Automation Services"
industries: []
useCases: 
  - "RPA bot orchestration"
resourceTypes: []
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.3"
  - "8.4"
availability: "open-source"
description: "Orchestrate Robocorp automations with Camunda"
tagline: "Orchestrate Robocorp automations without writing code"
templates: 
  - id: null
    name: "Robocorp Connector Outbound Template"
    url: "https://raw.githubusercontent.com/incentro/camunda-connectors/main/Robocorp/robocorp-connector.json"
saasTemplate: "https://raw.githubusercontent.com/incentro/camunda-connectors/main/Robocorp/robocorp-connector.json"
smTemplate: "https://github.com/incentro/camunda-connectors/tree/main/Robocorp"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-04-05"
---

Orchestrate Robocorp automations in Camunda-powered business processes.

## Features

### Start Process Run

Start a process in Robocorp by providing a Robocorp instance URL, the process ID, and your workspace ID (which can be retrieved using the Get Workspace feature or through the control room). Returned data is stored in the "output" variable.

### Stop Process Run

Stop a process run by providing the process run ID and your workspace ID. This feature also requires the "set remaining work items as done" and "terminate activity runs" variables to be set to true or false. You can use the Start Process Run feature to get the process run ID.

### Get Workspace

Get the workspace ID from Robocorp to enable other operations. Simply provide the workspace ID found in the control room.
