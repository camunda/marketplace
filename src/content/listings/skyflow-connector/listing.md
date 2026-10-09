---
id: 773517
slug: "skyflow-connector"
name: "Skyflow Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Mathieu Stennier"
creatorUrl: "https://www.camunda.com"
categories: 
  - "Enterprise Applications"
industries: []
useCases: 
  - "Agentic AI orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Protect sensitive data in processes"
tagline: "Protect your data from AI and integration leaks"
templates: []
saasTemplate: null
smTemplate: "https://github.com/mathieu-stennier/skyflow-camunda-connector"
githubRepo: null
docsUrl: "https://github.com/mathieu-stennier/skyflow-camunda-connector"
previewImage: null
demoRequestUrl: null
demoVideo: 
  provider: "youtube"
  id: "UZJrN1oXlyE"
  url: "https://youtu.be/UZJrN1oXlyE"
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-02-12"
---

Protect sensitive data in Camunda-powered business processes. This connecter uses Skyflow Detect to de-identify sensitive fields in structured JSON data and re-identify previously tokenized values. It locates sensitive information such PII, PHI, and PCI from text, PDFs, images, and audio files and then redacts that information with tokens. You can use this de-identified data for a variety of tasks such as model training, fine tuning, running secure inference, performing privacy-aware analytics, or any other operational task that requires de-identified unstructured data.

## Features

### Automated de-identification of sensitive data

Detect and tokenize sensitive information across multiple data types, replacing it with secure tokens that can be used safely in downstream processes.

### Vault-backed tokenization and re-identification

Store sensitive data securely in Skyflow's vault and re-identify tokens only when permitted. This enables controlled access for authorized use cases such as audits, investigations, and customer service.

### Privacy-safe AI and analytics enablement

Use de-identified data for AI model training, fine-tuning, secure inference, and privacy-aware analytics, without risking data leakage or regulatory violations.
