---
id: 873771
name: "Nextcloud Inbound Connector"
creatorType: "partner"
creatorName: "ilume informatik AG"
creatorUrl: "https://ilume.de/camunda"
categories: 
  - "External Data Services"
useCases: 
  - "Microservices orchestration"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.8"
availability: "open-source"
description: "Respond to external Nextcloud requests"
smTemplate: "https://github.com/ilume-Informatik-AG/nextcloud-connector/tree/master/nextcloud-connector-inbound"
links: 
  github: "https://github.com/ilume-Informatik-AG/nextcloud-connector/tree/master/nextcloud-connector-inbound"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-28"
---

*Respond to external requests from Nextcloud*

The Nextcloud Inbound connector responds to external requests from Nextcloud and passes their metadata directly to Camunda BPMN processes. Start new process instances or trigger actions in running ones when files and folders are created, updated, or deleted.

## Features

### Flexible control over external requests

A built-in whitelist and configuration options allow you to control which types of requests are permitted.

### Built-in correlation for process instances

Through the use of correlation keys, the connector makes sure that only certain process instances get triggered for specific use cases.

### Customize metadata outputs

Adjust how information regarding document-based processes in Nextcloud should be displayed and processed by specifying what form the output metadata from the request body should take.
