---
id: 418892
name: "UiPath Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Automation Services"
useCases: 
  - "RPA bot orchestration"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Orchestrate UiPath bots with Camunda"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.UIPath.v1/latest/uipath-connector.json"
    name: "UiPath Outbound Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/uipath"
video: "https://player.vimeo.com/video/869077954?badge=0&autopause=0&player_id=0&app_id=58479"
links: 
  support: "https://forum.camunda.io/"
  website: "https://camunda.com"
resources: 
  - type: "VIDEO"
    title: "Academy"
    url: "https://player.vimeo.com/video/869077954?badge=0&autopause=0&player_id=0&app_id=58479"
lastModified: "2025-09-10"
---

*Combine UiPath and Camunda for Advanced RPA Bot Orchestration*

Orchestrate RPA bots by creating UiPath queue items and retrieving their results in Camunda-powered processes.

## Features

### Create Queue Item

When a workflow in Camunda requires an RPA bot to perform a task — say, data scraping or customer onboarding — you can use this feature to add this task to the UiPath orchestrator's queue. This feature ensures seamless bot allocation and task execution, contributing to efficient bot orchestration.

### Get Queue Item Result

After an RPA bot has completed its task, you may need to retrieve the result to decide the next steps in your Camunda process. This feature allows Camunda to fetch the outcome, facilitating real-time decision-making and bot orchestration.
