---
id: 587865
name: "AI Agent Chat Quick Start"
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
compatibleVersions: 
  - "8.10"
availability: "open-source"
description: "Learn AI agents quickly with Camunda."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/camunda-8-tutorials/refs/heads/main/solutions/ai-agent-chat-with-tools/ai-agent-chat-with-tools.bpmn"
    name: "BPMN"
  - url: "https://raw.githubusercontent.com/camunda/camunda-8-tutorials/refs/heads/main/solutions/ai-agent-chat-with-tools/ai-agent-chat-user-feedback.form"
    name: "User Feedback Form"
  - url: "https://raw.githubusercontent.com/camunda/camunda-8-tutorials/refs/heads/main/solutions/ai-agent-chat-with-tools/README.md"
    name: "README"
  - url: "https://raw.githubusercontent.com/camunda/camunda-8-tutorials/refs/heads/main/solutions/ai-agent-chat-with-tools/ai-agent-chat-initial-request.form"
    name: "Initial Request Form"
  - url: "https://raw.githubusercontent.com/camunda/camunda-8-tutorials/refs/heads/main/solutions/ai-agent-chat-with-tools/ai-agent-chat-with-tools.integration.test.json"
    name: "ai-agent-chat-with-tools.integration.test.json"
smTemplate: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/ai-agent-chat-with-tools"
links: 
  docs: "https://docs.camunda.io/docs/next/guides/getting-started-agentic-orchestration/"
  preview: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/ai-agent-chat-with-tools/ai-agent-chat-with-tools.bpmn"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-09"
---

*An AI chat with tools and human feedback*

Ask a question and follow the agent as it answers directly or uses tools to find recipes, sample users, jokes, or technology products. Review the response, approve it to finish, or send a follow-up to continue the conversation.

For setup and provider configuration, see the example README: https://github.com/camunda/camunda-8-tutorials/tree/main/solutions/ai-agent-chat-with-tools.

## Features

### Learn by running on SaaS

Start in minutes with the agent and tools already configured. Enable the Camunda-provided LLM connection in your organization if needed, then explore the included Test Studio scenarios without setting up your own API keys. Internet access is required. Setup guide: https://docs.camunda.io/docs/components/agentic-orchestration/camunda-provided-llm/#set-up-camunda-provided-llm

### Learn from the Self-Managed example

Use the BPMN and forms as a reference for your own Camunda installation, with a supported AI provider of your choice.

### Learn through local tests

Explore deterministic Camunda Process Test (CPT) scenarios in the repository without calling an LLM. To experiment with the agent locally, configure a supported local LLM or an existing provider. CPT tests stay in the repository, outside the Hub import.
