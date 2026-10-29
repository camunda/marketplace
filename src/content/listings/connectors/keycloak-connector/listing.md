---
id: 457160
name: "Keycloak Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
categories: 
  - "Automation Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.6"
availability: "open-source"
description: "Automate Camunda user management"
seoDescription: "Combine Keycloak and Camunda to create, modify, and delete users and their roles."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-keycloak/refs/heads/main/element-templates/keycloak-function.json"
    name: "Keycloak Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-keycloak"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-keycloak/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2024-10-31"
---

Combine Keycloak and Camunda to create, modify, and delete users and their roles.

## Features

### Create a User

Create a user in Keycloak and assign roles to enable users to access Camunda Operate, Tasklist, and Optimize.

### Search Users

Search for users based on multiple criteria or search by user ID.

### Update a User

Update user properties such as first name, last name, and email. You can also update the list of roles that are assigned to the user.

### Delete a User

Delete a user from Keycloak.
