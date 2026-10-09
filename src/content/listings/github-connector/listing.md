---
id: 418739
slug: "github-connector"
name: "GitHub Connector"
type: 
  - "connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Collaboration Tools"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: "open-source"
description: "Integrate GitHub tasks in Camunda"
tagline: "Orchestrate Your Software Development Lifecycle with Camunda and GitHub"
templates: 
  - id: "io.camunda.connectors.webhook.GithubWebhookConnectorMessageStart.v1"
    name: "Github Inbound Start"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.webhook.GithubWebhookConnectorMessageStart.v1/latest/github-webhook-connector-message-start.json"
  - id: "io.camunda.connectors.webhook.GithubWebhookConnectorIntermediate.v1"
    name: "Github Inbound Intermediate"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.webhook.GithubWebhookConnectorIntermediate.v1/latest/github-webhook-connector-intermediate.json"
  - id: "io.camunda.connectors.GitHub.v1"
    name: "Github Outbound"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.GitHub.v1/latest/github-connector.json"
  - id: null
    name: "Github Inbound Boundary Template"
    url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.webhook.GithubWebhookConnectorBoundary.v1/latest/github-webhook-connector-boundary.json"
saasTemplate: null
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/github/element-templates"
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: 
  - type: "VIDEO"
    title: "How to configure the Github Webhook Connector"
    url: "https://vimeo.com/840397436?share=copy"
supportUrl: "https://forum.camunda.io/"
referUrl: "https://camunda.com"
lastModified: "2025-09-05"
---

Manage GitHub repositories, issues, and more directly through Camunda to automate your entire software development process.

## Features

### Create, Get, Update an Issue

Automate the creation and updating of issues from Camunda processes whenever a new feature is proposed or a bug is detected.

### Create an Issue, Comment, Search Issue

Create GitHub issues or search for GitHub issues based on various parameters. This feature is perfect for issue tracking and documentation.

### List, Get, Merge a Branch

Automate branch management tasks to enforce coding standards or to initiate automated testing and deployment.

### List Code Scanning Alerts

Retrieve code quality metrics and security vulnerability reports and use them to trigger appropriate Camunda processes.

### Create an Organization Invitation

Automate the process of inviting new members to your GitHub organization. This feature is ideal for employee onboarding.

### Create, Update, Delete, List Releases

Automate the release process by creating or updating GitHub releases based on milestones achieved in a Camunda-based process.

### List, Create, Get, Update, Delete a Repository, List Contributors

Automate repository creation and repository management based on project needs or internal requirements.

### Trigger Process by Webhook from GitHub

Initiate a Camunda process instance based on GitHub events such as pushes, pull requests, and issue comments.
