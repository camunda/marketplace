---
id: 419480
slug: "postgres-inbound-connector"
name: "Postgres Inbound Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Data & Analytics"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.3"
availability: "open-source"
description: "Drive processes from Postgres"
tagline: "Monitor Postgres channels for database updates to drive processes in Camunda"
templates: 
  - id: null
    name: "io.camunda.connectors.PostgresInbound.intermediate"
    url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-postgres/main/element-templates/postgres-intermediate-connector.json"
  - id: null
    name: "io.camunda.connectors.PostgresInbound.start"
    url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-postgres/main/element-templates/postgres-start-connector.json"
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-postgres/tree/main"
docsUrl: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: null
referUrl: "https://camunda.com"
lastModified: "2024-04-08"
---

This inbound connector will monitor Postgres channels for updates triggered in the database to start or drive processes in Camunda.

## Features

### Monitor database updates

Listen to Postgres channels for triggered updates to start or drive processes forward in Camunda. Set long polling intervals to minimize network traffic.
