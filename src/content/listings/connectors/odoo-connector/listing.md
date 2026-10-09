---
id: 775040
name: "Odoo Connector"
creatorType: "community"
creatorName: "Tehuti Projects"
creatorUrl: "https://www.tehutiprojects.com"
categories: 
  - "Enterprise Applications"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Seamless Odoo ERP workflow integration"
templates: 
  - url: "https://raw.githubusercontent.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector/refs/heads/Ver-wa/odoo-outbound-connector/element-templates/odoo-outbound-connector.json"
    name: "Odoo Connector Outbound Template"
  - url: "https://raw.githubusercontent.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector/refs/heads/Ver-wa/odoo-inbound-connector/element-templates/odoo-inbound-connector-start-event.json"
    name: "Odoo Connector Inbound Start Template"
  - url: "https://raw.githubusercontent.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector/refs/heads/Ver-wa/odoo-inbound-connector/element-templates/odoo-inbound-connector-intermediate.json"
    name: "Odoo Connector Inbound Intermediate Template"
  - url: "https://raw.githubusercontent.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector/refs/heads/Ver-wa/odoo-inbound-connector/element-templates/odoo-inbound-connector-boundary.json"
    name: "Odoo Connector Inbound Boundary Template"
smTemplate: "https://github.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector"
links: 
  docs: "https://github.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector/wiki"
  support: "https://github.com/Tehuti-Projects/Odoo-19-Camunda-8-Connector/issues"
lastModified: "2026-02-09"
---

*Connect Camunda to Odoo ERP*

Connect Camunda processes to Odoo 19 ERP. Supports CRUD operations, search, webhooks, and polling for seamless business process automation.

## Features

### Full CRUD operations

Create, read, update, and delete records in any Odoo model with type-safe request handling and structured responses.

### Advanced search and filtering

Query Odoo records using domain filters with support for pagination, sorting, and field selection. Combine search and read in a single operation.

### Real-time webhooks

Receive instant notifications from Odoo when records are created, updated, or deleted. Automatically correlate events to running process instances.

### Polling mode

Periodically poll Odoo for new or modified records using configurable intervals and tracking fields for reliable event detection.

### Custom method execution

Call any custom Odoo model method with full argument support, enabling integration with custom business logic and processes.

### Production-ready connector

Built with Java 21, automatic retry logic, comprehensive error handling, and full compatibility with Camunda 8.9+ connector runtime.
