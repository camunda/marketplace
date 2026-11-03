---
id: 522488
name: "AI Agent Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "AI Services"
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:SubProcess"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Bring the power of AI agents to business processes"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-aiagent/element-templates/agenticai-ai-agent-subprocess.v2.json"
    name: "AI Agent Subprocess Element Template (v2)"
  - url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-aiagent/element-templates/agenticai-ai-agent-task.v2.json"
    name: "AI Agent Task Element Template (v2)"
  - url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-aiagent/element-templates/agenticai-aiagent-job-worker.json"
    name: "AI Agent Subprocess Element Template (v1)"
  - url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/agentic-ai/connector-aiagent/element-templates/agenticai-aiagent-outbound-connector.json"
    name: "AI Agent Task Element Template (v1)"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/agentic-ai/connector-aiagent/element-templates"
links: 
  support: "https://forum.camunda.io/"
lastModified: "2026-10-19"
---

*Bring the power of AI agents to business processes*

Enhance business processes with AI agents that make decisions, generate content, and execute tasks intelligently.

## Features

### Multi-provider support

Connect to various AI service providers including Anthropic, AWS Bedrock, Azure OpenAI, Google Vertex AI, OpenAI, and providers compatible to the OpenAI API.

### Tool calling

Empower AI agents with access to tools modeled as BPMN elements within an ad-hoc sub-process. Use the custom fromAi() FEEL function to obtain agent-generated text or structured JSON directly within FEEL expressions.

### Customizable prompts

Design and configure AI prompts that align with your specific business requirements and use cases. Use document references to include non-text data in prompts.

### Response formatting

Define the structure of AI responses to fit your process needs.

### Event handling

React to external events while the AI agent is processing.
