---
id: 783478
name: "Zip/Unzip Connector"
legacySlug: "zipunzip-connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "https://camunda.com/"
categories: 
  - "Technical Protocols"
resourceTypes: 
  - "Connector Template"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Work with archives in processes"
seoDescription: "Create and extract ZIP or RAR archives in Camunda-based business processes. Zip multiple documents into one file or expand archives using FileStorage-backed storage."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-zip/refs/heads/main/element-templates/zip-connector.json"
    name: "Zip/Unzip connector Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-zip"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-zip"
  support: "https://forum.camunda.io/"
lastModified: "2026-03-05"
---

Create and extract ZIP or RAR archives in Camunda-based business processes. Zip multiple documents into one file or expand archives using FileStorage-backed storage.

## Features

### Create an archive

Combine a list of documents into a single ZIP file so your process can transfer, store, or share a bundled package as one artifact.

### Extract from an archive

Unpack a ZIP or RAR archive into a list of documents so your process can validate contents, route files to the right steps, and store outputs reliably.
