---
id: 500371
name: "Camunda SAP OData Connector"
creatorType: "camunda"
creatorName: "Camunda"
creatorUrl: "https://camunda.com"
categories: 
  - "Enterprise Applications"
resourceTypes: 
  - "Connector Template"
bpmnTypes: 
  - "bpmn:Task"
runtimes: 
  - "self-hosted"
connectorTypes: 
  - "outbound"
compatibleVersions: 
  - "8.6"
  - "8.7"
availability: "open-source"
description: "Connect to SAP using OData"
templates: 
  - url: "https://raw.githubusercontent.com/camunda/sap-connectors/refs/heads/main/odata-connector/element-templates/sap-odata-connector.json"
    name: "OData"
smTemplate: "https://github.com/camunda/sap-connectors/tree/main/odata-connector"
links: 
  github: "https://github.com/camunda/sap-connectors/tree/main/odata-connector"
  docs: "https://docs.camunda.io/docs/components/camunda-integrations/sap/sap-integration/"
  support: "https://forum.camunda.io/"
lastModified: "2025-11-14"
---

*Orchestrate SAP tasks and data with the Camunda OData V2 and V4 connector*

Integrate SAP into business processes using OData v2 and V4. This connector complies with SAP's Clean Core strategy, ensuring it's future-proof.

## Features

### Integrate with SAP applications using OData

Execute outbound OData v2 and V4 calls, facilitating task execution and data integration between Camunda-powered processes and SAP systems.

### Efficient interactions via batch requests

Use OData batch requests to implement complex API interactions efficiently.

### Enable secure communications with SAP

Use basic authentication to enable Camunda-based processes to interact with SAP systems.

### Leverage advanced features

Configure advanced OData parameters such as $filter and $select.

### Handle errors with process logic

Use process variables to capture errors returned by OData calls, enabling teams to use the BPMN process modeling standard to handle business-relevant errors; for example, by designing backup flows.
