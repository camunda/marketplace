---
id: 418707
slug: "alfresco-connector"
name: "Alfresco Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "Incentro"
creatorUrl: "https://www.incentro.com/en"
categories: 
  - "External Data Services"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Manage Alfresco documents with Camunda"
tagline: "Optimized Document Management with Camunda and Alfresco"
templates: 
  - id: "io.incentro.connectors.Aflresco.v1"
    name: "Alfresco Outbound"
    url: "https://raw.githubusercontent.com/incentro/camunda-connectors/main/alfresco/element-templates/alfresco-connector.json"
saasTemplate: "https://raw.githubusercontent.com/incentro/camunda-connectors/main/alfresco/element-templates/alfresco-connector.json"
smTemplate: "https://github.com/incentro/camunda-connectors/blob/main/alfresco/element-templates/alfresco-connector.json"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: null
referUrl: "https://www.incentro.com/en"
lastModified: "2024-04-05"
---

Create and update folders in Alfresco as part of business processes that are orchestrated by Camunda.

## Features

### Folder Management

Create and update a folder in Alfresco Content Services from a process. A typical use case for this is to create a dossier where you can store content produced during the process. The Alfresco Connector is a very easy to extend because it uses the Camunda REST Connector under the hood and Alfresco has a rich API.
