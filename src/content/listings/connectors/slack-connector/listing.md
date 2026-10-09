---
id: 418734
name: "Slack Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Collaboration Tools"
useCases: 
  - "Human Task orchestration"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
  - "outbound"
compatibleVersions: 
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Automate communication in business processes"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.Slack.v1/latest/slack-outbound-connector.json"
    name: "Slack Outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.Slack.IntermediateCatchEvent.v1/latest/slack-inbound-intermediate.json"
    name: "Slack Inbound Intermediate"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.Slack.MessageStartEvent.v1/latest/slack-inbound-message-start.json"
    name: "Slack Inbound Start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.Slack.BoundaryEvent.v1/latest/slack-inbound-boundary.json"
    name: "Slack Inbound Boundary"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/slack/element-templates"
video: "https://player.vimeo.com/video/893263522"
links: 
  website: "https://camunda.com"
resources: 
  - type: "VIDEO"
    title: "Academy: Configure the Slack Connector"
    url: "https://vimeo.com/893263522"
lastModified: "2025-09-10"
---

*Camunda and Slack: Uniting Process Orchestration and Team Collaboration*

Use Slack in Camunda processes for real-time notifications, event-driven workflows, dynamic team interactions, and more.

## Features

### Receive Trigger from Slack

Allow Camunda to receive triggers directly from Slack, opening up possibilities for event-driven workflows, real-time decision-making, and user interaction within Slack.

### Create a Channel

Enable Camunda-based processes to create new Slack channels automatically. This feature is ideal for project-based collaborations and event-triggered discussions within an enterprise.

### Invite to Channel

Facilitate the addition of users to Slack channels directly from within a Camunda-based process, enhancing dynamic team collaboration and focused communication.

### Send Message

Enable Camunda to send messages to Slack channels or direct messages. You can use this feature to send automated alerts and updates, or for capturing feedback as part of an orchestrated business process.
