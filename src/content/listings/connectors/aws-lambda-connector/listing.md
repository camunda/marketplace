---
id: 415666
name: "AWS Lambda Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Cloud Computing Services"
useCases: 
  - "Microservices orchestration"
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
description: "Connect serverless to business processes"
seoDescription: "Invoke AWS Lambda functions as part of orchestrated business processes."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSLAMBDA.v2/latest/aws-lambda-outbound-connector.json"
    id: "io.camunda.connectors.AWSLAMBDA.v2"
    name: "AWS Lambda outbound"
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/release/8.4/connectors/aws/aws-lambda/element-templates/aws-lambda-connector.json"
video: "https://player.vimeo.com/video/949070040"
links: 
  website: "https://github.com/camunda/connectors-bundle/tree/main/connectors/aws/aws-lambda"
lastModified: "2025-09-03"
---

Invoke AWS Lambda functions as part of orchestrated business processes.

## Features

### Invoke a Function

Extend your orchestrated processes by directly invoking AWS Lambda functions from Camunda processes. Whether it's data processing, third-party integrations, or any form of compute task, trigger AWS Lambda functions without leaving the Camunda environment.
