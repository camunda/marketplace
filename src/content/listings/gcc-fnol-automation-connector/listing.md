---
id: 676862
slug: "gcc-fnol-automation-connector"
name: "GCC FNOL Automation Connector"
type: 
  - "blueprint"
creatorType: "community"
creatorName: "Ganesh Kumar"
creatorUrl: "https://www.linkedin.com/in/ganesh-kumar-g-01a047325/"
categories: 
  - "Solution Accelerators"
industries: []
useCases: []
resourceTypes: 
  - "BPMN"
  - "DMN"
  - "Form"
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Streamlined FNOL intake for GCC insurers"
tagline: "Automate GCC Motor Claims with Camunda"
templates: 
  - id: null
    name: "GCC FNOL Automation Solution"
    url: "https://raw.githubusercontent.com/ganeshkumargunaseelan-web/camunda-fnol-automation/refs/heads/main/src/main/resources/bpmn/gcc-motor-fnol-process.bpmn"
saasTemplate: null
smTemplate: "https://github.com/ganeshkumargunaseelan-web/camunda-fnol-automation"
githubRepo: null
docsUrl: "https://github.com/ganeshkumargunaseelan-web/camunda-fnol-automation/tree/main/docs/images"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
  - "screenshot-2.png"
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-12-10"
---

This solution validates First Notice of Loss (FNOL) inputs, triggers claim processes instantly, supports Gulf Cooperation Council (GCC) identity formats, and integrates with policy/claims systems.

## Features

### GCC identity and vehicle validation

Validates Emirates ID, Iqama, QID, CPR, Civil ID, and GCC plate formats before triggering processes.

### Instant FNOL process initiation

Automatically starts Camunda-based processes with routing, approvals, fraud checks, and SLA timers.

### Multi-channel integration

Accept FNOL data from web forms, bots, mobile apps, call centers, and external systems.

### Multilingual support

Supports six GCC-relevant languages including Arabic (RTL), Urdu (RTL), Hindi, Malayalam, Filipino, and English.

### Fraud pre-screening

Performs parallel fraud checks on submission and provides a risk score for workflow routing.

### Built for GCC insurance regulations

Handles regional compliance, claim structures, policy references, and jurisdictional claim rules.
