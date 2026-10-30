---
id: 797170
name: "NICE CXone Connector"
creatorType: "community"
creatorName: "Camunda / Calvin Robbins"
creatorUrl: "https://www.linkedin.com/in/calvinrobbins/"
categories: 
  - "Enterprise Applications"
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
description: "Orchestrate your contact center end-to-end"
seoDescription: "Connect NICE CXone to Camunda: manage agents, create work items, query real-time data, and send messages across 22+ operations with no code required."
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-nice-cxone-connector/refs/heads/main/element-templates/nicecxone-connector.json"
    name: "NICE CXone Connector Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-nice-cxone-connector"
video: "https://www.youtube.com/watch?v=qaqH9yw9N3U"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-nice-cxone-connector#readme"
  support: "https://forum.camunda.io/"
lastModified: "2026-08-06"
---

Connect NICE CXone to Camunda: manage agents, create work items, query real-time data, and send messages across 22+ operations with no code required.

## Features

### Create work items and route to agents

Push complaints, tasks, cases, and callback requests from your Camunda process directly into NICE CXone agent queues via the Patron API. A pre-built FEEL expression auto-generates the payload using your process instance key, and the smart result mapping extracts the contactId so you can track the work item through the rest of your workflow. Use it with the dedicated Create Work Item template for a streamlined experience, or the main connector for full control.

### Check agent availability for smart routing

Query real-time agent states, skill queue metrics, and agent activity from within a Camunda process using the Real-Time Data API. The built-in result expression calculates available and busy agent counts and returns a hasAvailableAgents Boolean; drop it into a gateway to route work to live agents when they're free or queue it for later when they're not. Filter by skill ID to check availability for specific teams.

### Manage your contact center end-to-end

Go beyond work items and agent status with 22+ operations spanning the full CXone platform. Look up agents, skills, and teams through the Admin API. Pull contact history and performance summaries from Reporting. Send outbound messages and manage conversations via Digital Engagement. Start and end agent sessions, set agent states, and build custom calls to any CXone endpoint, all configured through Camunda Modeler with no code required.
