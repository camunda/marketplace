---
id: 423548
name: "Kubeflow Connector"
creatorType: "partner"
creatorName: "viadee Unternehmensberatung AG"
creatorUrl: "https://www.viadee.de/"
categories: 
  - "AI Services"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.4"
availability: "open-source"
description: "Integrate Kubeflow pipelines into processes"
templates: 
  - url: "placeholder"
    name: "Kubeflow Connector outbound"
links: 
  github: "https://github.com/viadee/c8-kubeflow-outbound-connector"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2024-04-08"
---

*Invoke Kubeflow pipelines from within a process, both synchronously and asynchronously*

Retrieve Kubeflow pipelines, experiments, and runs, and trigger pipelines and consume their output in the subsequent process steps.

## Features

### Get Pipelines

Get an overview of all pipelines available within Kubeflow and apply a filter if necessary.

### Get Experiments

Get an overview of all experiments available within Kubeflow and apply a filter if necessary.

### Get Runs

Get an overview of all runs available within Kubeflow and apply a filter if necessary.

### Get Run By ID

Get details of a single run identified by its ID.

### Get Run By Name

Get details of a single run identified by its name.

### Start Run

Trigger a run and continue.

### Start Run and Monitor

Trigger a run, wait for its completion, and continue.

### Create Experiment

Create an experiment by providing a name and, optionally, a description.

### Get Experiment By ID

Get details of a single experiment identified by its ID.

### API Version Compatibility

This Connector supports all operations regardless of whether you are running v1 pipelines or v2 pipelines.
