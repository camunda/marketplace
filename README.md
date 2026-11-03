# Camunda Marketplace

Statically generated replacement for the AppDirect-based marketplace. GitHub is the source of truth.

## Repository layout

| Path | Purpose |
|---|---|
| `appdirect-export/` | Raw snapshot of the AppDirect API (seed for the migration). |
| `scripts/extract.mjs` | Converts the AppDirect export into content files and downloads the images. |
| `scripts/build-listing.py` | Builds a listing's `listing.md` from a submission payload. Used by the submission workflow. |
| `src/content/listings/<type>s/<slug>/` | One directory per listing: `listing.md` plus its images. This is the source of truth. |
| `src/pages/` | Site pages (home, browse, listing detail). |
| `src/pages/api/v1/` | Static JSON endpoints. They keep the `camunda/marketplace-api` contract so Camunda Hub and Web Modeler work without changes. |

## Common tasks

```sh
npm install
npm run fetch-export  # pull a fresh AppDirect snapshot -> appdirect-export/
npm run extract   # re-import AppDirect data -> src/content/listings + images
npm run dev       # local development server
npm run build     # static site -> dist/
npm run preview   # serve the built site locally
```

## Edit a listing

Edit `listing.md` in the listing's directory and open a pull request. Images live in the same
directory: `icon.png` is the icon, `gallery-*.png` the image gallery. The schema is defined in
`src/content.config.ts` and is checked at build time. A malformed file fails the build.

## Add a listing

Copy the directory of an existing listing, adjust `listing.md` and the images, and open a pull
request. Put the directory under `connectors/`, `blueprints/` or `solutions/`. The `id` field is
the original AppDirect product id. Reuse it for existing listings so old URLs can be redirected.
For new listings, use the next free id.

## Listing file format

Each listing is a directory `src/content/listings/<type>s/<slug>/` with a `listing.md`
(frontmatter metadata + markdown body) and its media files. The directory path carries the
type (`connectors/`, `blueprints/`, `solutions/`) and the slug. Media follows a naming
convention: `icon.png` for the icon, `gallery-1.png`, `gallery-2.png`, ... for the image
gallery. Example:

```markdown
---
id: 418963                    # AppDirect product id, keep stable
name: "Salesforce Connector"
legacySlug: "salesforce"      # old AppDirect URL slug, only when different from the directory slug
creatorType: "camunda"        # camunda | partner | community
creatorName: "Camunda"
creatorUrl: "https://camunda.com/"

# Filter facets (all optional, omit when empty)
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

# Action buttons on the detail page (all optional)
templates:
  - url: "https://raw.githubusercontent.com/camunda/connectors/main/connectors/salesforce/element-templates/salesforce-connector.json"
    id: "io.camunda.connectors.Salesforce.v1"
saasTemplate: null            # only when different from the templates
smTemplate: null              # Self-Managed template/repo URL
video: "https://youtu.be/abc123"  # YouTube or Vimeo URL

links:                        # only set keys appear
  github: "https://github.com/camunda/connectors"
  docs: "https://docs.camunda.io/..."
  support: "https://..."

lastModified: "2025-09-06"
---

*Optional tagline as a lead paragraph.*

Free-text description in Markdown. This is the main content of the detail page.

## Features

### Execute SOQL Query

Fetch records from Salesforce and use them in your process.
```

Only `id`, `name` and `description` are required; every other field is omitted when empty.
A listing that belongs to more than one type adds an explicit `type: [...]` field.
The schema in `src/content.config.ts` validates every field at build time.

## Deployment

Two GitHub Actions workflows deploy the site:

- **deploy-pages.yml** — every push to `main` builds and publishes `dist/` to the `gh-pages`
  branch (root of the Pages site).
- **pr-preview.yml** — every pull request gets a preview at
  `<pages-url>/pr-preview/pr-<number>/` with a comment on the PR. Internal links are
  base-path-aware (`src/lib/url.ts`), so previews work in a subdirectory.

One-time setup: in the repository settings, set Pages to "Deploy from a branch", branch
`gh-pages`, folder `/`. The branch is created by the first `main` deployment.

## Notes for the cutover

- The API endpoints are emitted as `*.json` files. The CDN must serve them extensionless
  (`/api/v1/connectors` -> `/api/v1/connectors.json`) and with content type `application/json`.
  GitHub Pages alone cannot do this; it is handled at the CDN level.
- Old AppDirect URLs (`/en-US/apps/<id>/<slug>`) need redirect rules to `/listings/<slug>/`.
- The submission flow (Tasklist forms), lead forms (HubSpot) and the idea portal (ProductHub) are
  external services. Link them from the site; they do not change.
