---
id: 500380
slug: "camunda-sap-rfc-connector"
name: "Camunda SAP RFC Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Enterprise Applications"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: []
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
availability: null
description: "Connect to SAP using RFC"
tagline: "Orchestrate SAP tasks and data with the Camunda SAP RFC connector"
templates: 
  - id: null
    name: "RFC"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/rfc-connector/element-templates/sap-rfc-connector.json"
saasTemplate: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/rfc-connector/element-templates/sap-rfc-connector.json"
smTemplate: "https://github.com/camunda/sap-connectors/tree/main/rfc-connector"
githubRepo: null
docsUrl: "https://docs.camunda.io/docs/components/camunda-integrations/sap/sap-integration/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/tag/sap-integration"
referUrl: null
lastModified: "2026-06-01"
---

Integrate SAP into business processes using Remote Function Calls (RFC). This connector complies with SAP's Clean Core strategy, ensuring it's future-proof.

## Features

### Integrate with SAP applications using BAPI

Execute outbound calls to SAP Business Application Programming Interfaces (BAPIs), facilitating task execution and data integration between Camunda-powered processes and SAP systems.

### Integrate with SAP applications using function calls

Execute outbound function calls to SAP, facilitating task execution and data integration between Camunda-powered processes and SAP systems.

### Send and receive variables

Optionally include Camunda process variables in RFC calls and map the result of the call to a process variable, enabling data exchange between SAP and Camunda.

### Handle errors with process logic

Use process variables to capture errors returned by RFC calls, enabling teams to use the BPMN process modeling standard to handle business-relevant errors; for example, by designing backup flows.
