---
id: 419474
name: "Email Inbound Connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Collaboration Tools"
useCases: 
  - "Human Task orchestration"
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
description: "Drive Camunda processes via email"
seoDescription: "This inbound connector will monitor email inboxes to start and drive Camunda processes"
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-email-watch/main/element-templates/email-watch-intermediate-connector.json"
    name: "io.camunda.connectors.EmailWatchService.intermediate"
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-email-watch/main/element-templates/email-watch-start-connector.json"
    name: "io.camunda.connectors.EmailWatchService.start"
links: 
  github: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-email-watch/tree/main"
  docs: "https://docs.camunda.io/docs/next/guides/host-custom-connectors/"
  website: "https://github.com/superbeagle"
lastModified: "2024-04-08"
---

This inbound connector will monitor email inboxes to start and drive Camunda processes

## Features

### Monitor email inboxes

Continuously monitor inbox folders for incoming emails to start or drive processes in Camunda. Can be used as an alternative for or as a complement to workflow user interfaces.
