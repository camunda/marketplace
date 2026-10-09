---
id: 820092
name: "GCP Document AI Connector"
creatorType: "partner"
creatorName: "HCLTech"
creatorUrl: "https://hcltech.com"
categories: 
  - "External Data Services"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.8"
  - "8.9"
availability: "listing-only"
description: "Extract data from documents and images"
links: 
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2026-06-09"
---

*Extract structured data from documents and images using Google Cloud*

Integrate Google Cloud Document AI into Camunda processes to extract structured data from PDFs and images. The connector handles OCR, entity extraction, and table parsing with secure OAuth 2.0 authentication via Google Cloud service accounts.

## Features

### Process PDFs and images in business processes

Submit PDF documents and image files such as PNG and JPEG to Google Cloud Document AI processors directly from a Camunda service task. Files are passed in Base64 format and results are returned as structured process variables.

### Extract text, entities, and tables automatically

Receive structured extraction results from Document AI including OCR text, named entities, table data, and confidence scores. Use extracted values in downstream process steps without manual parsing.

### Authenticate securely with Google Cloud

Generate access tokens automatically from Google Cloud service account credentials using OAuth 2.0. API requests to Document AI are authenticated at runtime without storing static credentials in the process.

### Run asynchronously with Camunda job workers

Designed for non-blocking, scalable execution using the Camunda job worker pattern. Supports configurable retry logic so document processing tasks recover automatically from transient failures.
