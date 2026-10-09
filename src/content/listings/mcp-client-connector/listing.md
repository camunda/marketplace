---
id: 682917
slug: "mcp-client-connector"
name: "MCP Client Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "AI Services"
industries: []
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Bring MCP tools into processes"
tagline: "Orchestrate MCP tool use with AI"
templates: 
  - id: null
    name: "MCP Client Element Template v0"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-agentic-ai/element-templates/versioned/agenticai-mcp-client-outbound-connector-0.json"
  - id: null
    name: "MCP Client Element Template"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-agentic-ai/element-templates/agenticai-mcp-client-outbound-connector.json"
  - id: null
    name: "MCP Remote Client Element Template v0"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-agentic-ai/element-templates/versioned/agenticai-mcp-remote-client-outbound-connector-0.json"
  - id: null
    name: "MCP Remote Client Element Template"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-agentic-ai/element-templates/agenticai-mcp-remote-client-outbound-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/agentic-ai/connector-agentic-ai/element-templates"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-07-01"
---

Provides a reusable integration building block to run MCP clients in a connector runtime and let the AI agent connector discover and call MCP tools from local STDIO servers or remote Streamable HTTP and SSE endpoints.

## Features

### Connect AI agents to MCP tools

Use the AI agent connector with MCP clients to access tools from locally started stdio servers or remote MCP servers over Streamable HTTP or HTTP with SSE.

### Use persistent MCP client connections

Run MCP clients as part of the connector runtime so connections are managed persistently and you reduce overhead in tool discovery and tool calling.

### Support SaaS with a custom runtime

Connect a custom connector runtime running the MCP Client connector to Camunda SaaS when you need MCP client capabilities in a SaaS cluster.

### Filter and govern tool access

Allow specific tools or exclude risky tools to control what an AI agent can call; for example, enabling read-only file operations while blocking write actions.

### Call MCP operations without an agent

Use standalone mode to list available tools or call a tool directly from a BPMN process without an AI agent.

### Add human approval steps

Combine MCP tool flows with other BPMN elements such as user tasks or intermediate events to create a human-in-the-loop interaction for tool calls.
