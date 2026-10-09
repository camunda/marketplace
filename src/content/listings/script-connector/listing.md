---
id: 810748
slug: "script-connector"
name: "Script Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Jonathan Lukas"
creatorUrl: "https://github.com/jonathanlukas"
categories: 
  - "Technical Protocols"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
compatibleVersions: 
  - "8.6"
  - "8.7"
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Execute scripts within your processes"
tagline: "Execute any script from your Camunda processes"
templates: 
  - id: null
    name: "Script Connector Outbound Template"
    url: "https://raw.githubusercontent.com/camunda-community-hub/script-connector/refs/heads/main/connector/element-templates/script-connector.json"
saasTemplate: null
smTemplate: "https://github.com/camunda-community-hub/script-connector"
githubRepo: null
docsUrl: "https://github.com/camunda-community-hub/script-connector/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: 
  - "screenshot-1.png"
  - "screenshot-2.png"
  - "screenshot-3.png"
resources: []
supportUrl: "https://github.com/camunda-community-hub/script-connector/issues/new"
referUrl: null
lastModified: "2026-05-12"
---

The Script Connector lets you call any scripting language directly from a Camunda process. It ships with built-in support for JavaScript, Kotlin, Groovy, and Mustache, plus an extensible framework for registering custom scripting engines via SPI.

## Features

### Execute embedded and resource scripts

Define scripts directly in the properties panel as embedded content, or specify a resource path and the connector will execute the script from there.

### Use any JSR-223 compliant scripting engine

Plug in any JSR-223 compliant scripting engine as-is, without additional configuration.

### Get started with pre-bundled scripting languages

The connector ships with JavaScript, Kotlin, Groovy, and Mustache support out of the box.

### Register arbitrary scripting engines

Bridge execution to any scripting language by implementing an interface and registering it via SPI.
