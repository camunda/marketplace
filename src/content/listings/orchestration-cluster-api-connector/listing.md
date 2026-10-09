---
id: 861093
slug: "orchestration-cluster-api-connector"
name: "Orchestration Cluster API Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "External Data Services"
industries: []
useCases: []
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
tagline: "Get read-only visibility into your orchestration cluster"
templates: 
  - id: null
    name: "Orchestration Cluster API"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/orchestration/element-templates/orchestration-connector.json"
saasTemplate: null
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/orchestration/element-templates/orchestration-connector.json"
githubRepo: null
docsUrl: "https://docs.camunda.io/docs/apis-tools/orchestration-cluster-api-rest/orchestration-cluster-api-rest-overview/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
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
