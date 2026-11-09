---
id: 442138
apiAnyIndustry: true
name: "Recalculable Non-Interrupting Timer"
creatorType: "partner"
creatorName: "brix IT solutions"
creatorUrl: "https://www.brix.ch/"
categories: 
  - "Patterns"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
description: "More flexible timers for processes"
templates: 
  - url: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/refs/heads/master/recalculable-non-interrupting-boundary-timer-pattern/recalculable-non-interrupting-boundary-timer.bpmn"
    name: "Recalculable Non-Interrupting Timer Pattern Blueprint"
saasTemplate: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/recalculable-non-interrupting-boundary-timer-pattern/recalculable-non-interrupting-boundary-timer.bpmn"
smTemplate: "https://github.com/brix-ag/bpmn-design-patterns/tree/master/recalculable-non-interrupting-boundary-timer-pattern"
links: 
  preview: "https://raw.githubusercontent.com/brix-ag/bpmn-design-patterns/master/recalculable-non-interrupting-boundary-timer-pattern/recalculable-non-interrupting-boundary-timer.bpmn"
  support: "https://www.brix.ch/en/about-us/contact"
lastModified: "2025-02-13"
---

*Increase the flexibility of timers that are triggered repeatedly*

Separate a non-interrupting boundary timer from its task or subprocess and recalculate the next trigger time based on variables.

## Features

### Separate Timers from Tasks

You can use the technique shown to separate a non-interrupting boundary timer from its task or subprocess for other use cases.

### Visualize Recalculation

Visualize the recalculation loop clearly in the process.
