---
id: 808030
slug: "ibm-quantum-connector"
name: "IBM Quantum Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "envite consulting GmbH"
creatorUrl: "https://envite.de/"
categories: 
  - "Cloud Computing Services"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Quantum circuits inside BPMN workflows"
tagline: "Connect your BPMN processes to real IBM Quantum hardware"
templates: 
  - id: null
    name: "IBM Quantum Connector Outbound Template"
    url: "https://raw.githubusercontent.com/envite-consulting/ibmq-connector-camunda-8/refs/heads/main/element-templates/ibmq-connector.json"
saasTemplate: null
smTemplate: "https://github.com/envite-consulting/ibmq-connector-camunda-8"
githubRepo: null
docsUrl: "https://github.com/envite-consulting/ibmq-connector-camunda-8/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
  - "screenshot-2.png"
  - "screenshot-3.png"
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-05-05"
---

Execute quantum circuits on real IBM Quantum hardware directly from your Camunda 8 BPMN workflows. It supports Sampler and Estimator primitives, blocking and polling execution modes, and OpenQASM circuit input.

## Features

### Execute quantum circuits from a BPMN service task

Submit quantum circuits to IBM Quantum hardware directly from a BPMN service task. Accepts circuits as OpenQASM strings or raw JSON parameters and supports both Sampler and Estimator primitives.

### Handle quantum queue times with flexible execution modes

Choose between blocking execution (wait for the result inline) or non-blocking polling (submit the job and check its status periodically via a BPMN timer loop) — designed to handle the unpredictable queue times of real quantum hardware.

### Retrieve quantum job results as structured process variables

Retrieve the results of previously submitted quantum jobs by job ID. Enables decoupled workflows where job submission and result retrieval are separate process steps, making it easy to resume a process once a quantum job reaches a terminal state.
