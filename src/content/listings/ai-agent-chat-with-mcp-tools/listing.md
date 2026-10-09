---
id: 682919
slug: "ai-agent-chat-with-mcp-tools"
name: "AI Agent Chat with MCP Tools"
type: 
  - "blueprint"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/agentic-orchestration/"
categories: 
  - "Quick Start"
industries: []
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
  - "Form"
  - "Connector Template"
  - "README"
bpmnTypes: []
runtimes: []
connectorTypes: []
compatibleVersions: 
  - "8.8"
availability: "open-source"
description: "Chat with AI via MCP tools"
tagline: "Orchestrate AI chat with MCP tools"
templates: 
  - id: null
    name: "README.md"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/README.md"
  - id: null
    name: "ai-agent-chat-with-mcp.bpmn"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-with-mcp.bpmn"
  - id: null
    name: "ai-agent-chat-initial-request.form"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-initial-request.form"
  - id: null
    name: "ai-agent-chat-user-feedback.form"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-user-feedback.form"
  - id: null
    name: "mcp-tool-call-confirmation.form"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/mcp-tool-call-confirmation.form"
saasTemplate: null
smTemplate: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/ai-agent-chat-with-mcp"
githubRepo: null
docsUrl: "https://github.com/camunda/camunda-platform-tutorials/blob/main/solutions/ai-agent-chat-with-mcp/README.md"
previewImage: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-with-mcp.bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: null
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-04-13"
---

Deploy a Camunda blueprint for AI chat that uses MCP tools for memory, time, and file tasks, with human approval for safe, auditable execution in BPMN.

## Features

### Connect agents to MCP tools

Let the agent discover and call tools exposed by MCP servers, so you can extend chat beyond Q&A to complete real tasks.

### Add human approval for filesystem actions

Route filesystem tool calls through a confirmation task so a user can approve or deny execution before any file operation runs.

### Persist and recall important context

Use the OpenMemory MCP tool to save key facts during a conversation and retrieve them later for consistent follow-ups.

### Iterate until the user is satisfied

Capture user feedback after each agent response and loop back for follow-up prompts until the user confirms the outcome is complete.

### Mix local and remote tool integrations

Combine MCP Client and MCP Remote Client connectors with in-process tools, giving you a flexible foundation for governed agentic automation.
