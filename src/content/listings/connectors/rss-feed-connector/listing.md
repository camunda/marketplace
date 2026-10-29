---
id: 643614
name: "RSS Feed Connector"
creatorType: "community"
creatorName: "Camunda / Aleksander Dytko"
creatorUrl: "https://github.com/aleksander-dytko"
categories: 
  - "External Data Services"
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
availability: "open-source"
description: "Fetch and parse RSS and Atom feeds"
seoDescription: "Integrate RSS/Atom feeds into Camunda-based business processes. Fetch news, blog posts, or any RSS content directly into processes with powerful filtering and processing capabilities."
templates: 
  - url: "https://raw.githubusercontent.com/aleksander-dytko/RSS-Feed-Connector/refs/heads/main/element-templates/rss-feed-connector.json"
    name: "RSS Feed Connector Outbound Template"
smTemplate: "https://github.com/aleksander-dytko/RSS-Feed-Connector"
links: 
  docs: "https://github.com/aleksander-dytko/RSS-Feed-Connector/blob/main/README.md"
  support: "https://forum.camunda.io/"
lastModified: "2026-04-24"
---

Integrate RSS/Atom feeds into Camunda-based business processes. Fetch news, blog posts, or any RSS content directly into processes with powerful filtering and processing capabilities.

## Features

### Multi-format feed support

Automatically detects and parses both RSS 2.0 and Atom feed formats, ensuring compatibility with virtually any feed source without manual configuration.

### Smart date filtering

Filter feed items by publication date using flexible date range parameters (fromDate/toDate) with support for ISO 8601 format and FEEL expressions such as today() and now().

### Rich metadata extraction

Extracts comprehensive information from each feed item including title, link, description, author, categories, publication date, and unique identifiers (GUID) for downstream processing.

### Configurable item limits

Control the number of items returned (1-500) with automatic sorting by publication date (newest first), enabling both quick checks and comprehensive feed processing.

### Built-in error handling

Robust timeout protection (10s connection, 30s request) and specific error codes (FETCH_ERROR, PARSE_ERROR, INVALID_URL) make troubleshooting straightforward and processes more reliable.

### Feed metadata access

Provides access to feed-level information including feed title, description, website link, and last build date, enabling intelligent feed source management and monitoring.
