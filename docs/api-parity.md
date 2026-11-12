# API parity report: static site vs. live marketplace-api

Date: 2026-11-03 (re-measured after the export refresh in #6)
Branch under test: `feat/api-full-listings` (this PR)
Reference: `https://marketplace.cloud.camunda.io` (Java service, AppDirect-backed)
Candidate: `marketplace-api` branch `nginx-api-replacement` (nginx + njs
container, image `marketplace-api:test`) with `SITE_ORIGIN` pointing at a
static build of this branch.

Method: 90-case request matrix executed against both APIs. Status codes and
JSON bodies compared field by field.

## What this PR fixes

- New endpoints `api/v1/connectors-full.json` and
  `api/v1/blueprints-full.json`. The nginx filter (`njs/filter.js`) needs
  them for all requests that have query parameters. Without them every
  filtered request and every search returned 404. The blueprint feed
  includes fileless listings (`availability: listing-only` /
  `coming-soon`) with `hasSourceFiles`, so the filter can apply the default
  exclusion and the `includeFilelessBlueprints` opt-in.
- Fileless blueprints are part of the API again. 31 listings that the live
  API serves under `/api/v1/blueprints` (AppDirect product line "Process
  Blueprints") are filed under `solutions/` because AppDirect tags them
  "Partner Solutions" only. They now have an explicit
  `type: [solution, blueprint]` in frontmatter. The default blueprint list
  still excludes them; `?includeFilelessBlueprints=true` returns them.
- `connector-filters` and `blueprint-filters` are now static payloads that
  match the live responses byte for byte (values, labels, order, `link` and
  `group` key placement, including the live quirks "public Sector" and
  `group` only on blueprint type options). The live service builds these
  from enums, not from listing data.
- Detail endpoints: `templates[]` entries carry `id`, `name`, `url`, each
  omitted when unset; `creatorUrl` omitted when unset (live omits null
  fields, Jackson `NON_ABSENT`).
- Blueprint list entries: `requiredCamundaVersion` only present when the
  listing declares compatible versions (same rule as live).
- Use-case facet normalization: AppDirect tag "Microservices orchestration"
  maps to the live filter value "microservice orchestration" (the Java
  service matches by attribute id, not by string).
- Blueprint facets retain the AppDirect "Any" industry tag and distinguish
  the blueprint "Solution Accelerators" category from the partner category
  with the same name. The API also maps "Supply Chain & Logistics" to the
  live filter value "supply chain and logistics". These fields do not change
  the site's display facets.
- Blueprint 587865: the integration-test template points at the renamed
  `camunda-platform-tutorials` repository.

## Passing checks (exact match live vs. candidate)

- `GET /api/v1/connector-filters` — byte-equal
- `GET /api/v1/blueprint-filters` — byte-equal
- Connector details: 493384, 637225, 418963, 836163, 873768, 469784,
  418743, 873542
- Blueprint details: 437143, 449343, 437163, 632605, 808469, 437162, 490021
- ootb-connectors: index (one field-level exception, see below), template
  by exact version and by `latest` (numeric max) for
  `camunda.connectors.rpa`, `io.camunda.connectors.AWSCOMPREHEND.v1`,
  `io.camunda:soap`
- ootb unknown id / unknown version: 404 on both (body differs, see below)
- `search=zzznomatchzzz`: empty result on both
- Facet membership: filter values return the same set of ids on both sides,
  except for the content drift and category merge listed below
- Filter combination rules: AND across groups, OR within a group, repeated
  parameters and comma-separated values behave the same
- Health endpoints on port 8090 (`/health`, `/health/readiness`,
  `/health/liveness`)
- marketplace-api contract test suite: 36/36 pass

## Remaining differences

### 1. Content drift (snapshot vs. live AppDirect)

Measured after the export refresh. Filter count differences reduce exactly
to these id sets.

- Connectors only in live (2): 676862, 822034 (published after the export)
- Connectors only in the static site (5): 442223, 469785, 469786, 643614,
  682917
- Blueprints only in live (1): 643614 — note the same id sits on opposite
  sides: live serves it as a blueprint, the site content has it as a
  connector
- Blueprints only in the static site (2): 475968, 682919
- With `includeFilelessBlueprints=true` the static site additionally
  returns 461194, 475969, 475970, 780873: listing-only items that the live
  product line does not include

### 2. Editorial rewrites (intentional, kept)

The rewrite shortens descriptions and serves its own assets. These fields
differ in text, not in shape: `description`, `overview`,
`documentationUrl`, `iconUrl`, `overviewImageUrl`, `creatorUrl` on some
listings, and the blueprint `cta` (`Use in Web Modeler`/`web-modeler` vs.
live `Use blueprint`/`CloudDownload`).

### 3. List order (accepted)

Live serves the AppDirect listing order. The site sorts by `lastModified`,
so the same item sets appear in a different order on all list and filter
responses. Measured fact: the export order matched the live connector
order exactly (170/170 shared ids), but the export is no longer committed
(fetched on demand by `scripts/fetch-export.mjs`), so the build cannot use
it. Blueprint order is an AppDirect merchandising order per product line
and is not part of the export at all. No known client depends on the
order.

### 4. Category merge (accepted)

`CATEGORY_MERGE` folds "Best Practices", "DMN" and "Form" into "Patterns"
(kept deliberately for the UI). The live filter contract exposes them as
separate `processBlueprintCategory` values with data behind them
(best practices: 2, dmn: 1, form: 1). On the candidate these filter values
return an empty list; the 4 affected listings are reachable under
`patterns` instead.

### 5. Search (approximation, marketplace-api side)

Live search runs in AppDirect and covers more fields (URLs match:
`search=http` gives 14 live vs. 0 candidate) and a larger corpus
(`search=kafka` returns 779051, which is not in the live list itself).
The nginx filter does substring search over name, description and creator
name. This is a documented approximation in `njs/filter.js`.

### 6. Error-handling differences (marketplace-api side)

| Case | Live | Candidate |
|---|---|---|
| Unknown enum filter value, wrong case (`connectorType=INBOUND`) | 200, filter ignored, full list | 200, case-insensitive match / empty list |
| `includeFilelessBlueprints=banana` | 400 | 200 (treated as false) |
| Non-numeric id (`/connectors/abc`) | 400 | 404 |
| 404 bodies | empty | nginx HTML error page |

The first row also corrects a wrong comment in `njs/filter.js`, which
states that the Java service answered 400 for unknown filter values.

### 7. Small field-level differences (marketplace-api side)

- ootb-connectors index: the candidate proxies the raw
  `connector-templates.json` and passes through `"camunda": null` in
  `engine`; live strips null fields (one entry affected:
  `io.camunda.connectors.ServiceNowIncident.v1`).
- `/metrics` on port 8090 exists only on the Java service (Prometheus).
  The nginx container does not expose metrics. Documented in the
  marketplace-api README.

### 8. Dead template URL in live (live-side bug, not replicated)

Live blueprint 587865 references
`agent-chat-human-send-email-request.form`, which returns 404 upstream
(the file was renamed in the tutorials repository). The static site omits
it.
