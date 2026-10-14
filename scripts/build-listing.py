#!/usr/bin/env python3
"""Build a listing directory from a submission payload.

Used by .github/workflows/create-listing-pr.yml. Reads the JSON payload that the
submission process (processes/submit-listing.bpmn) sends and writes
src/content/listings/<type>s/<slug>/listing.md.

Payload format: a JSON object with one key per form field. Scalar values are
base64-encoded strings or null; list values are lists of base64-encoded strings.
The process encodes the values so that the JSON stays valid for any user input.

Writes these GitHub Actions outputs: dir, branch, listing_id, icon_url, gallery_urls,
pr_title, pr_body. Without GITHUB_OUTPUT (local use), prints them as JSON.
"""

import base64
import json
import os
import re
import sys
import time
from datetime import date

import yaml

LIST_FIELDS = [
    "categories",
    "industries",
    "useCases",
    "compatibleVersions",
    "runtimes",
    "connectorTypes",
]
SCALAR_FIELDS = ["creatorType", "creatorName", "creatorUrl", "availability"]
LINK_FIELDS = {
    "linkGithub": "github",
    "linkDocs": "docs",
    "linkPreview": "preview",
    "linkDemo": "demo",
    "linkSupport": "support",
    "linkWebsite": "website",
}
VALID_TYPES = {"connector": "connectors", "blueprint": "blueprints", "solution": "solutions"}


def fail(message):
    print(f"::error::{message}")
    sys.exit(1)


def decode(value):
    if value is None:
        return None
    if isinstance(value, list):
        return [base64.b64decode(v).decode("utf-8") for v in value]
    return base64.b64decode(value).decode("utf-8")


def decode_item(value):
    if value is None:
        return None
    return {key: decode(raw) for key, raw in value.items()}


def main(payload_path):
    with open(payload_path, encoding="utf-8") as f:
        raw = json.load(f)
    data = {}
    for key, value in raw.items():
        if key in ("resources",):
            data[key] = [decode_item(item) for item in (value or [])]
        else:
            data[key] = decode(value)

    for field in ["listingName", "listingType", "description", "content", "creatorName", "creatorUrl", "githubHandle"]:
        if not data.get(field):
            fail(f"Required field is missing or empty: {field}")
    if data["listingType"] not in VALID_TYPES:
        fail(f"Invalid listingType: {data['listingType']}")

    listing_id = int(time.time())
    name = data["listingName"]
    listing_type = data["listingType"]
    slug = re.sub(r"(^-+|-+$)", "", re.sub(r"[^a-z0-9]+", "-", name.lower()))
    slug = slug or f"listing-{listing_id}"
    listing_dir = f"src/content/listings/{VALID_TYPES[listing_type]}/{slug}"
    branch = f"listing/{slug}-{listing_id}"

    frontmatter = {"id": listing_id, "name": name}
    for key in SCALAR_FIELDS:
        if data.get(key):
            frontmatter[key] = data[key]
    for key in LIST_FIELDS:
        if data.get(key):
            frontmatter[key] = data[key]
    frontmatter["description"] = data["description"]

    templates = []
    for resource in data.get("resources") or []:
        if not resource.get("templateUrl"):
            continue
        template = {"url": resource["templateUrl"]}
        if resource.get("templateName"):
            template["name"] = resource["templateName"]
        templates.append(template)
    if templates:
        frontmatter["templates"] = templates
    for key in ["smTemplate", "video"]:
        if data.get(key):
            frontmatter[key] = data[key]
    links = {out: data[form_key] for form_key, out in LINK_FIELDS.items() if data.get(form_key)}
    if links:
        frontmatter["links"] = links
    frontmatter["lastModified"] = date.today().isoformat()

    markdown = (
        "---\n"
        + yaml.safe_dump(frontmatter, sort_keys=False, allow_unicode=True, width=4096)
        + "---\n\n"
        + data["content"]
        + "\n"
    )
    os.makedirs(listing_dir, exist_ok=True)
    with open(os.path.join(listing_dir, "listing.md"), "w", encoding="utf-8") as f:
        f.write(markdown)

    gallery_urls = "\n".join(u for u in data.get("gallery") or [] if u)
    outputs = {
        "dir": listing_dir,
        "branch": branch,
        "listing_id": str(listing_id),
        "icon_url": data.get("icon_url") or "",
        "gallery_urls": gallery_urls,
        "pr_title": f"Add listing: {name}",
        "pr_body": (
            f"Adds a new {listing_type} listing at `{listing_dir}/listing.md`.\n\n"
            f"**Submitted by:** {data['creatorName']} (@{data['githubHandle']})\n\n"
            "- [ ] Check name, description and facets\n"
            "- [ ] Check the downloaded icon and gallery images\n"
            "- [ ] Check the PR preview deployment\n"
            "- [ ] For an existing AppDirect listing, replace the generated id with the AppDirect product id"
        ),
    }
    github_output = os.environ.get("GITHUB_OUTPUT")
    if github_output:
        with open(github_output, "a", encoding="utf-8") as f:
            for key, value in outputs.items():
                f.write(f"{key}<<GHEOF\n{value}\nGHEOF\n")
    else:
        print(json.dumps(outputs, indent=2))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "/tmp/listing-payload.json")
