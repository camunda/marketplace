---
id: 469785
name: "Acheron Email Connector"
creatorType: "partner"
creatorName: "Acheron Software Consultancy Private Limited"
creatorUrl: "https://acheron-tech.com/"
categories: 
  - "Collaboration Tools"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
description: "Dynamic, automated email simplified"
seoDescription: "Use FreeMarker and Amazon SES to generate and send personalized emails from business processes."
templates: 
  - url: "https://raw.githubusercontent.com/Acheron-Camunda/email-connector/refs/heads/main/element-template/acheron-email-element-template.json"
    name: "Acheron Email Connector Outbound Template"
smTemplate: "https://github.com/Acheron-Camunda/email-connector"
links: 
  docs: "https://github.com/Acheron-Camunda/email-connector#readme"
  support: "https://forum.camunda.io/"
lastModified: "2025-01-20"
---

Use FreeMarker and Amazon SES to generate and send personalized emails from business processes.

## Features

### Dynamic Template Rendering

Easily render email templates using FreeMarker or Amazon SES by dynamically substituting variables with relevant data. This enables the creation of highly personalized and context-aware emails for transactional, marketing, and notification purposes.

### Seamless Process Integration

Integrate with Camunda SaaS and Self-Managed environments, enabling automated email sending directly within business processes without additional complexities or third-party dependencies.

### Customizable Email Options

Define sender name, recipient emails, CC/BCC fields, subject lines, and dynamic content to fully customize emails. This ensures your communications are precise and aligned with the specific requirements of your business process.

### Secure and Simplified Configuration

Quickly configure SMTP and AWS credentials to enable secure and efficient email delivery. The connector ensures sensitive information is handled safely while making the setup process user-friendly.
