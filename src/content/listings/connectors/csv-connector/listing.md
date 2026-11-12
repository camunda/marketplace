---
id: 607204
name: "CSV Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Data & Analytics"
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
availability: "open-source"
description: "Read and write comma-separated values"
seoDescription: "Streamline the use of flat data files in business processes by reading CSV files or converting JSON data to CSV format."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.csv/latest/csv-outbound-connector.json"
    name: "CSV Connector Outbound Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/csv"
links: 
  docs: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/csv/"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-06"
---

Streamline the use of flat data files in business processes by reading CSV files or converting JSON data to CSV format.

## Features

### Read CSV into process variables

Ingest CSV and map rows into structured Camunda process variables (arrays/objects) for immediate use in gateways, user tasks, or decision tables.

### Write JSON to CSV

Generate CSV from JSON variables with controllable column order, headers on/off, and append/overwrite modes; perfect for exports, batch jobs, and attaching to notifications.
