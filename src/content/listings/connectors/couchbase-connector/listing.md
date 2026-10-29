---
id: 836163
name: "Couchbase Connector"
creatorType: "community"
creatorName: "Camunda / Kaveri Govindasamy"
creatorUrl: "https://camunda.com/"
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
  - "8.8"
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Manage Couchbase documents from Camunda"
seoDescription: "Manage documents and run N1QL or SQL++ queries directly from BPMN processes with secure outbound integration."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-couchbase/refs/heads/main/element-templates/couchbase-connector.json"
    name: "Couchbase DB Connector for Camunda 8 Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-couchbase.git"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-couchbase/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-07-15"
---

Manage documents and run N1QL or SQL++ queries directly from BPMN processes with secure outbound integration.

## Features

### Manage Couchbase documents

Retrieve, insert, replace, and delete Couchbase documents directly from BPMN tasks by using bucket, scope, collection, and document key settings

### Run parameterized queries

Execute N1QL or SQL++ queries with positional parameters, timeout control, scan consistency options, and FEEL-compatible row output for downstream process logic.

### Add runtime guardrails

Improve safety with optional TLS enforcement, automatic query row limiting, SELECT-only query policy, and cached cluster connections for reuse across process instances
