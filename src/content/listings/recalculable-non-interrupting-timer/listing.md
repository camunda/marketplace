---
id: 442138
slug: "recalculable-non-interrupting-timer"
name: "Recalculable Non-Interrupting Timer"
type: 
  - "blueprint"
creatorType: "partner"
creatorName: "brix IT solutions"
creatorUrl: "https://www.brix.ch/"
categories: 
  - "Patterns"
industries: []
useCases: []
resourceTypes: []
bpmnTypes: []
runtimes: []
connectorTypes: []
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
availability: null
description: "More flexible timers for processes"
tagline: "Increase the flexibility of timers that are triggered repeatedly"
templates: 
  - id: null
    name: "Recalculable Non-Interrupting Timer Pattern Blueprint"
    url: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/refs/heads/master/recalculable-non-interrupting-boundary-timer-pattern/recalculable-non-interrupting-boundary-timer.bpmn"
saasTemplate: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/recalculable-non-interrupting-boundary-timer-pattern/recalculable-non-interrupting-boundary-timer.bpmn"
smTemplate: "https://github.com/brix-ag/bpmn-design-patterns/tree/master/recalculable-non-interrupting-boundary-timer-pattern"
githubRepo: null
docsUrl: null
previewImage: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/recalculable-non-interrupting-boundary-timer-pattern/recalculable-non-interrupting-boundary-timer.bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://www.brix.ch/en/about-us/contact"
referUrl: null
lastModified: "2025-02-13"
---

Separate a non-interrupting boundary timer from its task or subprocess and recalculate the next trigger time based on variables.

## Features

### Separate Timers from Tasks

You can use the technique shown to separate a non-interrupting boundary timer from its task or subprocess for other use cases.

### Visualize Recalculation

Visualize the recalculation loop clearly in the process.
