---
id: 419555
name: "Carbon Reductor"
creatorType: "partner"
creatorName: "envite consulting GmbH"
creatorUrl: "https://envite.de/"
categories: 
  - "External Data Services"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
  - "8.6"
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Execute your business processes sustainably"
templates: 
  - url: "https://raw.githubusercontent.com/envite-consulting/camunda-carbon-reductor/main/exampleprocess/c8/.camunda/element-templates/carbon-reductor-c8-connector.json"
    name: "de.envite.greenbpm.carbonreductorconnector.carbonreductortask.v1"
links: 
  github: "https://github.com/envite-consulting/camunda-carbon-reductor"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://github.com/envite-consulting/camunda-carbon-reductor/discussions/categories/q-a"
  website: "https://envite.de/"
resources: 
  - type: "VIDEO"
    title: "Carbon Reduced Business Process Execution"
    url: "https://www.youtube.com/watch?v=sGW5MJoOxPk"
lastModified: "2026-02-09"
---

*Contribute to climate protection*

The Camunda Carbon Reductor allows you to time shift your processes' carbon emissions when energy is green

## Features

### Time shifting

Using the time shifting mode (default) the Carbon Reductor Connector allows you to optimize for lower carbon emissions by moving your process execution into a timeframe with the least amount of carbon possible while still fulfilling SLAs.

### Measurement

Using the measuring mode the Carbon Reductor Connector allows you to measure the emissions in gCO2e/KWh at execution time and reports as well the emissions at the optimal time while still fulfilling your SLAs.
