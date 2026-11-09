---
id: 637225
name: "CMIS Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
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
description: "Integrate Camunda with content management systems"
seoDescription: "Manage folders and documents in a CMIS-compliant content management system from Camunda-based business processes."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/connector-8-CMIS/refs/heads/main/element-templates/CMIS-connector.json"
    name: "CMIS connector Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/connector-8-CMIS"
links: 
  docs: "https://github.com/camunda-community-hub/connector-8-CMIS/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2025-10-21"
---

Manage folders and documents in a CMIS-compliant content management system from Camunda-based business processes.

## Features

### Upload a document

Upload a document from a Camunda-based business process to the CMIS engine.

### Download a document

Download a document from the CMIS engine to Camunda.

### Create a folder

Create a folder in the CMIS engine as part of a business process.

### Delete a folder

Delete a folder in the CMIS engine. You can use this operation to recursively delete folders and documents.

### Delete a document

Delete a document in the CMIS engine.
