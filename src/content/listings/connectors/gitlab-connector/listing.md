---
id: 418741
name: "GitLab Connector"
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
description: "Automate GitLab workflows with Camunda"
seoDescription: "Automate GitLab project management, issue tracking, and software release processes to manage your entire DevOps cycle in one centralized Camunda environment."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.GitLab.v1/latest/gitlab-connector.json"
    name: "Gitlab Outbound"
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/gitlab/element-templates/gitlab-connector.json"
links: 
  website: "https://camunda.com"
lastModified: "2025-09-08"
---

Automate GitLab project management, issue tracking, and software release processes to manage your entire DevOps cycle in one centralized Camunda environment.

## Features

### Get, Create, Delete an Issue

Automate the retrieval, creation, and deletion of GitLab issues directly from Camunda-based processes.

### Comment on an Issue

Auto-generate or manually add comments to GitLab issues, setting the level of confidentiality as needed.

### Search Issues

Execute custom searches for GitLab issues using parameters such as scope, state, assignee ID, username, and text within the issue title and description.

### List All Releases by Project ID

Automatically pull a list of all releases for specific projects. This feature is useful for generating release reports and planning deployments.

### Get Release by a Tag Name

Retrieve specific release details via tag name, aiding in version control and release management.

### Create a Release

Create GitLab releases from Camunda-based processes, including setting the tag, ref, release name, and description.
