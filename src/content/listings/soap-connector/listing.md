---
id: 565583
slug: "soap-connector"
name: "SOAP Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: null
categories: 
  - "Technical Protocols"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.5"
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "SOAP web service integration"
tagline: "Integrate legacy systems with ease"
templates: 
  - id: null
    name: "SOAP Connector Outbound Template"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda:soap/latest/soap-outbound-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/soap"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-09-03"
---

Interact with SOAP-based web services directly within BPMN-based processes, enabling integration with legacy systems and enterprise services that rely on the SOAP protocol.

## Features

### WSDL-based operation discovery

Automatically detect and configure available operations from a provided WSDL file, ensuring accurate integration with enterprise SOAP APIs and reducing setup time.

### Flexible message construction

Easily define input payloads using XML or expressions. Populate SOAP requests with dynamic data from your Camunda process variables to match the service's expected schema.

### Custom headers and namespaces

Add custom SOAP headers and security tokens and define XML namespaces to meet specific API requirements; ideal for working with standards-compliant enterprise services.

### Response mapping to variables

Map the SOAP response (or parts of it) directly to process variables, enabling further automation and decision-making in downstream tasks without additional parsing logic.

### Support for authentication

Configure basic authentication credentials or use custom headers for secure communication with protected SOAP endpoints.

### Legacy system integration

Bring older, mission-critical systems into modern automation workflows without rewriting services or building middleware.
