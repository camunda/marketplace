---
id: 822035
name: "Excel Connector"
creatorType: "community"
creatorName: "Camunda / Jelte Jansons"
creatorUrl: "https://github.com/jeltechnologies"
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
description: "Read Excel data in Camunda"
seoDescription: "Read and extract Excel data directly in your BPMN processes. The Camunda Excel connector supports file access via Document Reference and URL, with five flexible operations including range, sheet, cell address, and coordinate lookups."
templates: 
  - url: "https://raw.githubusercontent.com/jeltechnologies/camunda-excel-connector/refs/heads/master/docs/excel-connector.json"
    name: "Excel Connector Outbound Template"
links: 
  docs: "https://github.com/jeltechnologies/camunda-excel-connector"
  support: "https://forum.camunda.io/"
lastModified: "2026-06-22"
---

Read and extract Excel data directly in your BPMN processes. The Camunda Excel connector supports file access via Document Reference and URL, with five flexible operations including range, sheet, cell address, and coordinate lookups.

## Features

### Choose from five read operations

Extract a named range as a list of objects, pull an entire sheet, look up a single cell by address or coordinates, or retrieve the full file contents.

### Target any worksheet by name

Target any worksheet by name, or let the connector default to the first sheet — no changes needed to your process model when sheet names are predictable.

### Control how empty cells appear in output

Control how blank cells and empty rows appear in output: return them as null, as empty strings, or exclude them entirely — keeping downstream logic clean without extra mapping steps.

### Convert cell values automatically

Cell values are converted automatically: integers, decimals, booleans, dates (as ISO 8601 strings), and formula results all map to the correct JSON types — no manual parsing required.

### Map results directly to process variables

Feed results straight into your BPMN flow via a named result variable or a FEEL expression, making spreadsheet data immediately available to downstream tasks and gateways.

### Load Excel files from multiple sources

Load Excel files via a Camunda Document Reference to handle files uploaded directly to a running process (such as email attachments) or from a public URL for quick testing.
