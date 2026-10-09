---
id: 422705
name: "Sharepoint Connector"
creatorType: "partner"
creatorName: "BP3 Global"
creatorUrl: "https://bp-3.com/camunda"
categories: 
  - "Enterprise Applications"
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
  - "8.5"
availability: "open-source"
description: "Manage Sharepoint documents from Camunda"
templates: 
  - url: "https://raw.githubusercontent.com/BP3/sharepoint-connector/main/element-templates/sharepoint-onedrive-connector-template.json"
    name: "Sharepoint Connector outbound"
smTemplate: "https://github.com/BP3/sharepoint-connector/tree/main"
links: 
  support: "https://support.bp-3.com/"
lastModified: "2024-04-08"
---

## Features

### Create Folder

Create a new folder or DriveItem in a Drive with a specified parent item or path.

### List Children

Return a collection of DriveItems in the children relationship of a DriveItem.
DriveItems with a non-null folder or package facet can have one or more child DriveItems.

### CheckIn File

Check in a checked out driveItem resource, which makes the version of the document available to others.

### CheckOut File

Check out a driveItem resource to prevent others from editing the document, and prevent your changes from being visible until the documented is checked in.

### Copy File

Creates a copy of an driveItem (including any children), under a new parent item or with a new name.

### Move File

Move a DriveItem to a new parent item

### Update File

Update the metadata for a driveItem by ID or path.

### Delete File

Delete a DriveItem by using its ID or path. Deleting items using this method moves the items to the recycle bin instead of permanently deleting the item.

### Search

Search the hierarchy of items for items matching a query. You can search within a folder hierarchy, a whole drive, or files shared with the current user.
