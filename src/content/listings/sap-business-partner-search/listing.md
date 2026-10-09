---
id: 597911
slug: "sap-business-partner-search"
name: "SAP Business Partner Search"
type: 
  - "blueprint"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Quick Start"
industries: []
useCases: []
resourceTypes: 
  - "BPMN"
  - "Form"
  - "Connector Template"
  - "README"
bpmnTypes: []
runtimes: []
connectorTypes: []
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Accelerate S/4HANA and ECC projects"
tagline: "Connect to any SAP system instantly"
templates: 
  - id: null
    name: "Resource 1"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/Primary%20Process.bpmn"
  - id: null
    name: "Resource 10"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/README.md"
  - id: null
    name: "Resource 2"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-1.form"
  - id: null
    name: "Resource 3"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-fail.form"
  - id: null
    name: "Resource 4"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-result.form"
  - id: null
    name: "Resource 5"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-success.form"
  - id: null
    name: "Resource 6"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/form-choose-sap-system.form"
  - id: null
    name: "Resource 7"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/result-screen.form"
  - id: null
    name: "Resource 8"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/rfc-connector/element-templates/sap-rfc-connector.json"
  - id: null
    name: "Resource 9"
    url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/odata-connector/element-templates/sap-odata-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/sap-connectors/tree/main/blueprint"
githubRepo: null
docsUrl: "https://docs.camunda.io/docs/components/camunda-integrations/sap/sap-integration/"
previewImage: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/Primary%20Process.bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2025-11-26"
---

Use this blueprint to pick an SAP system, enter filters in a Camunda form, and review live Business Partner data in a native Fiori environment. No custom code required.

## Features

### One-click Business Partner lookup

Launch the FindBusiness Partner flow from Camunda Tasklist or an API call.

### OData and RFC connectors

Prebuilt connectors for S/4(2022/2023) and ECC; handles authentication, pagination, and error mapping. Note that this requires custom configuration to work with your SAP system.

### Native Fiori experience

Render Camunda search form and results directly within the SAP Fiori environment, no context switching.

### Reusable building blocks

Swap in any SAP endpoint or extend the BPMN to fit approvals, masterdata sync, or case management.
