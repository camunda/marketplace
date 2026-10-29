---
id: 861093
name: "Orchestration Cluster API Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "External Data Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Read-only access to cluster data"
seoDescription: "Query process instances, incidents, user tasks, audit logs and more from the Camunda Orchestration Cluster API v2. Read-only and OAuth 2.0 secured, it is the drop-in replacement for the deprecated Operate Connector."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/orchestration/element-templates/orchestration-connector.json"
    name: "Orchestration Cluster API"
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/orchestration/element-templates/orchestration-connector.json"
links: 
  docs: "https://docs.camunda.io/docs/apis-tools/orchestration-cluster-api-rest/orchestration-cluster-api-rest-overview/"
  support: "https://forum.camunda.io/"
lastModified: "2026-08-26"
---

Query process instances, incidents, user tasks, audit logs and more from the Camunda Orchestration Cluster API v2. Read-only and OAuth 2.0 secured, it is the drop-in replacement for the deprecated Operate Connector.

## Features

### Cover the full Orchestration Cluster API v2

Query process instances, definitions, element instances, incidents, variables, user tasks, jobs, decisions, batch operations, audit logs, authorizations, groups, roles, tenants and mapping rules, all through one connector.

### Stay read-only by design

Exposes no create, update, delete, cancel, migrate or modify operations, keeping the connector safe to use anywhere you need visibility without risk of altering running processes.

### Replace the Operate connector directly

Replaces the deprecated Operate API with the newer Orchestration Cluster API v2, giving you a clear upgrade path with the same familiar querying model.

### Works across SaaS and Self-Managed

Connects to Camunda clusters in both SaaS and Self-Managed deployments (8.9 and later), so the same element template works regardless of where your cluster runs.

### Secure access with OAuth 2.0

Authenticates using OAuth 2.0 client credentials for secure, credential-based access to cluster data.
