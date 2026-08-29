# CHANGELOG

## [0.1.1] - 2026-08-29
### Fixed
- Skill display names: changed from "Ai Pm *" to "AI PM *" via explicit `displayName` in SKILL.md frontmatter
- OKF type: changed skill files from `type: Concept` to `type: Skill` for proper classification
- Added `logoDark` to plugin manifest for dark-mode compatibility (reuses transparent-background logo)
- Plugin validation: removed invalid `hooks` field from manifest (rejected by validator)

### Added
- Privacy policy (`privacy.md`) and Terms of Service (`terms.md`) for marketplace compliance
- Explicit `displayName` field in all 13 skill frontmatter entries
- Version bump script (`scripts/bump_version_v3.py`) for centralized version management

### Changed
- Skill frontmatter `type: Concept` → `type: Skill` (subtypes_of already referenced Skill)
- Skill `verified` timestamps updated to 2026-08-29T15:58:00Z

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