---
id: 872567
name: "Jev AI Decision Connector"
creatorType: "community"
creatorName: "Rajesh Ponna"
creatorUrl: "https://github.com/rajeshponna"
categories: 
  - "AI Services"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
availability: "open-source"
description: "Typed AI decisions in BPMN"
seoDescription: "Use Jev by TypeSafe AI in your Camunda processes. Make fast, typed AI decisions: pick the best option, find all matches, or ask yes/no, choice, and score questions over lists of any size."
templates: 
  - url: "  https://raw.githubusercontent.com/rajeshponna/camunda-jev-ai-decision-connector/main/element-templates/jev-ai-decision-connector.json"
    name: "Jev AI Decision Connector Outbound Template"
saasTemplate: "https://raw.githubusercontent.com/rajeshponna/camunda-jev-ai-decision-connector/refs/heads/main/element-templates/jev-ai-decision-connector.json"
smTemplate: "https://github.com/rajeshponna/camunda-jev-ai-decision-connector"
links: 
  docs: "https://github.com/rajeshponna/camunda-jev-ai-decision-connector#readme"
  support: "https://github.com/rajeshponna/camunda-jev-ai-decision-connector/issues"
lastModified: "2026-10-01"
---

Use Jev by TypeSafe AI in your Camunda processes. Make fast, typed AI decisions: pick the best option, find all matches, or ask yes/no, choice, and score questions over lists of any size.

## Features

### Pick the best option

Choose the best match from a list of any size, such as products, documents, or next actions. Get the winning ID with its probability and confidence, plus a ranked top N.

### Find every match

Return all options that fit a request using Jev's yes/no (noul) scoring. Set a threshold and an optional maximum, and get every match sorted by score.

### Ask custom questions

Ask your own noul, choice, and score questions about any input in a single call. For example, ask about department, urgency, and customer frustration at once.

### Handle lists of any size

Jev accepts up to 255 options per choice question. The connector splits larger lists into groups, runs rounds in parallel, and keeps every request within the token limit automatically.

### Route decisions by confidence

Flag low-confidence decisions with needsReview, so a gateway can send them to a person before the process continues.

### Trace every decision

Get the process instance key, element ID, model version, token usage, duration, and request ID with every result. Keep API keys in Camunda secrets, and let the connector retry rate limits and server errors automatically.
