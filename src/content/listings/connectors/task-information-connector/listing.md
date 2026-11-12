---
id: 632752
name: "Task Information Connector"
creatorType: "community"
creatorName: "Domingos Dias"
creatorUrl: "https://selenium.ao/"
categories: 
  - "Technical Protocols"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Retrieves active Camunda process tasks"
seoDescription: "A smart Camunda connector that securely retrieves and monitors active human tasks from process instances using Operate, Tasklist, and Keycloak, enabling seamless automation and real-time process visibility."
smTemplate: "https://github.com/DomingossDias/task-info-connector/tree/feature/task-connector-update"
links: 
  docs: "https://github.com/DomingossDias/task-info-connector/tree/feature/task-connector-update#readme"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-15"
---

A smart Camunda connector that securely retrieves and monitors active human tasks from process instances using Operate, Tasklist, and Keycloak, enabling seamless automation and real-time process visibility.

## Features

### Automatic task discovery

Identify active or pending user tasks in a process instance automatically based on state (CREATED, READY, or ASSIGNED). This eliminates manual polling and simplifies orchestration of human workflows.

### Sub-process navigation

Follow sub-process chains dynamically to locate user tasks even after a parent process has completed. This ensures accurate monitoring and correlation across nested processes.

### Real-time process insight

Continuously retrieve up-to-date task metadata (such as task ID, form key, and creation time) to power dashboards, trigger downstream automations, and feed decision logic.
