---
id: 449178
slug: "aaseya-esri-arcgic-connector"
name: "Aaseya ESRI ArcGIC Connector"
type: 
  - "connector"
creatorType: "partner"
creatorName: "Aaseya IT Services"
creatorUrl: "https://aaseya.com/"
categories: 
  - "External Data Services"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.4"
availability: "open-source"
description: "Orchestrate GIS location services"
tagline: "Aaseya ESRI ArcGIC Connector"
templates: []
saasTemplate: null
smTemplate: null
githubRepo: "https://github.com/SayaliJadhav44/Aaseya-Esri-Connector"
docsUrl: "https://docs.camunda.io/docs/guides/host-custom-connectors/"
previewImage: null
demoRequestUrl: null
demoVideo: null
icon: "icon.png"
heroImage: "hero.png"
screenshots: []
resources: []
supportUrl: "https://forum.camunda.io/"
referUrl: null
lastModified: "2024-08-14"
---

Leverage geographic data in your business processes to make data-driven decisions.

## Features

### Get Location Details

Retrieve the coordinates (latitudes and longitudes) based on the place ID selected.

### Search by Nearby Places

Search for businesses and geographic locations around the world, so you can locate and discover detailed information about each place.

### Retrieve Place Details

Place details are the attributes associated with a place such as its name, street address, phone number, and so on. You can use these details to retrieve data about a location and use that data in your process. To retrieve place details, use a valid place ID. Then, define a list of the fields you would like with the requestedFields parameter. For example, requestedFields: ["name", "categoryId", "address:streetAddress"] or requestedFields: all.
