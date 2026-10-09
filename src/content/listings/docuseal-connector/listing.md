---
id: 830625
slug: "docuseal-connector"
name: "DocuSeal Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / William Marcq"
creatorUrl: "https://github.com/marcqw/camunda-connector-docuseal"
categories: 
  - "Collaboration Tools"
industries: []
useCases: 
  - "Human Task orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.8"
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Send and track DocuSeal e-signature requests"
tagline: "Send, sign, and track documents without leaving Camunda"
templates: 
  - id: null
    name: "Docuseal Connector Outbound Template"
    url: "https://raw.githubusercontent.com/marcqw/camunda-connector-docuseal/refs/heads/main/src/docuseal-connector.json"
  - id: null
    name: "Docuseal Connector Inbound Template"
    url: "https://raw.githubusercontent.com/marcqw/camunda-connector-docuseal/refs/heads/main/src/docuseal-form-webhook-intermediate.json"
saasTemplate: null
smTemplate: "https://github.com/marcqw/camunda-connector-docuseal"
githubRepo: null
docsUrl: "https://github.com/marcqw/camunda-connector-docuseal"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-07-02"
---

Send documents for e-signature and manage DocuSeal templates and submissions directly from your Camunda processes. React instantly to signing events with the built-in inbound Form Webhook connector, no custom code required.

## Features

### Access the full DocuSeal API

Provides 21 outbound operations across Submissions, Submitters, and Templates, including creating signature requests from templates or PDF, DOCX, and HTML files, listing and archiving submissions, updating submitters, and managing templates, all with human-readable operation labels and no custom code.

### React to signature events in real time

An inbound Form Webhook connector lets your process catch form.viewed, form.started, form.completed, and form.declined events the moment they happen, so you can move past a signature step without polling the API.

### Correlate signatures automatically

The inbound and outbound connectors are pre-wired to work together: the submission ID produced by Create Submission is used automatically as the correlation key for the Form Webhook, so signature and process instance stay in sync out of the box.

### Secure API credentials by default

Your DocuSeal API key is referenced as a Camunda secret rather than hardcoded, and pre-filled result expressions map every response straight into process variables you can act on immediately.
