---
id: 522492
name: "AI Email Support Agent"
creatorType: "camunda"
creatorName: "Camunda / Bastian Körber"
creatorUrl: "https://camunda.com/"
categories: 
  - "Quick Start"
industries: 
  - "Financial Services"
  - "Insurance"
  - "Media and Entertainment"
  - "Technology"
  - "Healthcare"
  - "Manufacturing"
  - "Retail"
  - "Supply Chain & Logistics"
  - "Public Sector"
  - "Telecommunications"
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
  - "Form"
compatibleVersions: 
  - "8.8"
availability: "open-source"
description: "End-to-end email orchestration with AI"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/bank-ai-loan-approval/AI%20Email%20Support%20Agent.bpmn"
    name: "Resource 1"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/bank-ai-loan-approval/escalate-to-human.form"
    name: "Resource 2"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/bank-ai-loan-approval/human-resolution.form"
    name: "Resource 3"
  - url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/refs/heads/main/solutions/bank-ai-loan-approval/review-case-resolution.form"
    name: "Resource 4"
smTemplate: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/bank-ai-loan-approval"
video: "https://www.youtube.com/watch?v=32299Ksezp0"
links: 
  docs: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/bank-ai-loan-approval"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-22"
---

*Orchestrate AI-driven email communication with guardrails*

Orchestrate AI-driven email communications with Camunda. Short-term and long-term memory chunks enrich replies and built-in, configurable guardrails ensure a human knowledge worker is involved when necessary.

## Features

### AI email conversation loop

Automates the drafting of email replies with a Camunda AI agent while tracking thread context.

### Long-term memory via vector database

Writes and retrieves embeddings from the Camunda Embeddings Vector Database connector for RAG.

### Human escalation

BPMN-configured guardrails trigger a user task when token limits, sentiment, or intent thresholds are exceeded.
