---
id: 471651
name: "CSV File Connector"
creatorType: "community"
creatorName: "Camunda"
creatorUrl: "http://www.camunda.com"
categories: 
  - "External Data Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.5"
  - "8.6"
availability: "open-source"
description: "Load, filter, and update CSV files"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.csv/latest/csv-outbound-connector.json"
    name: "CSV Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-csv/"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-csv/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2025-09-08"
---

Work with CSV files in business processes by reading and updating data.

## Features

### Get CSV Properties

Retrieve information about a CSV file such as the number of fields and amount of data. You can use a filter to find records containing specific data; for example, the connector can determine how many records have a "city" value of "Los Angeles."

### Read CSV Data

Read a CSV file and use different operations to work with the data.
