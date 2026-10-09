---
id: 415666
slug: "aws-lambda-connector"
name: "AWS Lambda Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Cloud Computing Services"
industries: []
useCases: 
  - "Microservices orchestration"
resourceTypes: []
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
availability: "open-source"
description: "Connect serverless to business processes"
tagline: "AWS Lambda Connector"
templates: 
  - id: "io.camunda.connectors.AWSLAMBDA.v2"
    name: "AWS Lambda outbound"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.AWSLAMBDA.v2/latest/aws-lambda-outbound-connector.json"
saasTemplate: null
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/release/8.4/connectors/aws/aws-lambda/element-templates/aws-lambda-connector.json"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: 
  provider: "vimeo"
  id: "949070040"
  url: "https://player.vimeo.com/video/949070040"
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
resources: []
supportUrl: null
referUrl: "https://github.com/camunda/connectors-bundle/tree/main/connectors/aws/aws-lambda"
lastModified: "2025-09-03"
---

Invoke AWS Lambda functions as part of orchestrated business processes.

## Features

### Invoke a Function

Extend your orchestrated processes by directly invoking AWS Lambda functions from Camunda processes. Whether it's data processing, third-party integrations, or any form of compute task, trigger AWS Lambda functions without leaving the Camunda environment.
