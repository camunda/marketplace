---
id: 808029
apiAnyIndustry: true
name: "KADAI Enterprise Task Management"
type: 
  - "solution"
  - "blueprint"
creatorType: "partner"
creatorName: "envite consulting GmbH"
creatorUrl: "https://envite.de/green-bpm"
categories: 
  - "Solution Accelerators"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "listing-only"
description: "Consolidate and manage tasks across systems"
seoDescription: "KADAI is an open-source Java library that consolidates tasks from Camunda 8, Camunda 7, and other systems into a single enterprise-grade tasklist. It provides dynamic prioritization, workbasket-based routing, fine-grained access control, and real-time monitoring for large-scale task management operations."
links: 
  demo: "https://envite.de/green-bpm"
  support: "https://github.com/kadai-io/kadai/issues"
lastModified: "2026-05-05"
---

KADAI is an open-source Java library that consolidates tasks from Camunda 8, Camunda 7, and other systems into a single enterprise-grade tasklist. It provides dynamic prioritization, workbasket-based routing, fine-grained access control, and real-time monitoring for large-scale task management operations.

## Features

### Consolidate tasks from multiple systems into one tasklist

KADAI’s goal is to provide a unified tasklist where all of a company’s tasks from all systems can be consolidated, controlled, and managed. Tasks are synchronized bidirectionally with the connected systems containing user tasks via KADAI’s own adapters. There is a flexible and extensible adapter architecture that allows for the integration of various systems. Camunda 8 and Camunda 7 are supported out-of-the-box.

### Control task distribution with configurable workbaskets

Workbaskets can be configured with routing rules, distribution logic, and granular permissions so different teams' task inventories remain clearly separated. Sensitive areas such as VIP customer or HR cases can be restricted accordingly. KADAI includes standard routing procedures out of the box and supports full customization to meet virtually any operational requirement, including active assignment to support call center-style implementations.

### Prioritize tasks dynamically based on what matters most

KADAI includes standard prioritization by task and document type, with support for custom priority calculations based on any task attribute. Dynamic reprioritization periodically recalculates priorities across the task inventory so urgent work always surfaces to the right person at the right time.

### Stay informed with real-time monitoring

The monitoring section provides live overviews of current work status across all workbaskets, which can also feed directly into routing and distribution decisions. Configurable reports can be organized by a range of criteria to support operational review and capacity planning.

### Customize KADAI to match your needs

The solution has been designed from the beginning to be adaptable and extensible. On the one hand, this applies to the business logic, which can be tailored to individual needs through various configuration options and, in particular, through implementable Service Provider Interfaces (SPIs). On the other hand, KADAI is designed so that it can be integrated as a technical artifact into various runtime environments. This approach allows KADAI to be managed, deployed, and monitored just as one of your individual software components. One specific advantage is the easy and seamless integration into various security infrastructures.
