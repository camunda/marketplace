---
id: 670909
slug: "pdf-merge-and-split-connector"
name: "PDF Merge & Split Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Calvin Robbins"
creatorUrl: "https://www.linkedin.com/in/calvinrobbins/"
categories: 
  - "Enterprise Applications"
industries: []
useCases: []
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
description: "Provides out-of-the-box PDF manipulation"
tagline: "Provides out-of-the-box PDF manipulation."
templates: 
  - id: null
    name: "PDF Merge & Split Connector Outbound Template"
    url: "https://raw.githubusercontent.com/camunda-community-hub/pdf-merge-split-connector/refs/heads/main/element-templates/pdf-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda-community-hub/pdf-merge-split-connector"
githubRepo: "https://github.com/camunda-community-hub/pdf-merge-split-connector"
docsUrl: "https://github.com/camunda-community-hub/pdf-merge-split-connector/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-05-27"
---

Automate the splitting and merging of PDF documents, removing the need for external services, manual editing, or custom scripts. This connector is ideal for document-heavy processes, especially where scanned or multi-form PDFs need to be transformed into structured, workflow-ready files.

## Features

### Advanced PDF splitting options

Split PDFs page-by-page, by fixed page count, by defined page ranges (e.g. 1-3, 5-7), or by top-level bookmarks. This flexibility allows precise extraction of document sections for downstream processing or classification.

### File-size based splitting

Automatically split PDFs into chunks based on file size limits. Pages are accumulated iteratively until the threshold is reached, ensuring predictable and compliant file handling.

### Effortless PDF merging

Combine multiple PDF files into a single, consolidated document. Perfect for assembling classified forms, bundling case documents, and preparing files for archiving or customer delivery.

### Purpose-built for IDP and process automation

Ideal for intelligent document processing (IDP) scenarios where scanned documents contain multiple embedded forms. Automate the extraction, classification, and assembly steps that would otherwise require tedious manual effort.
