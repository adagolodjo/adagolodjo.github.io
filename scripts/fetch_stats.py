#!/usr/bin/env python3
"""
Fetch academic stats from Semantic Scholar API and update docs/_data/stats.yml
Run locally: python3 scripts/fetch_stats.py
Run via CI:  automatically by GitHub Actions (weekly)

Semantic Scholar API: https://api.semanticscholar.org/graph/v1
Author ID for Yinoussa Adagolodjo: 2251436
"""

import json
import sys
import urllib.request
from datetime import date
from pathlib import Path

# ── Config ─────────────────────────────────────────────────────────────────
AUTHOR_ID   = "2251436"          # Yinoussa Adagolodjo on Semantic Scholar
STATS_FILE  = Path(__file__).parent.parent / "docs" / "_data" / "stats.yml"
API_BASE    = "https://api.semanticscholar.org/graph/v1"

FIELDS = "name,citationCount,hIndex,paperCount,affiliations"
URL    = f"{API_BASE}/author/{AUTHOR_ID}?fields={FIELDS}"

# ── Fetch ───────────────────────────────────────────────────────────────────
def fetch_stats():
    req = urllib.request.Request(
        URL,
        headers={"User-Agent": "adagolodjo-stats-updater/1.0 (github.com/adagolodjo)"}
    )
    print(f"Fetching: {URL}")
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read())

    citations   = data.get("citationCount", 0)
    h_index     = data.get("hIndex",        0)
    paper_count = data.get("paperCount",    0)
    name        = data.get("name",          "Yinoussa Adagolodjo")

    print(f"  Name        : {name}")
    print(f"  Citations   : {citations}")
    print(f"  h-index     : {h_index}")
    print(f"  Paper count : {paper_count}")
    return citations, h_index, paper_count

# ── Write YAML ──────────────────────────────────────────────────────────────
def write_stats(citations, h_index, paper_count):
    today = date.today().isoformat()
    content = f"""# Academic stats — auto-updated weekly by GitHub Actions
# Source: Semantic Scholar API (https://api.semanticscholar.org)
# Author ID: {AUTHOR_ID}
# To update manually: python3 scripts/fetch_stats.py

updated: "{today}"
citations: {citations}
h_index: {h_index}
paper_count: {paper_count}
source: "Semantic Scholar"
semantic_scholar_author_id: "{AUTHOR_ID}"
"""
    STATS_FILE.write_text(content, encoding="utf-8")
    print(f"\nWritten to {STATS_FILE}")

# ── Main ────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    try:
        citations, h_index, paper_count = fetch_stats()
        write_stats(citations, h_index, paper_count)
        print("Done.")
    except Exception as e:
        # Exit 0 so GH Actions does not mark the run as failed.
        # The commit step will see no diff and skip the push gracefully.
        print(f"Warning: could not fetch stats ({e})", file=sys.stderr)
        print("Keeping existing stats.yml unchanged — will retry next week.")
        sys.exit(0)
