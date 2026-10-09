---
id: 581069
slug: "eclipse-mosquitto-connector"
name: "Eclipse Mosquitto Connector"
type: 
  - "connector"
creatorType: "community"
creatorName: "Charan Teja Choppavarapu"
creatorUrl: "https://www.linkedin.com/in/charanteja-choppavarapu/"
categories: 
  - "Technical Protocols"
industries: []
useCases: []
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
compatibleVersions: 
  - "8.7"
  - "8.8"
availability: "open-source"
description: "Streamline MQTT messaging in Camunda processes"
tagline: "Streamline MQTT messaging in Camunda processes"
templates: 
  - id: null
    name: "Eclipse Mosquitto Connector"
    url: "https://raw.githubusercontent.com/charanteja469/Camunda-MQTT-Custom-Outbound-Connector/refs/heads/master/element-templates/Eclipse%20Mosquitto%20Outbound%20Connector.json"
saasTemplate: null
smTemplate: "https://github.com/charanteja469/Camunda-MQTT-Custom-Outbound-Connector"
githubRepo: "https://github.com/charanteja469/Camunda-MQTT-Custom-Outbound-Connector"
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
lastModified: "2025-08-04"
---

Eclipse Mosquitto is a small, open-source MQTT broker designed for fast and efficient messaging between devices and applications. It is ideal for IoT scenarios requiring real-time, topic-based communication. Easy to deploy and use, Mosquitto supports persistence, security, and cross-platform operation

## Features

### Asynchronous messaging

Enables decoupled execution in Camunda processes by publishing messages to MQTT topics asynchronously, preventing process delays while waiting for message handling.

### Seamless Eclipse Mosquitto integration

Directly connects Camunda-based business processes to Eclipse Mosquitto, providing a simple bridge for process-driven interactions with MQTT-enabled systems and devices.

### Customizable via BPMN

Allows developers to configure MQTT broker details, message payloads, QoS, and topics directly within BPMN process diagrams, giving granular, visual control within Camunda Modeler.

### Leverages MQTT and Mosquitto capabilities

Utilizes MQTT’s lightweight, publish/subscribe reliability and Mosquitto’s message persistence and offline support—ensuring robust, real-time communication and reliable delivery between Camunda and IoT or messaging environments.
