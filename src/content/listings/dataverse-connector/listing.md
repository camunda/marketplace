---
id: 457162
slug: "dataverse-connector"
name: "Dataverse Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "ilume informatik AG"
creatorUrl: "https://ilume.de/"
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
  - "8.5"
availability: null
description: "Orchestrate Microsoft Dataverse with Camunda"
tagline: "Orchestrate data in Dataverse environments with Camunda"
templates: 
  - id: null
    name: "Dataverse Connector Outbound Template"
    url: "https://raw.githubusercontent.com/Ilume-Camunda/CamundaDataverseConnector/refs/heads/main/element-templates/ilume-dynamics-connector.json"
saasTemplate: "https://raw.githubusercontent.com/Ilume-Camunda/CamundaDataverseConnector/refs/heads/main/element-templates/ilume-dynamics-connector.json"
smTemplate: "https://github.com/Ilume-Camunda/CamundaDataverseConnector"
githubRepo: null
docsUrl: "https://github.com/Ilume-Camunda/CamundaDataverseConnector/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-10-31"
---

Integrate Microsoft Dataverse into Camunda business processes and create, edit, and delete Dataverse entries on the fly.

## Features

### Get Entry Information

Fetch all entries or a specific table entry from a Dataverse environment using GET requests.

### Create, Update, and Delete Entries

With the Dataverse Connector, you can create new entries, update existing entries, and delete entries you no longer need. This is done through using POST, PATCH, and DELETE requests, respectively.

### Customize Outputs

Adjust the amount of data from table entries that you want to see and use in processes. By specifying which attributes should be displayed and what the body of a request should look like, you can freely customize the output.
