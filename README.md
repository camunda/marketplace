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

## Notes for the cutover

- The API endpoints are emitted as `*.json` files. Configure the CDN or web server to serve them
  extensionless (`/api/v1/connectors` -> `/api/v1/connectors.json`).
- Old AppDirect URLs (`/en-US/apps/<id>/<slug>`) need redirect rules to `/listings/<slug>/`.
- The submission flow (Tasklist forms), lead forms (HubSpot) and the idea portal (ProductHub) are
  external services. Link them from the site; they do not change.
