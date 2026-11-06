import importlib.util
import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


sys.dont_write_bytecode = True
MODULE_PATH = Path(__file__).parents[1] / "scripts" / "build-listing.py"
SPEC = importlib.util.spec_from_file_location("build_listing", MODULE_PATH)
build_listing = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(build_listing)


class SanitizeRichTextTests(unittest.TestCase):
    def test_removes_reference_image_and_definition(self):
        text = "![remote][asset]\n\n[asset]: https://example.com/a.png"
        self.assertEqual(build_listing.sanitize_rich_text(text), "")

    def test_keeps_reference_link_text_and_removes_definition(self):
        text = '[docs][site]\n\n[site]: <https://example.com/docs> "Docs"'
        self.assertEqual(build_listing.sanitize_rich_text(text), "docs")

    def test_sanitizes_collapsed_and_shortcut_references(self):
        text = '[site][] and [site]\n\n[site]: https://example.com "Docs"'
        self.assertEqual(build_listing.sanitize_rich_text(text), "site and site")


class ListingIdTests(unittest.TestCase):
    def test_build_uses_github_run_id(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            work = Path(temp_dir)
            payload = {
                "listingName": "Run ID test",
                "listingType": "connector",
                "description": "test",
                "content": "Description",
                "creatorName": "Submitter",
                "creatorUrl": "https://example.com",
                "githubHandle": "submitter",
            }
            payload_path = work / "payload.json"
            payload_path.write_text(json.dumps(payload), encoding="utf-8")
            env = {**os.environ, "GITHUB_RUN_ID": "900000001"}
            env.pop("GITHUB_OUTPUT", None)
            result = subprocess.run(
                [sys.executable, str(MODULE_PATH), str(payload_path)],
                cwd=work,
                env=env,
                check=True,
                capture_output=True,
                text=True,
            )
            outputs = json.loads(result.stdout)
            listing = (work / outputs["dir"] / "listing.md").read_text(encoding="utf-8")
            self.assertRegex(listing, r"(?m)^id: 900000001$")


if __name__ == "__main__":
    unittest.main()
