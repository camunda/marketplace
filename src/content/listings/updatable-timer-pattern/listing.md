---
id: 439438
slug: "updatable-timer-pattern"
name: "Updatable Timer Pattern"
type: 
  - "blueprint"
creatorType: "partner"
creatorName: "brix IT solutions"
creatorUrl: "https://www.brix.ch/en/"
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
availability: "open-source"
description: "Enable updating timers based on variables"
tagline: "Allow variable updates to affect timers"
templates: 
  - id: null
    name: "Updatable Timer Pattern Blueprint"
    url: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-timer-pattern/updatable-timer-pattern.bpmn"
saasTemplate: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-timer-pattern/updatable-timer-pattern.bpmn"
smTemplate: "https://github.com/brix-ag/bpmn-design-patterns/tree/master/updatable-timer-pattern"
githubRepo: null
docsUrl: null
previewImage: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-timer-pattern/updatable-timer-pattern.bpmn"
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

Allow BPMN process designers to update timers in tasks or subprocesses.

## Features

### Updatable Timer

The blueprint uses an event-based gateway and message event to update the variables that the timer uses. The timer will be reevaluated after each message. This approach makes the timer updatable.

### Visualization

Process designers can easily visualize the possibility of timer updates in the process model.

### Scoping

Note that updating the variables for a specific process instance is only possible when the process is waiting at the event-based gateway.
