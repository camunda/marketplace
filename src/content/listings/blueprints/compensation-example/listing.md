---
id: 437443
apiSolutionCategory: true
apiAnyIndustry: true
name: "Compensation Example"
creatorType: "community"
creatorName: "Niall Deehan"
creatorUrl: "https://github.com/NPDeehan"
categories: 
  - "Solution Accelerators"
useCases: 
  - "Microservices orchestration"
  - "Human Task orchestration"
resourceTypes: 
  - "BPMN"
  - "Form"
compatibleVersions: 
  - "8.5"
availability: "open-source"
description: "Implement the saga pattern with BPMN"
seoDescription: "Use BPMN compensation events to undo actions as part of a business process."
templates: 
  - url: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/BPMN/Hawk%20Adoption%20(Compensation%20Example).bpmn"
    name: "Compensation Example Blueprint"
  - url: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/Forms/Hawk%20Adoption%20Process.form"
    name: "Resource 2"
  - url: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/Forms/Hawk%20Adoption%20Verification.form"
    name: "Resource 3"
smTemplate: "https://github.com/NPDeehan/Compensation-Example-Camunda8"
links: 
  preview: "https://raw.githubusercontent.com/NPDeehan/Compensation-Example-Camunda8/main/BPMN/Hawk%20Adoption%20(Compensation%20Example).bpmn"
  support: "https://forum.camunda.io/"
resources: 
  - type: "VIDEO"
    title: "Tutorial: How to Use Compensation Events in Camunda 8 BPMN Models"
    url: "https://www.youtube.com/watch?v=xoTlE4yd3rk"
lastModified: "2024-08-13"
---

Use BPMN compensation events to undo actions as part of a business process.

## Features

### Leverage BPMN to Undo Actions

BPMN is an ideal tool for rolling back actions that have been taken during execution of a business process, even in a distributed architecture. Instead of hand-coding rollback logic across multiple microservices, the BPMN compensation event can automatically undo previous tasks.

### Multi-Channel Communication

This blueprint demonstrates how to communicate through multiple channels and accommodates situations where a person cannot be contacted through more than one channel. The example can be extended to other methods of communication; for example, sending an SMS to a phone number.
