---
id: 808469
apiSolutionCategory: true
name: "Dynamic Multi-Instance Credit Scoring"
creatorType: "community"
creatorName: "Juan Carlos Beltrán Rebaza"
creatorUrl: "https://www.youtube.com/@bpmenlapractica"
categories: 
  - "Solution Accelerators"
industries: 
  - "Financial Services"
useCases: 
  - "Simplified case management"
resourceTypes: 
  - "BPMN"
  - "DMN"
  - "Form"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Automated credit scoring with parallel orchestration"
templates: 
  - url: "https://raw.githubusercontent.com/jcbereb/camunda8-multi-instance-scoring-blueprint/refs/heads/main/process-scoring.bpmn"
    name: "Resource 1"
  - url: "https://raw.githubusercontent.com/jcbereb/camunda8-multi-instance-scoring-blueprint/refs/heads/main/determine-scoring.dmn"
    name: "Resource 2"
  - url: "https://raw.githubusercontent.com/jcbereb/camunda8-multi-instance-scoring-blueprint/refs/heads/main/scoring-result.form"
    name: "Resource 3"
smTemplate: "https://github.com/jcbereb/camunda8-multi-instance-scoring-blueprint"
links: 
  docs: "https://github.com/jcbereb/camunda8-multi-instance-scoring-blueprint"
  support: "https://forum.camunda.io/"
lastModified: "2026-05-06"
---

*Score customer credit risk in parallel using DMN and FEEL*

This blueprint automates credit scoring for customer segments using parallel multi-instance orchestration in Camunda 8. It combines a DMN decision model and FEEL-driven forms to classify customers by risk category — designed for segments of up to 1,000 customers per instance.

## Features

### Score up to 1,000 customers concurrently per instance

Provides high-performance iteration over targeted customer collections. This asynchronous pattern enables concurrent execution of risk scoring logic, ensuring efficient handling of up to 1,000 customers per instance without compromising the Camunda engine performance.

### Classify customers automatically using a DMN decision model

Implements a fully executable DMN decision model to automatically classify customers. Using FEEL expressions and a first hit policy, it dynamically transforms client data (such as income and credit history) into a final risk category: premium, standard, high risk, or no profile.

### Adapt the review form dynamically based on scoring results

Includes a Camunda form that uses FEEL expressions to create a dynamic, context-aware user experience. The form presentation adapts based on the parallel iteration data and the calculated scoring result, guiding users through task-specific decisions for standard and high-risk scenarios.
