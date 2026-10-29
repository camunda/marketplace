---
id: 829718
name: "Camunda Agent Starter Project"
creatorType: "community"
creatorName: "Camunda / Niall Deehan"
creatorUrl: "http://www.camunda.com"
categories: 
  - "Quick Start"
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Start building Camunda agents quickly"
seoDescription: "A ready-to-use starting point for building agents with Camunda. This blueprint includes working examples of core agent capabilities: time and date awareness, configurable wait behavior, and Slack-based communication via message events."
templates: 
  - url: "https://raw.githubusercontent.com/NPDeehan/camunda-agent-template/refs/heads/main/Camunda%20Agent%20Builder%20Template%20V2.bpmn"
    name: "Resource 1"
smTemplate: "https://github.com/NPDeehan/camunda-agent-template"
links: 
  docs: "https://raw.githubusercontent.com/NPDeehan/camunda-agent-template/refs/heads/main/README.md"
  support: "https://forum.camunda.io/"
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
