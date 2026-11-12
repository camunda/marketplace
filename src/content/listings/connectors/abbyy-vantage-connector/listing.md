---
id: 676529
name: "ABBYY Vantage Connector"
creatorType: "partner"
creatorName: "ABBYY"
creatorUrl: "https://www.abbyy.com/"
categories: 
  - "Enterprise Applications"
useCases: 
  - "Microservices orchestration"
  - "Human Task orchestration"
  - "RPA bot orchestration"
  - "Simplified case management"
  - "Agentic AI orchestration"
resourceTypes: 
  - "BPMN"
  - "Form"
  - "Connector Template"
  - "README"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
  - "bpmn:SubProcess"
runtimes: 
  - "bundle"
  - "self-hosted"
connectorTypes: 
  - "inbound"
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Reliable document AI for process orchestration"
seoDescription: "Transform unstructured documents into accurate, structured data, while Camunda orchestrates decisions and routes work across systems and teams. Deliver scalable, end-to-end automation for document-centric processes such as claims handling, onboarding, financial operations, compliance, and customer service."
templates: 
  - url: "https://raw.githubusercontent.com/deepakgoyalABBYY/camunda-abbyy-vantage-connector/refs/heads/main/ABBYY%20Vantage%20Connector.json"
    name: "ABBYY Vantage Connector for Camunda Outbound Template"
smTemplate: "https://github.com/deepakgoyalABBYY/camunda-abbyy-vantage-connector"
video: "https://youtu.be/7BvtJK01XJ4?si=MJYVWSPoSOVP_OUi"
links: 
  github: "https://github.com/deepakgoyalABBYY/camunda-abbyy-vantage-connector"
  docs: "https://abbyyglobal-my.sharepoint.com/:b:/g/personal/rahul_kapoor_abbyy_com/EbIVFCqKA_9Nu6VD0FMh6GcBYOsG58f0AuezLu5bxTqPSQ?e=ixM9JF"
  support: "https://forum.camunda.io/"
lastModified: "2025-12-10"
---

Transform unstructured documents into accurate, structured data, while Camunda orchestrates decisions and routes work across systems and teams. Deliver scalable, end-to-end automation for document-centric processes such as claims handling, onboarding, financial operations, compliance, and customer service.

## Features

### Use ABBYY Vantage Skills in Camunda-based processes

The connector lets you call any ABBYY Vantage Process Skill directly from a BPMN process model. You can design the Skill in Vantage and execute it in Camunda without writing custom code. This brings powerful document AI into process automation while keeping all logic reusable and modular.

### High accuracy data extraction and structured output

The connector enables processes to extract fields, tables, amounts, names, dates, and other structured information from complex documents using ABBYY Vantage’s Document Skills. Extracted data is returned as structured JSON or file formats through the connector and can be used for decisions, approvals, validations, and downstream integrations.

### Enable manual review when human input is required

If Vantage determines that a document needs manual verification, the connector provides access to Vantage’s Manual Review link. Camunda can pause the process, notify a user, wait for review to finish, and then continue executing the process. This enables hybrid human-in-the-loop automation with no extra integration effort.

### Advanced business rules, matching, and validation

ABBYY Vantage can perform advanced validation inside the Skill such as two-way and three-way matching, field consistency checks, lookup validations, data checks, and custom business rules. When a Skill detects mismatches or rule violations, these errors are returned alongside the extracted data. This allows the process to automatically approve, escalate, or retry, based on Vantage’s built-in validation intelligence.

### Multi-document handling and classification

Uploaded files can contain multiple documents; for example, a PDF containing invoices, receipts, IDs, or contracts. Vantage Process Skills can split the file, classify each part, extract data for every document, and return multiple structured results. The connector delivers these outputs back to Camunda as part of the standard transaction information, enabling document routing and processing decisions for each document type.
