---
id: 439437
apiAnyIndustry: true
name: "Updatable Boundary Timer Pattern"
creatorType: "partner"
creatorName: "brix IT solutions"
creatorUrl: "https://www.brix.ch/en/"
categories: 
  - "Patterns"
useCases: 
  - "Human Task orchestration"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
description: "Update boundary timers based on variables"
templates: 
  - url: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-boundary-timer-pattern/updatable-boundary-timer-pattern.bpmn"
    name: "Updatable Boundary Timer Pattern Blueprint"
smTemplate: "https://github.com/brix-ag/bpmn-design-patterns/tree/master/updatable-boundary-timer-pattern"
links: 
  preview: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/updatable-boundary-timer-pattern/updatable-boundary-timer-pattern.bpmn"
  support: "https://www.brix.ch/en/about-us/contact"
lastModified: "2024-05-31"
---

*Separate boundary timers from tasks for increased flexibility*

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
