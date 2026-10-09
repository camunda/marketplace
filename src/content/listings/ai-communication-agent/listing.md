---
id: 808027
slug: "ai-communication-agent"
name: "AI Communication Agent"
type: 
  - "blueprint"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Patterns"
industries: []
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
  - "DMN"
bpmnTypes: []
runtimes: []
connectorTypes: []
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Route customer messages to business services"
tagline: "Add an AI engagement layer to your business services"
templates: 
  - id: null
    name: "Resource 1"
    url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Communication-Agent/refs/heads/main/camunda-artifacts/communication-agent.bpmn"
  - id: null
    name: "Resource 2"
    url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Communication-Agent/refs/heads/main/camunda-artifacts/message-intake.bpmn"
  - id: null
    name: "Resource 3"
    url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Communication-Agent/refs/heads/main/camunda-artifacts/message-outbound.bpmn"
  - id: null
    name: "Resource 4"
    url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Communication-Agent/refs/heads/main/camunda-artifacts/business-agent-calculator.bpmn"
  - id: null
    name: "Resource 5"
    url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Communication-Agent/refs/heads/main/camunda-artifacts/business-agent-translator.bpmn"
  - id: null
    name: "Resource 6"
    url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Communication-Agent/refs/heads/main/camunda-artifacts/customer-database.dmn"
saasTemplate: null
smTemplate: "https://github.com/camunda/BizSol_bb-AI-Communication-Agent"
githubRepo: null
docsUrl: "https://github.com/camunda/BizSol_bb-AI-Communication-Agent"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-05-06"
---

The AI Communication Agent receives customer messages across email, SMS, chat, and other channels, identifies the customer and their intent, and routes each request to the appropriate business service. Responses are delivered back through the customer's preferred channel, creating a consistent and coordinated experience across all touchpoints.

## Features

### Unify communication across channels

Integrates email, SMS, chat, and custom connectors into a consistent message structure, so your business service handles communication uniformly regardless of source.

### Detect intent and route requests with AI

Uses LLM reasoning to interpret customer intent and dynamically route requests to the appropriate business service, enabling intelligent and context-aware interactions.

### Integrate with existing business services

Use Camunda’s orchestration capabilities to integrate with existing business services to fulfill customer requests.

### Deliver responses through the right channel

Automatically sends responses back through the appropriate communication channel, maintaining continuity and delivering a consistent experience across all touchpoints.

### Connect to any supported AI provider

Works with any LLM supported by Camunda: OpenAI, Azure OpenAI, Ollama, and beyond.
