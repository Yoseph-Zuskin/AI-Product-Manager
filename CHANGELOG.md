# CHANGELOG

## [0.1.1] - 2026-09-05

### Added

- 6 bridge skills from job-description gap analysis (status `draft`, big-tech + enterprise/consulting/banking/startup JDs): `ai-pm-evals`, `ai-pm-platform`, `ai-pm-models`, `ai-pm-business-case`, `ai-pm-vendor`, `ai-pm-transform`
- `regulated-ai-deployment` concept (draft): pattern notes toward exam-grade practices for regulated industries (model-risk artifacts, adverse-action reasoning, decision reconstruction, champion-challenger)
- Executable Contract/Verification in all skills; required harness fields (`user-invocable`, `argument-hint`, `allowed-tools`, `implements`); AI UX section in `ai-pm-design`
- Harness copies generated from canonical sources (`scripts/regen_openclaw.ps1`, `scripts/regen_ides.ps1`); Copilot plugin manifest (`.github/plugin.json`); Codex-native marketplace (`.agents/plugins/marketplace.json`)
- Privacy policy (`privacy.md`) and Terms of Service (`terms.md`) for marketplace compliance
- Explicit `displayName` field in skill frontmatter entries
- Version bump script (`scripts/bump_version.sh`) for centralized version management

### Fixed

- YAML hard failures: agent `sources` run-on, 10 reference `*status` run-ons, missing frontmatter on program concept
- Concept lattice: real is-a parents for all concepts (no vacuous root links); 10 abstract-shadow references deleted; templates single-parented; persona concepts use L3 abstract parents
- Typo sweeps: link brackets, missing spaces, Cyrillic homoglyph, broken relative links, unclosed fences
- Manifest inventories synced (references, templates, skills) across all harnesses; repaired invalid JSON tails
- Skill display names: changed from `Ai Pm *` to `AI PM *` via explicit `displayName` in SKILL.md frontmatter
- OKF type: changed skill files from `type: Concept` to `type: Skill` for proper classification
- Added `logoDark` to plugin manifest for dark-mode compatibility (reuses transparent-background logo)
- Plugin validation: removed invalid `hooks` field from the Codex manifest (rejected by validator); the root manifest's `hooks`/`commands` entries are its own schema and stay

### Changed

- Skill frontmatter `type: Concept` → `type: Skill` (subtype_of already referenced Skill)
- Canonical linkage key `subtypes_of` → `subtype_of` across all bundles (aliases accepted with warnings)
- Glue slim-down: looped MCP resource listing, shared hooks loader, slimmer `bump_version.sh`, stub-free `package.json` (MCP test green)
- Harness parity: byte-identical Bash regen ports (25/25 files) plus CI regen-freshness gate over OpenClaw and IDE rule files

## [0.1.0] - 2026-08-29

### Added

- **Initial release**: AI Product Manager plugin for Codex/ChatGPT
- **Knowledge Bundle (OKF v0.2)**: 20 concepts synthesized from Professor Mohan Sawhney's Kellogg Executive Education certificate programs:
  - AI Strategies for Business Transformations
  - AI-Driven Product Strategy
- **13 Workflow Skills** for end-to-end AI product management:
  - `ai-pm-index` — Skill router
  - `ai-pm-get-context` — Context loading (references, templates, local design system)
  - `ai-pm-discover` — Product discovery, JTBD, opportunity analysis
  - `ai-pm-design` — Product design, user stories, MVP definition
  - `ai-pm-architect` — ML paradigm selection, system topology, deployment patterns
  - `ai-pm-govern` — ML model governance, compliance, responsible AI
  - `ai-pm-team` — Cross-functional team topology, RACI, collaboration rhythms
  - `ai-pm-research` — User research, competitive analysis, win/loss
  - `ai-pm-price` — Pricing strategy, monetization, packaging
  - `ai-pm-grow` — PLG loops, retention, activation, expansion
  - `ai-pm-communicate` — Stakeholder influence, storytelling, alignment
  - `ai-pm-vision` — Product vision, V2MOM, strategy canvas
  - `ai-pm-audit` — Product audits, responsible AI checks, tech debt
- **5 Templates**: PRD, ADR, RACI, Postmortem, Model Card
- **Harness Support** (13+): Codex, Claude Code, Cursor, Windsurf, OpenCode, Devin, Grok, Qoder, Kimi, Pi, Hermes, Antigravity, Gemini
- **Plugin Features**:
  - Local-only execution, no data collection
  - OKF v0.2 knowledge bundle with provenance tracking
  - SessionStart/SubagentStart/UserPromptSubmit hooks for automatic context injection
  - Marketplace installable via `marketplace add <url>`
- **Legal**: MIT License, Privacy Policy, Terms of Service
