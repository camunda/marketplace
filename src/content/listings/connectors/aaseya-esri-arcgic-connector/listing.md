---
id: 449178
name: "Aaseya ESRI ArcGIC Connector"
creatorType: "partner"
creatorName: "Aaseya IT Services"
creatorUrl: "https://aaseya.com/"
categories: 
  - "External Data Services"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "inbound"
compatibleVersions: 
  - "8.4"
availability: "open-source"
description: "Orchestrate GIS location services"
links: 
  github: "https://github.com/SayaliJadhav44/Aaseya-Esri-Connector"
  docs: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
  support: "https://forum.camunda.io/"
lastModified: "2024-08-14"
---

*Aaseya ESRI ArcGIC Connector*

Leverage geographic data in your business processes to make data-driven decisions.

## Features

### Get Location Details

Retrieve the coordinates (latitudes and longitudes) based on the place ID selected.

### Search by Nearby Places

Search for businesses and geographic locations around the world, so you can locate and discover detailed information about each place.

### Retrieve Place Details

Place details are the attributes associated with a place such as its name, street address, phone number, and so on. You can use these details to retrieve data about a location and use that data in your process. To retrieve place details, use a valid place ID. Then, define a list of the fields you would like with the requestedFields parameter. For example, requestedFields: ["name", "categoryId", "address:streetAddress"] or requestedFields: all.
