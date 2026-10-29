---
id: 418963
name: "Salesforce Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Enterprise Applications"
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
availability: "open-source"
description: "Seamless Salesforce operations from Camunda"
seoDescription: "Transform business process orchestration by integrating Salesforce SOQL and SObject operations directly within your Camunda processes for a unified, efficient experience."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/salesforce/element-templates/salesforce-connector.json"
    id: "io.camunda.connectors.Salesforce.v1"
    name: "Salesforce Outbound"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/salesforce"
links: 
  support: "https://forum.camunda.io/"
  website: "https://camunda.com"
lastModified: "2025-09-08"
---

Transform business process orchestration by integrating Salesforce SOQL and SObject operations directly within your Camunda processes for a unified, efficient experience.

## Features

### Execute SOQL Query

Fetch specific records or data sets from your Salesforce CRM for use in process analytics, decision-making, or for driving additional workflow actions. Say goodbye to manual data pulling; automate and integrate your data retrieval seamlessly.

### Get SObject Record

Retrieve individual Salesforce objects such as accounts, contacts, or custom objects directly within Camunda. Ideal for situations where you need detailed information about a specific entity for process execution or auditing.

### Create SObject Record

Add new records to Salesforce, whether it's creating a new lead, account, or any custom object. Automate the creation processes to ensure data consistency and save time.

### Update SObject Record

Edit existing Salesforce records without leaving your Camunda environment. Automate updates to Salesforce records based on events or conditions within your Camunda processes.

### Delete SObject Record

Remove records from Salesforce directly via Camunda, be it for data cleansing or conditional deletion based on business rules. Automate record removal to maintain data hygiene and compliance.
