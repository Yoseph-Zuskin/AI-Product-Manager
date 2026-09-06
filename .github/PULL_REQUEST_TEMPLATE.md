# Pull Request

## Overview & Motivation

<!-- What is this change and why is it needed? Link issues with `Fixes #NNN`. -->

## What Changed

<!-- Bundle content (concepts/skills/templates/references), harness configs,
tooling (scripts, MCP server, workflows), or metadata (manifests, versions).
Note any new `draft` files and any framework/IP-sensitive additions. -->

## How It Was Tested

<!-- Check every box that applies. CI must be green before merge. -->

- [ ] `validate_subtype.py --strict` (with `--abstracts-repo`): 0 errors, 0 warnings
- [ ] `check_consistency.py`: 0 errors, 0 warnings
- [ ] `check_links.py` / `check_newlines.py`: clean
- [ ] MCP smoke test (`npm test` in `ai-pm-mcp/`): passes (if MCP touched)
- [ ] `pre-commit run --all-files`: green
- [ ] `okf-adversarial-review` skill: no BLOCKING findings (or they are listed above with justification)
- [ ] CHANGELOG `Unreleased` section updated (for user-facing changes)
- [ ] Generated copies re-ran (`regen_*.ps1`) with no unexpected diff
