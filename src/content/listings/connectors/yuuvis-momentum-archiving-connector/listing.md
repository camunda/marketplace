---
id: 555764
name: "yuuvis® Momentum Archiving Connector"
creatorType: "partner"
creatorName: "OPTIMAL SYSTEMS GmbH"
creatorUrl: "https://www.optimal-systems.de/"
categories: 
  - "Cloud Computing Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.7"
availability: "open-source"
description: "Audit-proof archiving for processes"
templates: 
  - url: "https://raw.githubusercontent.com/OPTIMALSYSTEMS/yuuvis-momentum-connector/refs/heads/main/yM-DMS%20Connector.json"
    name: "Yuuvis Momentum"
smTemplate: "https://github.com/OPTIMALSYSTEMS/yuuvis-momentum-connector?tab=readme-ov-file#readme"
links: 
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  preview: "https://raw.githubusercontent.com/OPTIMALSYSTEMS/yuuvis-momentum-connector/refs/heads/main/yM-Demo.bpmn"
  support: "https://forum.camunda.io/"
lastModified: "2025-11-25"
---

*Secure, scalable archiving, seamlessly integrated into Camunda processes*

Connect Camunda-based business processes to a yuuvis® Momentum archive to ensure legally compliant document storage while significantly streamlining and accelerating processes.

## Features

### Archive documents directly from processes

Automatically and directly transfer documents from Camunda BPMN processes into the yuuvis® Momentum archive. Archiving is fully integrated into the process flow – without manual steps or external tools. yuuvis® Momentum is ideally suited as an archive back end for existing DMS solutions, custom applications, or automated archiving processes. No proprietary client – full control over your application logic. Compliant storage according to GoBD, GDPR, and ISO standards.

### Support for structured metadata

In addition to the document itself, relevant process data such as IDs, timestamps, or classifications can be automatically passed along. These metadata enhance later searchability, categorization, and analysis of archived content.

### Work with flexible formats

The connector supports a wide range of document formats, including PDF, XML, and JSON. This makes it suitable for a variety of document-centric use cases, from forms to structured system outputs.

### Integrate without middleware

Connection to yuuvis® Momentum is direct via a REST-based API. No middleware or integration platform is required, significantly simplifying both implementation and maintenance.

### Ensure compliance

Archiving is audit-proof and meets the requirements of GDPR, GoBD, and internal audit standards. Sensitive or legally required documents are stored securely and traceably.
