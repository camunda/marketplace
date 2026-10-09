---
id: 471651
slug: "csv-file-connector"
name: "CSV File Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda"
creatorUrl: "http://www.camunda.com"
categories: 
  - "External Data Services"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.5"
  - "8.6"
availability: "open-source"
description: "Load, filter, and update CSV files"
tagline: "Work with CSV files in business processes"
templates: 
  - id: null
    name: "CSV Outbound Template"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.csv/latest/csv-outbound-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-csv/"
githubRepo: null
docsUrl: "https://github.com/camunda-community-hub/camunda-8-connector-csv/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-09-08"
---

Work with CSV files in business processes by reading and updating data.

## Features

### Get CSV Properties

Retrieve information about a CSV file such as the number of fields and amount of data. You can use a filter to find records containing specific data; for example, the connector can determine how many records have a "city" value of "Los Angeles."

### Read CSV Data

Read a CSV file and use different operations to work with the data.
