---
id: 419474
slug: "email-inbound-connector"
name: "Email Inbound Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Joe Pappas"
creatorUrl: "https://github.com/superbeagle"
categories: 
  - "Collaboration Tools"
industries: []
useCases: 
  - "Human Task orchestration"
resourceTypes: []
bpmnTypes: 
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.3"
availability: "open-source"
description: "Drive Camunda processes via email"
tagline: "Start and drive Camunda processes using email"
templates: 
  - id: null
    name: "io.camunda.connectors.EmailWatchService.intermediate"
    url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-email-watch/main/element-templates/email-watch-intermediate-connector.json"
  - id: null
    name: "io.camunda.connectors.EmailWatchService.start"
    url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-inbound-connector-email-watch/main/element-templates/email-watch-start-connector.json"
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/camunda-community-hub/camunda-8-inbound-connector-email-watch/tree/main"
docsUrl: "https://docs.camunda.io/docs/next/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: null
referUrl: "https://github.com/superbeagle"
lastModified: "2024-04-08"
---

This inbound connector will monitor email inboxes to start and drive Camunda processes

## Features

### Monitor email inboxes

Continuously monitor inbox folders for incoming emails to start or drive processes in Camunda. Can be used as an alternative for or as a complement to workflow user interfaces.
