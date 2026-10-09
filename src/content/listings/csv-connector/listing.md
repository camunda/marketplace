---
id: 607204
slug: "csv-connector"
name: "CSV Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Data & Analytics"
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
availability: "open-source"
description: "Read and write comma-separated values"
tagline: "CSV Connector"
templates: 
  - id: null
    name: "CSV Connector Outbound Template"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.csv/latest/csv-outbound-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/csv"
githubRepo: null
docsUrl: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/csv/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-10-06"
---

Streamline the use of flat data files in business processes by reading CSV files or converting JSON data to CSV format.

## Features

### Read CSV into process variables

Ingest CSV and map rows into structured Camunda process variables (arrays/objects) for immediate use in gateways, user tasks, or decision tables.

### Write JSON to CSV

Generate CSV from JSON variables with controllable column order, headers on/off, and append/overwrite modes; perfect for exports, batch jobs, and attaching to notifications.
