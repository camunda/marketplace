---
id: 873769
name: "LDAP Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
categories: 
  - "External Data Services"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
description: "Search, create, delete, and move LDAP entries"
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-ldap/main/element-templates/ldap-function.json"
    name: "Lpad operation Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-ldap"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-ldap/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-28"
---

*Manage your LDAP directory from your processes*

Manage LDAP directory entries from your Camunda processes. Search for entries, create new ones, and delete or move existing ones, for example to automate the synchronization between your directory and Camunda users together with the Identity connector.

## Features

### Search entries

Search entries in the directory.

### Create entry

Create a new entry in the LDAP directory.

### Delete entry

Delete an entry from the directory.

### Move entry

Move an entry to a different place in the directory.
