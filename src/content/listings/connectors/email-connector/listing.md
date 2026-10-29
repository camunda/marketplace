---
id: 457161
name: "Email Connector"
creatorType: "camunda"
creatorName: "Camunda"
categories: 
  - "Technical Protocols"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
  - "bpmn:IntermediateCatchEvent"
  - "bpmn:StartEvent"
  - "bpmn:IntermediateThrowEvent"
  - "bpmn:BoundaryEvent"
runtimes: 
  - "bundle"
connectorTypes: 
  - "inbound"
  - "outbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Versatile email management for multiple protocols"
seoDescription: "Integrate email into business processes with support for IMAP, POP3, and SMTP, plus advanced search, organizational capabilities, and messaging functions."
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.email.v1/latest/email-outbound-connector.json"
    name: "Email Outbound"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.EmailMessageStart.v1/latest/email-message-start-event-connector.json"
    name: "Email Inbound Start"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.EmailBoundary.v1/latest/email-inbound-connector-boundary.json"
    name: "Email Inbound Boundary"
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.inbound.EmailIntermediate.v1/latest/email-inbound-connector-intermediate.json"
    name: "Email Inbound Intermediate"
smTemplate: "https://github.com/camunda/connectors/tree/main/connectors/email/element-templates"
links: 
  support: "https://forum.camunda.io/"
lastModified: "2025-12-08"
---

Integrate email into business processes with support for IMAP, POP3, and SMTP, plus advanced search, organizational capabilities, and messaging functions.

## Features

### List Emails

Retrieve and view a list of emails in specific folders or across an entire mailbox using POP3 or IMAP. This function offers a clear and concise summary of email contents which can be used for quick oversight or to trigger subsequent process tasks in Camunda.

### Read Emails

Read and extract data from emails, including header information and body, using POP3 or IMAP. This feature is essential for processes that require content analysis or automated processing based on the information contained within emails.

### Advanced Email Search

Perform complex searches with detailed criteria such as sender, recipient, subject, keywords, and date ranges. This powerful search capability ensures that specific emails can be quickly located and acted upon within a Camunda-based process.

### Send Email

Create outbound emails directly from Camunda-based processes using SMTP. Customize various aspects of the email, such as recipients, subject lines, and body content, facilitating communication.

### Delete Email

Delete emails from a mailbox using POP3 or IMAP. Use this function to manage inbox size, maintain organization, and ensure compliance with data retention policies. This feature can be automated within business processes to keep email communications streamlined and relevant.

### Move Emails

Move emails between folders using the IMAP protocol, allowing for efficient inbox organization. This feature supports automated categorization and prioritization of emails, ensuring that the mailbox remains orderly and that important emails are readily accessible within a process.
