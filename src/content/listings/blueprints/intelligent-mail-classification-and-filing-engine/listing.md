---
id: 873327
name: "Intelligent Mail Classification and Filing Engine"
creatorType: "partner"
creatorName: "ilume informatik AG"
creatorUrl: "https://ilume.de/camunda"
categories: 
  - "Solution Accelerators"
industries: 
  - "Technology"
compatibleVersions: 
  - "8.9"
availability: "listing-only"
description: "AI-powered email classification and filing engine"
video: "https://www.youtube.com/watch?v=7zCxdSq29kI"
links: 
  support: "https://forum.camunda.io/"
lastModified: "2026-10-08"
---

*Stop sorting email by hand*

Classify incoming emails by topic and file them into the right Microsoft Outlook folder automatically. Camunda orchestrates privacy-safe AI classification with Amazon Bedrock, with a review folder for unclear cases.

## Features

### Let the inbox sort itself

Process incoming emails automatically as soon as they arrive in the Microsoft 365 mailbox. Users press no button, maintain no mail rules, and need no training, so they simply keep working while their inbox sorts itself.

### Protect privacy by design

Sanitize email content before any AI processing by detecting and masking person names, phone numbers, addresses, email addresses, and links, and by pseudonymizing the sender. The AI model only ever sees placeholders, while the original email in Microsoft Outlook remains completely untouched. The solution uses a single EU-hosted data processor, which keeps GDPR requirements in focus.

### Classify emails by topic with AI

Assign one of seven categories (customer request, invoice, contract, private, marketing/spam, security threat, or other) and rate confidence with an LLM on Amazon Bedrock. The classification works reliably on masked content, so data minimization never comes at the expense of accuracy.

### File emails with human-in-the-loop review

Move each email into the matching Outlook folder via Microsoft Graph, and keep it marked as unread so nothing slips past the user. Unclear emails go to a dedicated review folder for a human decision instead of being guessed, and suspected security threats always go straight to a security folder and are additionally tagged when sent from free-mail addresses.

### Orchestrate the entire process with Camunda

Orchestrate intake, content extraction, anonymization, AI classification, and filing with Camunda, including automatic error handling if an email cannot be moved, and gain full transparency and traceability for every processed email.
