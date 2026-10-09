---
id: 419480
name: "Postgres Inbound Connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Data & Analytics"
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
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-postgres/main/element-templates/postgres-intermediate-connector.json"
    name: "io.camunda.connectors.PostgresInbound.intermediate"
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-postgres/main/element-templates/postgres-start-connector.json"
    name: "io.camunda.connectors.PostgresInbound.start"
links: 
  github: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-postgres/tree/main"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  website: "https://camunda.com"
lastModified: "2024-04-08"
---

*Monitor Postgres channels for database updates to drive processes in Camunda*

This inbound connector will monitor Postgres channels for updates triggered in the database to start or drive processes in Camunda.

## Features

### Monitor database updates

Listen to Postgres channels for triggered updates to start or drive processes forward in Camunda. Set long polling intervals to minimize network traffic.
