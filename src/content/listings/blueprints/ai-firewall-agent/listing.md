---
id: 808028
apiAnyIndustry: true
name: "AI Firewall Agent"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Patterns"
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "AI prompt safeguarding for processes"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Firewall-Agent/refs/heads/main/camunda-artifacts/safeguard-agent.bpmn"
    name: "Resource 1"
  - url: "https://raw.githubusercontent.com/camunda/BizSol_bb-AI-Firewall-Agent/refs/heads/main/camunda-artifacts/safeguard-agent-usage-example.bpmn"
    name: "Resource 2"
smTemplate: "https://github.com/camunda/BizSol_bb-ai-firewall-agent"
links: 
  docs: "https://github.com/camunda/BizSol_bb-ai-firewall-agent"
  support: "https://forum.camunda.io/"
lastModified: "2026-05-06"
---

*Safeguard AI-powered processes from unsafe prompts*

The AI Firewall Agent evaluates user prompts before they reach any AI task, classifying threats such as injection attacks, jailbreaks, and policy violations, and sanitizing unsafe content so the workflow can continue securely. A confidence-based retry mechanism ensures only reliable decisions reach your process.

## Features

### Classify threats before they reach AI tasks

The agent classifies injection, jailbreak, harmful intent, policy evasion, sensitive data, privacy, obfuscation, and tool manipulation threats, so nothing unsafe ever reaches your operations.

### Retry automatically on low-confidence decisions

Confidence-based retry for more reliable decisions. When the model's confidence falls below your threshold, the agent refines its prompt and automatically retries. You control how many attempts are made and what confidence level is acceptable.

### Sanitize unsafe prompts and enforce size limits

When a prompt is flagged as warn or block, the agent returns a cleaned version with unsafe directives removed. Legitimate intent is preserved so the process can continue without having to start over.

### Connect to any supported AI provider

Works with any LLM supported by Camunda: OpenAI, Azure OpenAI, Ollama, and beyond.

### Validate against real-world threat scenarios

Includes an automated test suite that validates prompt classification against a real LLM, covering block, warn, and allow scenarios out of the box.
