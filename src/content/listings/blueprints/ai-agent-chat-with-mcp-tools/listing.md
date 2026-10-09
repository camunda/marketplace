---
id: 682919
name: "AI Agent Chat with MCP Tools"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/agentic-orchestration/"
categories: 
  - "Quick Start"
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
  - "Form"
  - "Connector Template"
  - "README"
compatibleVersions: 
  - "8.8"
availability: "open-source"
description: "Chat with AI via MCP tools"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/README.md"
    name: "README.md"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-with-mcp.bpmn"
    name: "ai-agent-chat-with-mcp.bpmn"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-initial-request.form"
    name: "ai-agent-chat-initial-request.form"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-user-feedback.form"
    name: "ai-agent-chat-user-feedback.form"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/mcp-tool-call-confirmation.form"
    name: "mcp-tool-call-confirmation.form"
smTemplate: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/ai-agent-chat-with-mcp"
links: 
  docs: "https://github.com/camunda/camunda-platform-tutorials/blob/main/solutions/ai-agent-chat-with-mcp/README.md"
  preview: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-mcp/ai-agent-chat-with-mcp.bpmn"
  support: "https://forum.camunda.io/"
lastModified: "2026-04-13"
---

*Orchestrate AI chat with MCP tools*

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
