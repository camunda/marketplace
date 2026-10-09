---
id: 873328
name: "User Task Update Connector"
creatorType: "camunda"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
categories: 
  - "Automation Services"
industries: 
  - "Technology"
useCases: 
  - "Human Task orchestration"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.9"
availability: "open-source"
description: "Update parameters on user tasks"
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-usertask-update/main/element-templates/usertask-update-function.json"
    name: "User task Update Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-usertask-update"
links: 
  docs: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-usertask-update/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-08"
---

*Adjust user tasks automatically as processes run*

Update the priority, due date, follow-up date, assignment, and candidates of one or several user tasks in a running process instance.

## Features

### Update user task priority

Increase or decrease the priority of a user task.

### Assign or unassign users

Assign a user to a task, or unassign the current user.

### Manage candidate groups and users

Add or remove candidate groups and candidate users.

### Adjust due dates and follow-up dates

Add or remove time on a due date or follow-up date.
