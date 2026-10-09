---
id: 441351
slug: "rpa-bot-orchestration-uipath"
name: "RPA Bot Orchestration (UiPath)"
type: 
  - "blueprint"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Patterns"
industries: 
  - "Financial Services"
  - "Insurance"
  - "Media and Entertainment"
  - "Technology"
  - "Healthcare"
  - "Manufacturing"
  - "Retail"
  - "Supply Chain & Logistics"
  - "Public Sector"
  - "Telecommunications"
useCases: 
  - "RPA bot orchestration"
resourceTypes: []
bpmnTypes: []
runtimes: []
compatibleVersions: 
  - "8.4"
  - "8.5"
  - "8.6"
availability: "open-source"
description: "Orchestrate your UiPath bots"
tagline: "Efficient Orchestration of UiPath RPA Bots with Camunda"
templates: 
  - id: null
    name: "RPA Bot Orchestration (UiPath) Blueprint"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/rpa-orchestration-uipath/RPA%20Orchestration%20-%20with%20compensation.bpmn"
saasTemplate: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/rpa-orchestration-uipath/RPA%20Orchestration%20-%20with%20compensation.bpmn"
smTemplate: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/rpa-orchestration-uipath"
githubRepo: null
docsUrl: null
previewImage: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/rpa-orchestration-uipath/RPA%20Orchestration%20-%20with%20compensation.bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-06-30"
---

This blueprint orchestrates UiPath RPA bots as part of Camunda-based processes.

## Features

### Queue Item Creation

Camunda initiates tasks that generate queue items in UiPath. Once these items are created, they automatically trigger UiPath bots to begin their respective processes, ensuring a streamlined workflow and timely task execution.

### Feedback Integration

While tasks are being executed, UiPath bots provide real-time status updates which Camunda captures and integrates into the process. If any errors occur, the bots report back to Camunda, allowing for immediate awareness and action.

### Incident Resolution

When incidents arise, Camunda automates the management process by initiating steps such as compensation or escalating the issue to human operators if necessary.
