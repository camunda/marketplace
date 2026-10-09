---
id: 427601
name: "Power Automate Connector"
creatorType: "partner"
creatorName: "Almato"
creatorUrl: "https://www.almato.com/en/"
categories: 
  - "Automation Services"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Orchestrate Power Automate with Camunda"
templates: 
  - url: "https://bitbucket.org/almatoag/almato_public/raw/ba3cf9828252742f0dff59b425117588bc1fa627/run_flow_add_queue/power-automate-outbound-connector.json,https://bitbucket.org/almatoag/almato_public/raw/ba3cf9828252742f0dff59b425117588bc1fa627/get_token/power-automate-outbound-connector-authorization.json"
    name: "Power Automate Connector Outbound Template"
smTemplate: "https://bitbucket.org/almatoag/almato_public/src/main"
links: 
  support: "https://forum.camunda.io/"
lastModified: "2024-04-05"
---

*Integrating Process Automation with the Power Automate Connector*

Integrate Camunda's process orchestration expertise with the flexibility of Microsoft Power Automate on the Power Platform.

## Features

### Get Token

Retrieve authentication tokens from Azure App Registration, facilitating secure access to various Azure services. This function operates by utilizing specific parameters to request access tokens, which are essential for authorizing and authenticating API calls within Azure's ecosystem.

### Run Desktop Flow

This function provides seamless integration between Camunda and the Power Platform, enabling the execution of specific desktop flows within Power Automate directly from Camunda-based processes. This capability allows for the automation of desktop and web applications through the orchestration of Power Automate Desktop flows based on business logic defined in Camunda.

### Add Item to Work Queue

This function is an integral part of orchestrating complex automation workflows between Camunda and the Power Platform. It facilitates the addition of tasks or items to a designated work queue in Power Automate, enabling subsequent processing by specific desktop flows. By utilizing this function, one can ensure that tasks are queued for execution in an organized manner, based on the automation logic defined within Camunda-based processes.
