---
id: 416995
name: "Asana Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Collaboration Tools"
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
description: "Integrate Asana with Camunda processes"
seoDescription: "Streamline business processes by bridging the gap between project management and Camunda-based processes."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.Asana.v1/latest/asana-connector.json"
    id: "io.camunda.connectors.Asana.v1"
    name: "Asana outbound"
smTemplate: "https://github.com/camunda/connectors-bundle/blob/main/connectors/asana"
links: 
  support: "https://forum.camunda.io/"
  website: "https://docs.camunda.io/docs/components/connectors/out-of-the-box-connectors/asana/"
lastModified: "2025-09-03"
---

Streamline business processes by bridging the gap between project management and Camunda-based processes.

## Features

### Get Tasks from a Project

Retrieve all tasks within an Asana project, enabling Camunda workflows to adapt or make decisions based on the current project status.

### Get a Task by ID

Fetch specific task details from Asana, allowing Camunda to perform tailored actions like updates, notifications, or subsequent task creation.

### Create a Task

Directly create new tasks within an Asana project from a Camunda workflow, ideal for automating project milestones or triggering sub-tasks.

### Delete a Task

Remove specific tasks in Asana through Camunda, aiding in workflow clean-ups, or concluding completed or obsolete tasks.

### Get Projects

Enumerate all available Asana projects, facilitating dynamic routing or decision-making within Camunda workflows.

### Get a Project by ID

Retrieve specific project details, enabling Camunda to coordinate tasks or adapt existing workflows based on the project's attributes.

### Create a Project in a Workspace

Automatically set up new Asana projects within a workspace, perfect for initiating new ventures or phases directly from Camunda.

### Delete a Project

Remove an existing Asana project, allowing Camunda to manage project lifecycles, including their orderly termination.
