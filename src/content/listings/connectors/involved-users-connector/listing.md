---
id: 873770
name: "Involved Users Connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://camunda.com"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
description: "Get the users involved in active user tasks"
templates: 
  - url: "https://raw.githubusercontent.com/camunda-community-hub/camunda-8-connector-involvedusers/28f52916bf50087c72142605c0aaeec453cb10d4/element-templates/involveduser-function.json"
    name: "Involved users Outbound Template"
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-involvedusers"
links: 
  docs: "https://github.com/camunda-community-hub/camunda-8-connector-involvedusers/blob/28f52916bf50087c72142605c0aaeec453cb10d4/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-10-28"
---

*Find the right people for every user task*

Find everyone involved in a process instance's active user tasks, from assignees to candidate users and candidate group members, so you can notify the right people. Add or exclude specific users and groups as needed, and keep working on OIDC-secured clusters.

## Features

### Smart user resolution across every task shape

Automatically resolves the right people for each active user task: the assignee when one is set, or the deduplicated list of candidate users and every member of candidate groups when it isn't. You don't need manual branching logic in your BPMN, because one connector call adapts to whichever assignment pattern the task actually uses.

### Fine-grained include/exclude control

Layer includeUsers, excludeUsers, includeGroups, and excludeGroups on top of the task's own assignment data to always pull in specific people or groups, or keep them out, regardless of what the task itself defines. Explicit exclusions always win, so you can safely guarantee certain users are never notified even if they're a candidate.

### Resilient in OIDC-secured and SaaS environments

When a cluster's identity is managed by an external OIDC provider and Camunda's native Users API is disabled, the connector doesn't fail. It falls back to a "shadow user" built from the raw user ID (recognizing email-style usernames automatically), so downstream steps like notifications keep working without extra configuration.
