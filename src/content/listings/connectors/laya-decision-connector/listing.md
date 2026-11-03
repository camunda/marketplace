---
id: 873541
name: "Laya Decision Connector"
creatorType: "community"
creatorName: "BPM For Business"
creatorUrl: "https://www.bpmforbusiness.com"
categories: 
  - "AI Services"
useCases: 
  - "Human Task orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Open source System-1 decisions, mapped into processes"
templates: 
  - url: "https://raw.githubusercontent.com/bpmforbusiness/camunda-laya-connector/refs/heads/main/connector/element-templates/laya-decision.json"
    name: "Laya Decision (System 1) Outbound Template"
smTemplate: "https://github.com/bpmforbusiness/camunda-laya-connector"
links: 
  docs: "https://github.com/bpmforbusiness/camunda-laya-connector#readme"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-16"
---

*Get typed AI decisions from Laya in Camunda*

Replace an LLM-in-the-loop decision with a fast, typed decision from the open source Laya engine. Select a pre-approved decision pack and write choice/score/yes-no answers straight to process variables. No model key is needed. The connector talks to a self-hosted Laya server.

## Features

### Typed, audit-ready decisions

Replace an LLM-in-the-loop decision with a fast, typed System-1 engine; choice/score/yes-no answers are written straight to process variables through Result Variable or Result Expression.

### DecisionPack safety boundary

Only pre-approved decision packs can be referenced from BPMN; an unregistered pack fails the task with an incident rather than silently guessing.

### Runs in Camunda's connector runtime

Works in Camunda SaaS connectors or the Self-Managed runtime; no model key is required, because the connector posts the process state to a self-hosted Laya server that you control, over the Jev-compatible /v1/systemone protocol.
