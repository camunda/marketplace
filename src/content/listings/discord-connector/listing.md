---
id: 800420
slug: "discord-connector"
name: "Discord Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Enrico Curiotto"
creatorUrl: "https://github.com/ecuriotto"
categories: 
  - "Collaboration Tools"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Send messages from Camunda processes"
tagline: "Automate communication in Camunda processes"
templates: []
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/ecuriotto/camunda-8-connector-discord"
docsUrl: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
  - "screenshot-2.png"
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-04-15"
---

Integrate Discord into Camunda 8 BPMN processes without writing code. Send messages, manage channels and roles, and trigger Discord actions directly from your process diagrams using a bot token or webhook.

## Features

### Send messages and embeds

Send plain-text or rich embed messages to any Discord channel using a bot token, with support for multiple embed objects via FEEL expressions.

### Webhook messaging

Post messages to Discord channels via webhook URL — no bot setup required. Supports username and avatar overrides.

### Channel creation

Create channels in any Discord guild directly from your BPMN process.

### Role management

Add or remove roles from guild members programmatically, enabling dynamic permission workflows triggered by process events.
