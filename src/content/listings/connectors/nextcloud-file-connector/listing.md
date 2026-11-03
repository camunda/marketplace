---
id: 873772
name: "Nextcloud File Connector"
creatorType: "partner"
creatorName: "ilume informatik AG"
creatorUrl: "https://ilume.de/camunda"
categories: 
  - "External Data Services"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
  - "8.10"
description: "Execute Nextcloud operations from Camunda"
smTemplate: "https://github.com/ilume-Informatik-AG/nextcloud-connector/tree/master/nextcloud-connector-outbound"
links: 
  github: "https://github.com/ilume-Informatik-AG/nextcloud-connector/tree/master/nextcloud-connector-outbound"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-28"
---

*Execute file and folder operations in Nextcloud from Camunda*

The Nextcloud File connector runs file and folder operations in Nextcloud directly from Camunda BPMN processes. Create and list folders, and upload, download, copy, move, and delete files, without additional service implementation or custom backend logic.

## Features

### Seamless Camunda integration

Use the connector natively as a connector task in BPMN, with no additional service implementation required.

### File and folder operations in Nextcloud

Create and list folders, and upload, download, copy, move, and delete files.

### Direct use of the Nextcloud WebDAV API

Communication is standardized and secure, with no proprietary interfaces.

### Camunda document handling integration

Downloads save files directly to Camunda Storage, and uploads use DocumentId and ContentHash. The connector returns clean, structured JSON responses.

### Secure authentication

Supports Nextcloud app passwords and integrates with the Camunda secret store, so there are no plaintext credentials in the BPMN model.

### Flexible deployment options

Runs in SaaS and Self-Managed environments, is Docker-ready, and is configurable via environment variables.
