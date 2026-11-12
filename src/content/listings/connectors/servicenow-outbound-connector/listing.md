---
id: 632602
name: "ServiceNow Outbound Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Enterprise Applications"
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
description: "Execute operations on ServiceNow tables"
seoDescription: "Execute create, read, update, and delete operations on any ServiceNow table from Camunda processes to integrate incidents, tasks, users, and more without writing custom code."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/servicenow/element-templates/servicenow-connector.json"
    name: "ServiceNow Outbound Connector Outbound Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/servicenow/element-templates"
links: 
  docs: "https://docs.camunda.io/docs/components/camunda-integrations/servicenow/connectors/outbound-connector"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-15"
---

Execute create, read, update, and delete operations on any ServiceNow table from Camunda processes to integrate incidents, tasks, users, and more without writing custom code.

## Features

### Full CRUD support

Create, read, update, and delete records on any ServiceNow table, including change requests, tasks, users, and more.

### Dynamic payloads

Build flexible request bodies using JSON or FEEL expressions.

### Wide table coverage

Supports all ServiceNow tables, including change requests, tasks, users, and more.
