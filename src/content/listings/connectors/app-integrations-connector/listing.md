---
id: 873768
name: "App Integrations Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Collaboration Tools"
useCases: 
  - "Human Task orchestration"
resourceTypes: 
  - "Connector Template"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Teams and Slack process notifications"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/app-integrations/element-templates/app-integrations-connector.json"
    name: "App Integrations Connector Outbound Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/app-integrations"
links: 
  docs: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/app-integrations/"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-28"
---

*Bring your processes into Microsoft Teams and Slack*

Send messages, Adaptive Cards, Block Kit payloads, and Camunda forms to Microsoft Teams and Slack from your BPMN processes. Create channels and run chat-driven, human-in-the-loop processes, with no bot tokens or app credentials to manage in your process models.

## Features

### Message Microsoft Teams

Post to a Teams channel, a user (by Microsoft Entra object ID), or reply in an existing conversation, optionally with an Adaptive Card.

### Message Slack

Post to a Slack channel or user, or reply in a thread, optionally with a Block Kit payload.

### Notify Camunda users and groups

Address recipients by assignee email, candidate users, and candidate groups, and let App Integrations deliver the message to them.

### Send Camunda forms

Attach a linked Camunda form to a message to collect structured input from people in Teams or Slack.

### Create channels

Create a standard channel in a Microsoft Teams team, or a public or private channel in a Slack workspace, from your process.

### Run chat-driven processes

Start a process when someone writes to the Camunda app in Teams or Slack, and wait for replies in the same conversation with message event templates.
