---
id: 418737
name: "EasyPost Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"
categories: 
  - "External Data Services"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "bundle"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.2"
  - "8.3"
  - "8.4"
availability: "open-source"
description: "Automate shipping operations with Camunda"
templates: 
  - url: "https://marketplace.cloud.camunda.io/api/v1/ootb-connectors/io.camunda.connectors.EasyPost.v1/latest/easy-post-connector.json"
    name: "Easy Post Outbound"
smTemplate: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/easy-post/element-templates/easy-post-connector.json"
links: 
  website: "https://camunda.com"
lastModified: "2025-09-08"
---

*Orchestrate Shipping and Logistics with Camunda and EasyPost*

Bring EasyPost shipping and logistics services into Camunda processes. Ideal for automated shipping workflows, address verification, and real-time tracking.

## Features

### Create an Address

Allow a Camunda process to create new shipping addresses within EasyPost. This feature is perfect for initiating shipments based on process events to implement use cases such as customer and employee onboarding.

### Create a Parcel

Use Camunda to define new parcel specifications in EasyPost, enabling automated parcel creation based on inventory, order status, and other business triggers.

### Create a Shipment

Coordinate the shipping process by creating new shipments within EasyPost directly from Camunda-based processes. This feature is ideal for order fulfillment, returns management, and other logistics needs.

### Buy a Shipment

Automate the purchase of shipping labels via EasyPost, integrating cost calculations and shipping options directly into your Camunda-based processes.

### Verify a Created Address

Validate newly created or existing addresses within EasyPost, ensuring that the shipping process is initiated with accurate information.

### Retrieve a Tracker by ID

Get real-time shipping status by retrieving tracking information from EasyPost. Use this data to update workflows, notify customers, or make logistical adjustments.
