---
id: 437443
slug: "compensation-example"
name: "Compensation Example"
type: 
  - "blueprint"
creatorType: "community"
creatorName: "Niall Deehan"
creatorUrl: "https://github.com/NPDeehan"
categories: 
  - "Solution Accelerators"
industries: []
useCases: 
  - "Microservices orchestration"
  - "Human Task orchestration"
resourceTypes: 
  - "BPMN"
  - "Form"
bpmnTypes: []
runtimes: []
connectorTypes: []
compatibleVersions: 
  - "8.5"
availability: "open-source"
description: "Implement the saga pattern with BPMN"
tagline: "Implement the saga pattern in Camunda"
templates: 
  - id: null
    name: "Compensation Example Blueprint"
    url: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/BPMN/Hawk%20Adoption%20(Compensation%20Example).bpmn"
  - id: null
    name: "Resource 2"
    url: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/Forms/Hawk%20Adoption%20Process.form"
  - id: null
    name: "Resource 3"
    url: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/Forms/Hawk%20Adoption%20Verification.form"
saasTemplate: null
smTemplate: "https://github.com/NPDeehan/Compensation-Example-Camunda8"
githubRepo: null
docsUrl: null
previewImage: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/BPMN/Hawk%20Adoption%20(Compensation%20Example).bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: 
  - type: "VIDEO"
    title: "Tutorial: How to Use Compensation Events in Camunda 8 BPMN Models"
    url: "https://www.youtube.com/watch?v=xoTlE4yd3rk"
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-08-13"
---

Use BPMN compensation events to undo actions as part of a business process.

## Features

### Leverage BPMN to Undo Actions

BPMN is an ideal tool for rolling back actions that have been taken during execution of a business process, even in a distributed architecture. Instead of hand-coding rollback logic across multiple microservices, the BPMN compensation event can automatically undo previous tasks.

### Multi-Channel Communication

This blueprint demonstrates how to communicate through multiple channels and accommodates situations where a person cannot be contacted through more than one channel. The example can be extended to other methods of communication; for example, sending an SMS to a phone number.
