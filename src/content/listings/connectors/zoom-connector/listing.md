---
id: 782061
name: "Zoom Connector"
creatorType: "community"
creatorName: "Camunda / Calvin Robbins"
creatorUrl: "https://www.linkedin.com/in/calvinrobbins/"
categories: 
  - "Enterprise Applications"
useCases: 
  - "Human Task orchestration"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.7"
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Create and manage Zoom meetings"
seoDescription: "Automate Zoom meeting workflows in Camunda using a ready-to-use element template built on the REST connector. Create, update, retrieve and delete meetings, plus manage registrants and meeting details via the Zoom API."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-zoom-connector/refs/heads/main/element-templates/zoom_connector.json"
    name: "Zoom Connector Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-zoom-connector"
links: 
  docs: "https://github.com/crobbins215/camunda-zoom-connector/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-05-27"
---

Automate Zoom meeting workflows in Camunda using a ready-to-use element template built on the REST connector. Create, update, retrieve and delete meetings, plus manage registrants and meeting details via the Zoom API.

## Features

### Create and schedule meetings

Create scheduled or instant meetings (and retrieve, update, or delete them) directly from a BPMN service task, enabling meeting provisioning as part of onboarding, incident response, approvals, and customer workflows.

### Manage registrants and invitations

Support key meeting administration flows, including creating and managing registrants and accessing invitation-related details, so processes can automate attendee onboarding and meeting communications.

### Secure authorization and flexible output mapping

Use Camunda secrets for the Zoom API authorization and map API responses to process variables via standard output mapping, keeping sensitive values out of BPMN and making results immediately usable downstream.
