---
id: 822036
name: "Amazon Braket Connector"
creatorType: "partner"
creatorName: "envite consulting GmbH"
creatorUrl: "https://envite.de/"
categories: 
  - "Cloud Computing Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Run quantum circuits in BPMN"
templates: 
  - url: "https://github.com/envite-consulting/aws-braket-connector-camunda-8/blob/main/element-templates/braket-connector.json"
    name: "AWS Braket Connector Outbound Template"
smTemplate: "https://github.com/envite-consulting/aws-braket-connector-camunda-8/"
links: 
  docs: "https://github.com/envite-consulting/aws-braket-connector-camunda-8/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-06-10"
---

*Integrate quantum computing into your BPMN processes*

Camunda outbound connector for Amazon Braket. Submit and poll quantum computing jobs from BPMN workflows using OpenQASM circuits. Supports real quantum hardware, simulators, blocking and polling execution, and higher-level quantum algorithms via a Python sidecar.

## Features

### Execute quantum circuits from a BPMN service task

Submit quantum circuits to quantum hardware available via Amazon Braket directly from a BPMN service task. Accepts circuits as OpenQASM strings or raw JSON parameters.

### Handle quantum queue times with flexible execution modes

Choose between blocking execution (wait for the result inline) or non-blocking polling (submit the job and check its status periodically via a BPMN timer loop) — designed to handle the unpredictable queue times of real quantum hardware.

### Retrieve quantum job results as structured process variables

Retrieve the results of previously submitted quantum jobs by job ID. Enables decoupled workflows where job submission and result retrieval are separate process steps, making it easy to resume a process once a quantum job reaches a terminal state.
