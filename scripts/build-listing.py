#!/usr/bin/env python3
"""Build a listing directory from a submission payload.

Used by .github/workflows/create-listing-pr.yml. Reads the JSON payload that the
submission process (processes/submit-listing.bpmn) sends and writes
src/content/listings/<type>s/<slug>/listing.md.

Payload format: a JSON object with one key per form field, serialized by the process
with the FEEL `to json` function. Scalar values are strings or null; list values are
lists of strings; `resources` is a list of objects.

The element templates referenced by `resources[].templateUrl` are fetched and their
`appliesTo` values are collected into the `bpmnTypes` frontmatter field. Fetching is
best effort: failures produce a warning, not a failed run.

Writes these GitHub Actions outputs: dir, branch, listing_id, icon_url, gallery_urls,
pr_title, pr_body. Without GITHUB_OUTPUT (local use), prints them as JSON.
"""

import json
import os
import re
import sys
import time
import urllib.request
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

# Canonical order used for the bpmnTypes frontmatter field; unknown types are appended last.
BPMN_TYPE_ORDER = [
    "bpmn:Task",
    "bpmn:StartEvent",
    "bpmn:IntermediateCatchEvent",
    "bpmn:IntermediateThrowEvent",
    "bpmn:BoundaryEvent",
    "bpmn:SubProcess",
]


def warn(message):
    print(f"::warning::{message}")


def fail(message):
    print(f"::error::{message}")
    sys.exit(1)


def fetch_template_applies_to(url):
    """Fetch an element template and return its `appliesTo` BPMN types. Best effort."""
    if not url.startswith(("http://", "https://")):
        warn(f"Skipping non-HTTP template URL: {url}")
        return []
    request = urllib.request.Request(url, headers={"User-Agent": "marketplace-listing-builder"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            template = json.load(response)
    except Exception as e:
        warn(f"Could not fetch element template {url}: {e}")
        return []
    applies_to = template.get("appliesTo")
    if not isinstance(applies_to, list):
        warn(f"Element template {url} has no `appliesTo` list; add bpmnTypes manually")
        return []
    return [t for t in applies_to if isinstance(t, str)]


def normalize_bpmn_type(value):
    """Map a template `appliesTo` value to one of the BPMN type filter values."""
    if value in BPMN_TYPE_ORDER:
        return value
    if value.startswith("bpmn:") and value.endswith("Task"):
        # The filter only knows bpmn:Task; collapse typed tasks (ServiceTask, ReceiveTask, ...).
        return "bpmn:Task"
    warn(f"`appliesTo` value {value} is not a supported BPMN type filter value; add bpmnTypes manually")
    return None


def strip_markdown_references(text):
    definitions = set()
    definition_pattern = re.compile(
        r"""^[ \t]{0,3}\[([^\]\n]+)\]:[ \t]*(?:<[^>\n]*>|[^ \t\n]+)"""
        r"""(?:[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?"""
        r"""(?:\r?\n[ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?[ \t]*\r?$""",
        re.M,
    )

    def normalize_label(label):
        return " ".join(label.split()).lower()

    def remove_definition(match):
        definitions.add(normalize_label(match.group(1)))
        return ""

    text = definition_pattern.sub(remove_definition, text)
    reference_pattern = re.compile(r"(!?)\[([^\]\n]*)\](?:[ \t]*\r?\n?[ \t]*)\[([^\]\n]*)\]")

    def replace_reference(match):
        image, label, reference = match.groups()
        if normalize_label(reference or label) not in definitions:
            return match.group(0)
        return "" if image else label

    text = reference_pattern.sub(replace_reference, text)
    shortcut_pattern = re.compile(r"(!?)\[([^\]\n]+)\](?![ \t]*(?:\(|\[))")

    def replace_shortcut(match):
        image, label = match.groups()
        if normalize_label(label) not in definitions:
            return match.group(0)
        return "" if image else label

    return shortcut_pattern.sub(replace_shortcut, text)


def sanitize_rich_text(text):
    """Guardrails for contributor-provided content: keep paragraphs, lists, bold
    and italic; strip images, links (keeping the link text), raw HTML and
    headings (converted to bold) so listings cannot embed off-site assets or
    arbitrary markup."""
    text = strip_markdown_references(text)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text)  # images
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)  # links -> text
    text = re.sub(r"<[^>]+>", "", text)  # raw HTML tags
    text = re.sub(r"^#{1,6}\s+(.+)$", r"**\1**", text, flags=re.M)  # headings -> bold
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def main(payload_path):
    with open(payload_path, encoding="utf-8") as f:
        data = json.load(f)

    for field in ["listingName", "listingType", "description", "content", "creatorName", "creatorUrl", "githubHandle"]:
        if not data.get(field):
            fail(f"Required field is missing or empty: {field}")
    if data["listingType"] not in VALID_TYPES:
        fail(f"Invalid listingType: {data['listingType']}")

    run_id = os.environ.get("GITHUB_RUN_ID")
    if run_id and not run_id.isdecimal():
        fail(f"Invalid GitHub run ID: {run_id}")
    listing_id = int(run_id) if run_id else int(time.time())
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
    bpmn_types = set()
    for template in templates:
        bpmn_types.update(t for t in map(normalize_bpmn_type, fetch_template_applies_to(template["url"])) if t)
    bpmn_types = sorted(bpmn_types, key=lambda t: (BPMN_TYPE_ORDER.index(t) if t in BPMN_TYPE_ORDER else len(BPMN_TYPE_ORDER), t))
    if bpmn_types:
        frontmatter["bpmnTypes"] = bpmn_types
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
        + sanitize_rich_text(data["content"])
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
            "- [ ] Check name, description and facets (BPMN types are derived from the element templates)\n"
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
