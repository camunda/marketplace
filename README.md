# Camunda Marketplace

Statically generated replacement for the AppDirect-based marketplace. GitHub is the source of truth.

## Repository layout

| Path | Purpose |
|---|---|
| `appdirect-export/` | Raw snapshot of the AppDirect API (seed for the migration). |
| `scripts/extract.mjs` | Converts the AppDirect export into content files and downloads the images. |
| `src/content/listings/<slug>/` | One directory per listing: `listing.yaml` plus its images. This is the source of truth. |
| `src/pages/` | Site pages (home, browse, listing detail). |
| `src/pages/api/v1/` | Static JSON endpoints. They keep the `camunda/marketplace-api` contract so Camunda Hub and Web Modeler work without changes. |

## Common tasks

```sh
npm install
npm run extract   # re-import AppDirect data -> src/content/listings + images
npm run dev       # local development server
npm run build     # static site -> dist/
npm run preview   # serve the built site locally
```

## Edit a listing

Edit `listing.yaml` in the listing's directory and open a pull request. Images (icon, screenshots)
live in the same directory and are referenced by file name. The schema is defined in
`src/content.config.ts` and is checked at build time. A malformed file fails the build.

## Add a listing

Copy the directory of an existing listing, adjust `listing.yaml` and the images, and open a pull
request. The `id` field is the original AppDirect product id. Reuse it for existing listings so old
URLs can be redirected. For new listings, use the next free id.

## Listing file format

Each listing is a directory in `src/content/listings/<slug>/` with a `listing.md` file
(frontmatter metadata + markdown body) and its images. Example:

```markdown
---
id: 418963                    # AppDirect product id, keep stable
slug: "salesforce-connector"  # URL: /listings/salesforce-connector/
name: "Salesforce Connector"
type: ["connector"]           # connector | blueprint | solution
creatorType: "camunda"        # camunda | partner | community
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"

# Filter facets (all optional, empty list = not filtered)
categories: ["Enterprise Applications"]
industries: []
useCases: []
resourceTypes: []             # BPMN, DMN, Form, Connector Template
bpmnTypes: ["bpmn:Task"]
runtimes: ["bundle"]          # bundle | self-hosted
connectorTypes: ["outbound"]  # inbound | outbound
compatibleVersions: ["8.2", "8.3", "8.4"]
availability: "open-source"   # open-source | listing-only | coming-soon

description: "Seamless Salesforce operations from Camunda"
tagline: "Streamline Your Business Processes with Salesforce Integration"

# Action buttons on the detail page (all optional)
templates:
  - id: "io.camunda.connectors.Salesforce.v1"
    name: "Salesforce Outbound"
    url: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/salesforce/element-templates/salesforce-connector.json"
saasTemplate: null            # single SaaS template URL, if not covered by templates
smTemplate: null              # Self-Managed template/repo URL
githubRepo: null
docsUrl: null
previewImage: null
demoRequestUrl: null
demoVideo: { provider: "youtube", id: "abc123", url: "https://youtu.be/abc123" }

# Media: file names in this directory, served at /listings/<slug>/assets/
icon: "icon.png"
heroImage: "hero.png"
screenshots: []

# Links
resources: []
supportUrl: null
referUrl: null
lastModified: "2025-09-06"
---

Free-text description in Markdown. This is the main content of the detail page.

## Features

### Execute SOQL Query

Fetch records from Salesforce and use them in your process.
```

The schema in `src/content.config.ts` validates every field at build time.

## Notes for the cutover

- The API endpoints are emitted as `*.json` files. Configure the CDN or web server to serve them
  extensionless (`/api/v1/connectors` -> `/api/v1/connectors.json`).
- Old AppDirect URLs (`/en-US/apps/<id>/<slug>`) need redirect rules to `/listings/<slug>/`.
- The submission flow (Tasklist forms), lead forms (HubSpot) and the idea portal (ProductHub) are
  external services. Link them from the site; they do not change.
