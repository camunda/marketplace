---
id: 865363
slug: "databricks-connector"
name: "Databricks Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Data & Analytics"
industries: []
useCases: 
  - "Microservices orchestration"
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
description: "Orchestrate Databricks data and AI"
tagline: "Orchestrate Databricks SQL, Jobs, and AI models"
templates: 
  - id: null
    name: "Databricks Connector"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/databricks/element-templates/databricks-connector.json"
  - id: null
    name: "Databricks Connector Outbound Template"
    url: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/databricks/element-templates/databricks-connector.json"
saasTemplate: null
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/refs/heads/main/connectors/databricks/element-templates/databricks-connector.json"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-09-15"
---

Orchestrate the Databricks Data Intelligence Platform from BPMN with 15 operations across SQL Statement Execution, SQL warehouses, Jobs, Model Serving, and Vector Search. Authenticate with an OAuth service principal and run it on the Camunda Connectors Bundle.

## Features

### Run SQL on a warehouse

Execute a SQL statement, fetch its status and results, page through large result sets by chunk, and cancel a statement in flight. Values are supplied as bound named parameters, so process variables are never concatenated into the statement text.

### Control SQL warehouse compute

Start, stop, and inspect a SQL warehouse from the process, so compute is running when a task needs it and shut down when the work is finished.

### Trigger and track Databricks jobs

Run a job on demand, poll its run for a terminal lifecycle state, read task output, and cancel a run from a boundary event. An idempotency token is available to make a triggered run safe to retry.

### Invoke served models

Call a Model Serving endpoint with a chat-style request or a raw payload for a custom model, and read endpoint metadata. Streaming is disabled so responses stay consumable by a synchronous connector, and the job timeout can be raised for slow inference.

### Query a Vector Search index

Query a Databricks Vector Search index by text or by vector, with result count, filters, query type, and score threshold, to bring retrieval into a process without a separate service.

### Skip the custom runtime

Distributed as an element template on Camunda's REST protocol Connector. There is no Java code, custom JAR, or additional worker to operate, and OAuth machine-to-machine authentication with a service principal keeps credentials in Camunda secrets.
