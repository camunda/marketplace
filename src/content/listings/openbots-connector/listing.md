---
id: 426494
slug: "openbots-connector"
name: "OpenBots Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "BP3 Global"
creatorUrl: "https://www.bp-3.com/camunda"
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
compatibleVersions: 
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Orchestrate RPA bots with Camunda"
tagline: "Integrate OpenBots with Camunda"
templates: 
  - id: null
    name: "OpenBots Connector Outbound Template"
    url: "https://raw.githubusercontent.com/BP3/openbots-connector/main/element-templates/openbots_connector.json"
saasTemplate: "https://raw.githubusercontent.com/BP3/openbots-connector/main/element-templates/openbots_connector.json"
smTemplate: "https://github.com/BP3/openbots-connector"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://support.bp-3.com/"
referUrl: null
lastModified: "2024-04-08"
---

Orchestrate RPA bots running in OpenBots as part of your Camunda-based business processes by creating queue items and checking for them to complete.

## Features

### Log In to OpenBots

Log in to OpenBots and retrieve a session token to be used in subsequent calls.

### Add Item to Queue

Add a job item to an existing queue.

### Get Queue Item Status

Check the status of a previously submitted job item.
