---
id: 426494
name: "OpenBots Connector"
creatorType: "partner"
creatorName: "BP3 Global"
creatorUrl: "https://www.bp-3.com/camunda"
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
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Orchestrate RPA bots with Camunda"
seoDescription: "Orchestrate RPA bots running in OpenBots as part of your Camunda-based business processes by creating queue items and checking for them to complete."
templates: 
  - url: "https://raw.githubusercontent.com/BP3/openbots-connector/main/element-templates/openbots_connector.json"
    name: "OpenBots Connector Outbound Template"
smTemplate: "https://github.com/BP3/openbots-connector"
links: 
  support: "https://support.bp-3.com/"
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
