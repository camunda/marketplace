---
id: 820091
name: "Jasper Reports Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
categories: 
  - "External Data Services"
useCases: 
  - "Microservices orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
availability: "open-source"
description: "Generate reports from Jasper templates"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-jasper"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-jasper/raw/refs/heads/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-06-05"
---

*Render Jasper reports directly from business processes*

Generate formatted reports from Jasper report templates within Camunda processes. The connector retrieves report templates from Camunda document storage, a URL, or a connected drive, and renders output with scoped process variable data.

## Features

### Source templates from multiple storage locations

Retrieve Jasper report templates from Camunda document storage, a public or authenticated URL, or a connected drive. No custom integration code is required to locate and load template files at runtime.

### Inject process context automatically

Supply reports with live process data including process instance key, process definition name, and the current process diagram. Context is passed directly to the Jasper engine without additional configuration.

### Control variable scope to protect process data

Process designers define which variables are accessible to the report engine. This scoping ensures that only intended data is exposed, keeping sensitive process variables out of generated output.
