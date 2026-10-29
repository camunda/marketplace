---
id: 597911
name: "SAP Business Partner Search"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Quick Start"
resourceTypes: 
  - "BPMN"
  - "Form"
  - "Connector Template"
  - "README"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Accelerate S/4HANA and ECC projects"
seoDescription: "Use this blueprint to pick an SAP system, enter filters in a Camunda form, and review live Business Partner data in a native Fiori environment. No custom code required."
templates: 
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/Primary%20Process.bpmn"
    name: "Resource 1"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/README.md"
    name: "Resource 10"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-1.form"
    name: "Resource 2"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-fail.form"
    name: "Resource 3"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-result.form"
    name: "Resource 4"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/fiori-user-task-success.form"
    name: "Resource 5"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/form-choose-sap-system.form"
    name: "Resource 6"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/result-screen.form"
    name: "Resource 7"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/rfc-connector/element-templates/sap-rfc-connector.json"
    name: "Resource 8"
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/odata-connector/element-templates/sap-odata-connector.json"
    name: "Resource 9"
smTemplate: "https://github.com/camunda/sap-connectors/tree/main/blueprint"
links: 
  docs: "https://docs.camunda.io/docs/components/camunda-integrations/sap/sap-integration/"
  preview: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/blueprint/Primary%20Process.bpmn"
  support: "https://forum.camunda.io/"
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
