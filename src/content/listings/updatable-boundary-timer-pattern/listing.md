---
id: 439437
slug: "updatable-boundary-timer-pattern"
name: "Updatable Boundary Timer Pattern"
type: 
  - "blueprint"
creatorType: "partner"
creatorName: "brix IT solutions"
creatorUrl: "https://www.brix.ch/en/"
categories: 
  - "Patterns"
industries: []
useCases: 
  - "Human Task orchestration"
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
description: "Update boundary timers based on variables"
tagline: "Separate boundary timers from tasks for increased flexibility"
templates: 
  - id: null
    name: "Updatable Boundary Timer Pattern Blueprint"
    url: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-boundary-timer-pattern/updatable-boundary-timer-pattern.bpmn"
saasTemplate: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-boundary-timer-pattern/updatable-boundary-timer-pattern.bpmn"
smTemplate: "https://github.com/brix-ag/bpmn-design-patterns/tree/master/updatable-boundary-timer-pattern"
githubRepo: null
docsUrl: null
previewImage: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-boundary-timer-pattern/updatable-boundary-timer-pattern.bpmn"
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://www.brix.ch/en/about-us/contact"
referUrl: null
lastModified: "2024-05-31"
---

Allow BPMN process designers to update boundary timers in tasks or subprocesses.

## Features

### Timer Updatable

Replace the task or subprocess and boundary timer with this blueprint (design pattern) to make the timer updatable.

### Visualization

Process designers can easily visualize the possibility of timer updates in the process model.

### Scoping

The update of the variables for specific process instances through messages is only possible while the task or subprocess is active.

### Separation

The technique shown to separate the boundary timer from its task or subprocess can be useful for other use cases.
