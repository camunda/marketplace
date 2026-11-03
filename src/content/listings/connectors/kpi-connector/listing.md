---
id: 873506
name: "KPI Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
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
  - "8.9"
  - "8.10"
availability: "open-source"
description: "Create and store KPI records"
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-KPI/refs/heads/main/element-templates/kpi-function.json"
    name: "KPI Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-KPI"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-KPI/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-15"
---

*Turn process instance data into KPI records*

Collect KPI data from your process instances and save it in a business database. More than 20 functions cover tasks such as finding users who complete tasks, measuring the duration between two tasks, and counting the number of errors thrown during execution.

## Features

### Create KPI record

A KPI record is created from a Pilot. More than 20 functions are available to collect data on the process instance.

### Save a KPI in database

The KPI record can be saved in the database.

### Create business archive

The connector can be used to save data in a business database. All important business information can be retrieved or calculated to archive the data from a business point of view.
