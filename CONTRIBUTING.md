# Contributing to AI-Product-Manager

Thank you for your interest in contributing to **AI-Product-Manager** — a public knowledge kit based on cited synthesis of private educational materials and public web knowledge into actionable AI Product Manager skills, templates, and knowledge.

---

## Core Principles

1. **OKF v0.2 Conformance**: All concepts use YAML frontmatter with `subtype_of` (canonical singular), cross-repo references use full GitHub URLs + version pins, exactly 1 trailing newline per file.
2. **True Is-A Lattice**: Every concept declares its most-specific parent; no vacuous root links. L3 persona specializations, Reference-branch frameworks, single-parent templates.
3. **Executable Skills**: All 19 skills carry Contract/Verification sections + harness fields (`user-invocable`, `argument-hint`, `allowed-tools`, `implements`).
4. **Harness Parity**: OpenClaw and IDE rule files are generated from canonical sources (`regen_openclaw.ps1`, `regen_ides.ps1`); CI gates regen freshness.
5. **Provenance Discipline**: `generated`/`verified[]` carry `by` and `at` only. Sources cited with `[^id]` matching `sources[].id`.
6. **IP Scope**: Original synthesis MIT; transcripts private (never pushed). `privacy.md`/`terms.md` carry scope.

---

## Development Setup

### Prerequisites

- Python 3.11+ (for OKF validators from `okf-abstracts`)
- Node.js 18+ (for MCP server)
- Git, `make` (optional)
- `gh` CLI (for dispatching releases)

### Getting Started

```bash
git clone https://github.com/Yoseph-Zuskin/AI-Product-Manager.git
cd AI-Product-Manager
pip install -r okf-abstracts/requirement.txt  # for OKF validators
cd ai-pm-mcp && npm install && cd ..          # for MCP server
```

---

## Development Workflow

### Branching Strategy

- **`develop`** — active development; all feature/bugfix branches from here
- **`main`** — locked; receives only release PRs from `develop`
- **Feature branches**: `feat/<short>` off `develop`
- **Bugfix branches**: `fix/<short>` off `develop`

### Commit Message Conventions

[Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New skill, concept, template, reference, harness manifest, MCP tool
- `fix:` Bug fix in skills, validators, MCP, harnesses, docs
- `docs:` README, CHANGELOG, AGENTS, skill docs
- `refactor:` No behavioral change
- `test:` MCP tests, validator tests
- `chore:` CI, release, version pins, manifests

### Knowledge & Content Maintenance

If your PR touches skills, concepts, templates, references, or harnesses:

1. **Skills**: Must have Contract/Verification + harness fields. Route via `ai-pm-index` skill.
2. **Concepts**: True is-A parent, single-parent templates, provenance complete.
3. **Harnesses**: OpenClaw + 5 IDE rules are generated — edit canonical sources only (`.ps1` on Windows, `.sh` on *nix).
4. **MCP**: 19 tools in `ai-pm-mcp/mcp-server.js`; add tools there, test with `npm test`.
5. **CHANGELOG**: Update under `## [Unreleased]` (Added/Changed/Deprecated/Removed/Fixed/Security).
6. **log.md**: Append to today's ISO 8601 date section.

---

## Gates (run all before proposing merge)

```bash
# OKF validation (from okf-abstracts)
python okf-abstracts/scripts/validate_subtype.py . --strict
python okf-abstracts/scripts/check_consistency.py .
python okf-abstracts/scripts/check_links.py .
python okf-abstracts/scripts/check_newlines.py .

# JSON validity (all manifests)
python -c "import json,glob; [json.load(open(f,encoding='utf-8')) for f in glob.glob('**/*.json',recursive=True) if 'node_modules' not in f and 'qoder-hooks.json' not in f]"

# MCP smoke test
cd ai-pm-mcp && npm test && cd ..

# Regen freshness (OpenClaw + 5 IDE files)
pwsh scripts/regen_openclaw.ps1
bash scripts/regen_ides.sh
git diff --exit-code -- .openclaw .windsurf/rules/ai-pm.md .clinerules/ai-pm.md .kiro/steering/ai-pm.md .qoder/rules/ai-pm.md .cursor/rules/ai-pm.mdc

# Pre-commit hygiene
pre-commit run --all-files
```

All must pass with `0 errors, 0 warnings` on this repo and `okf-abstracts` (run gates there too).

---

## Release Workflow (maintainer only)

**Prerequisite**: `okf-abstracts` must be released and public first (AI-PM CI pins it by tag).

1. On `develop`, verify `## [Unreleased]` in `CHANGELOG.md` has the right bullets.
2. Dispatch `release` workflow (Actions → `release` → "Run workflow") with explicit version:
   - Patch: `0.1.2` (bug fixes, tooling, docs)
   - Minor: `0.2.0` (new skills, concepts, templates, backward-compatible)
   - Major: `1.0.0` (breaking contracts, harness protocol, Spec anchor)
3. Workflow: bumps `VERSION` via `scripts/bump_version.sh`, promotes `[Unreleased]` → `[version] - date`, prepends fresh `[Unreleased]`, opens `release/vX.Y.Z` PR.
4. Review PR (reconcile duplicate headers), squash-merge to `main`.
5. Tag job fires on `VERSION` change → `vX.Y.Z` tag + GitHub Release.
6. **Verify live**: run one install test per harness (Codex `/plugins`, Claude Discover, Cursor `/add-plugin`, Copilot settings).

---

## Pre-Submission Checklist

- [ ] All gates above pass (`0 errors, 0 warnings`)
- [ ] `CHANGELOG.md` updated under `## [Unreleased]`
- [ ] `log.md` appended to today's section
- [ ] Relevant docs (`README.md`, `AGENTS.md`, skill docs) updated
- [ ] Harness regen files clean (`git diff --exit-code` on generated copies)
- [ ] **Adversarial review completed: run `okf-adversarial-review` skill on this bundle — no BLOCKING findings**

---

## Pull Request Process

1. Fork → feature branch off `develop`.
2. Make changes, update `CHANGELOG`/`log.md`.
3. Push branch, open PR against `develop`.
4. Describe: problem, changes, verification.
5. All GitHub Actions checks green.
6. Squash-merge on approval.

---

## License

MIT. See [LICENSE](LICENSE). Private transcripts remain copyrighted and are never pushed.

---

*By contributing, you agree that your contributions will be licensed under the MIT License.*
