---
id: 566044
name: "Azure Blob Storage Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://www.camunda.com"
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
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Upload and download Azure blobs"
seoDescription: "Upload and download files in Camunda processes using Azure Blob Storage. Securely connect to Azure containers, manage files, and streamline cloud-based data storage from BPMN processes."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.azure.blobstorage.v1/latest/azure-blobstorage-outbound-connector.json"
    name: "Azure Blob Storage Connector Outbound Template"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/microsoft/azure-blobstorage"
links: 
  support: "https://forum.camunda.io/"
lastModified: "2025-09-08"
---

Upload and download files in Camunda processes using Azure Blob Storage. Securely connect to Azure containers, manage files, and streamline cloud-based data storage from BPMN processes.

## Features

### Upload files to Azure Blob Storage

Send files from a process to a specified container in Azure Blob Storage.

### Download files from Azure Blob Storage

Retrieve files from Azure Blob Storage into a process. Access specific blobs by name and container, and return the file content.
