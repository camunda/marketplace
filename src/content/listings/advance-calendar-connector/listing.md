---
id: 808470
slug: "advance-calendar-connector"
name: "Advance Calendar Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Camunda / Pierre-Yves Monnet"
creatorUrl: "http://www.camunda.com"
categories: 
  - "Data & Analytics"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "open-source"
description: "Calculate SLA deadlines across business calendars"
tagline: "Calculate calendar date for SLA, taking into account custom calendar and holidays"
templates: []
saasTemplate: null
smTemplate: "https://github.com/camunda-community-hub/camunda-8-connector-calendaradvance"
githubRepo: null
docsUrl: "https://github.com/camunda-community-hub/camunda-8-connector-calendaradvance/blob/main/README.md"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2026-05-06"
---

The Advance Calendar Connector calculates a target date by advancing or moving backward from a starting date by a specified duration in hours or days, taking into account business hours, public holidays by country, and time zone differences. Use it to calculate SLA deadlines that respect the actual working hours of your team rather than raw calendar time.

## Features

### Advance or rewind dates by hours within business hours

Given a start date and time, a duration in hours, and a business calendar with open and closed periods, the connector calculates the resulting date and time — skipping hours outside of business hours. For example: starting 2026-01-16 at 15:34, advancing 6 hours on a 09:00–12:00 / 14:00–18:00 calendar yields 2026-01-20 at 12:34.

### Advance or rewind dates by business days, skipping holidays

Given a start date, a duration in days, and a business calendar, the connector calculates the resulting date by counting only working days and skipping public holidays. For example: starting 2026-07-15 and moving back 4 business days on a standard calendar yields 2026-07-08.

### Advance dates by calendar days or months without business-day rules

For simple calendar-based calculations that don't require business-hour rules, the connector can advance or rewind a date by a given number of calendar days or months. For example: moving back 4 months from 2026-07-02 yields 2026-03-02.

### Handle time zone differences between requesters and handling teams

When the requesting user and the handling office are in different time zones, the connector calculates the correct SLA deadline in both. For example: a back office in Los Angeles operates 09:00–18:00 PT. A request arrives in New York at 09:15 ET. With a 4-hour SLA measured against Los Angeles open hours, the connector returns 14:00 ET as the deadline for the New York requester.
