---
id: 417336
name: "Amazon DynamoDB Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Data & Analytics"
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
description: "Seamlessly integrate with NoSQL databases"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/aws/aws-dynamodb/element-templates/aws-dynamodb-outbound-connector.json"
    id: "io.camunda.connectors.AWSDynamoDB.v1"
    name: "Amazon DynamoDB outbound"
saasTemplate: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSDynamoDB.v1/latest/aws-dynamodb-outbound-connector.json"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/aws/aws-dynamodb/element-templates"
links: 
  support: "https://forum.camunda.io/"
  website: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/aws-dynamodb"
lastModified: "2025-09-02"
---

*Integrate NoSQL Databases with the Amazon DynamoDB Connector*

Integrate DynamoDB, Amazon's NoSQL database service, with Camunda process orchestration. From table creation to item updates, experience unparalleled data management and integration.

## Features

### Create Table

Easily set up a new DynamoDB table right from Camunda-based processes, ensuring swift initialization of data storage.

### Delete Table

Safely remove an existing DynamoDB table, allowing for efficient data management and restructuring when needed.

### Describe Table

Obtain detailed information about a specific DynamoDB table, aiding in informed decision-making and process orchestration.

### Scan Table

Access and retrieve items from a table based on specific criteria, ensuring targeted data acquisition for your processes.

### Add Item

Introduce a new item or replace an existing one, ensuring data consistency and up-to-date records.

### Delete Item

Remove specific items using primary keys, streamlining data management and maintaining data relevance.

### Get Item

Fetch specific attributes for a particular item using its primary key, ensuring precise data retrieval for process inputs.

### Update Item

Modify attributes of an existing item or add a new entry if it doesn't exist, guaranteeing up-to-date and comprehensive data storage.
