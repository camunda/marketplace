---
id: 439170
slug: "ci-cd-pipeline"
name: "CI/CD Pipeline"
type: 
  - "blueprint"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "Solution Accelerators"
industries: 
  - "Technology"
useCases: 
  - "Microservices orchestration"
  - "Human Task orchestration"
resourceTypes: []
bpmnTypes: []
runtimes: []
connectorTypes: []
compatibleVersions: 
  - "8.4"
  - "8.5"
  - "8.6"
  - "8.7"
availability: "open-source"
description: "Orchestrate CI/CD pipelines with Camunda"
tagline: "Orchestrate CI/CD pipelines with Camunda"
templates: 
  - id: null
    name: "CI-CD Pipeline.bpmn"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/ci-cd/CI-CD%20Pipeline.bpmn"
  - id: null
    name: "CICDPipelineStart.form"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/ci-cd/CICDPipelineStart.form"
  - id: null
    name: "ManualQATesting.form"
    url: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/ci-cd/ManualQATesting.form"
saasTemplate: null
smTemplate: "https://github.com/camunda/camunda-platform-tutorials/tree/main/solutions/ci-cd"
githubRepo: null
docsUrl: null
previewImage: "https://raw.githubusercontent.com/camunda/camunda-platform-tutorials/main/solutions/ci-cd/CI-CD%20Pipeline.bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-04-09"
---

Implement a customizable process development lifecycle (PDLC) that begins when Web Modeler changes are complete and ends when the process and all other dependencies are released to production.

## Features

### Composable Integration

This is a custom integration that gives you complete flexibility and orchestrates the whole release process, not just deployment. However, with the Web Modeler's native Git Sync feature, you can connect your process applications to a remote repository and synchronize your files with a button click. This feature creates a new commit, which can subsequently initiate your CI/CD pipeline. Learn more at https://docs.camunda.io/docs/next/components/modeler/web-modeler/git-sync/)

### Version Control Synchronization

Allows you to synchronize contents of a Web Modeler folder to a target GitLab repository by opening a merge request which, when merged, triggers a deployment pipeline.

### Fully Customizable

The blueprint is designed to be used with GitLab but can be adapted to work with other CI/CD tools.

### Multi-stage Deployments

Simulates a deployment pipeline across three stages, including a manual review and additional testing. After each successful deployment, a milestone is created to track deployment status.
