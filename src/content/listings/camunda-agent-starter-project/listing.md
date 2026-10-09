---
id: 829718
slug: "camunda-agent-starter-project"
name: "Camunda Agent Starter Project"
type: 
  - "blueprint"
creatorType: "community"
creatorName: "Camunda / Niall Deehan"
creatorUrl: "http://www.camunda.com"
categories: 
  - "Quick Start"
industries: []
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
bpmnTypes: []
runtimes: []
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Start building Camunda agents quickly"
tagline: "Build your first Camunda agent with working examples"
templates: 
  - id: null
    name: "Resource 1"
    url: "https://raw.githubusercontent.com/NPDeehan/camunda-agent-template/refs/heads/main/Camunda%20Agent%20Builder%20Template%20V2.bpmn"
saasTemplate: null
smTemplate: "https://github.com/NPDeehan/camunda-agent-template"
githubRepo: null
docsUrl: "https://raw.githubusercontent.com/NPDeehan/camunda-agent-template/refs/heads/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-07-02"
---

A ready-to-use starting point for building agents with Camunda. This blueprint includes working examples of core agent capabilities: time and date awareness, configurable wait behavior, and Slack-based communication via message events.

## Features

### Embed an agent in your process

Connect an AI agent to a Camunda process using the included BPMN template. The blueprint demonstrates how to wire agent tool calls into a service task, giving teams a working reference for agent integration patterns.

### Retrieve current time and date

Expose time and date as a tool available to the agent during process execution. Use this as a reference for adding context-aware capabilities to your own agent implementations.

### Handle waits and user communication

Pause process execution and resume based on incoming events, with a pre-built example for communicating with end users via Slack message events. Adapt the pattern to other messaging channels as needed.
