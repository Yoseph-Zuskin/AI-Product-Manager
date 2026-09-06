---
type: Template
title: AI Product Manager Agent Rules
description: AGENTS.md - Single source of truth for AI Product Manager knowledge kit
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
tags:
- ai-product-manager
- agent-rules
- okf
- skill-router
status: stable
stale_after: 2027-08-19
---
# AI Product Manager - Agent Rules

**CRITICAL: NEVER COMMIT OR PUSH CHANGES YOURSELF.** Always leave changes locally for the user to review and decide if they're ready to push. The user will explicitly ask for commits/pushes when ready.

This file is the single source of truth for all AI harnesses using the AI Product Manager knowledge kit.

## Plugin Identity

- **Name**: ai-product-manager
- **Version**: 0.1.1
- **Description**: Synthesizes AI Strategies & AI-Driven Product Strategy into actionable PM skills
- **OKF Abstracts**: <https://www.github.com/Yoseph-Zuskin/okf-abstracts> (v0.1.0)

## Core Principles

1. **OKF v0.2 Conformance** - All concepts use YAML frontmatter with `subtype_of`
2. **Cross-repo references** use full GitHub URLs + version pins
3. **Trailing newlines**: exactly 1 per file
4. **Markdownlint**: MD013 (ignore frontmatter/code/refs), MD025 (single H1)

## Skill Invocation Protocol

### Mandatory Preflight

**Always run `ai-pm-get-context` first** before any other skill:

- Loads product context, saved URLs, Figma, screenshots, codebase paths
- Loads OKF references from `references/` and okf-abstracts
- Loads templates from `templates/`
- Checks for local design context (Storybook, design-system/, tokens/, components/)

### Skill Router

Route user requests via `ai-pm-index` skill:

| User Intent | Route to Skill |
| ------------- | ---------------- |
| Product discovery, JTBD, opportunity analysis | `ai-pm-discover` |
| Product design, MVP, wireframes, user stories | `ai-pm-design` |
| AI architecture, ML paradigm selection, infra | `ai-pm-architect` |
| AI deployment patterns, model serving, monitoring | `ai-pm-architect` |
| ML model governance, model registry, compliance | `ai-pm-govern` |
| Team topology, RACI, collaboration rhythms | `ai-pm-team` |
| User research, competitive analysis, win/loss | `ai-pm-research` |
| Pricing strategy, monetization, packaging | `ai-pm-price` |
| PLG loops, retention, activation, expansion | `ai-pm-grow` |
| Stakeholder communication, influence | `ai-pm-communicate` |
| Product vision, V2MOM, strategy canvas | `ai-pm-vision` |
| Product audits, responsible AI checks | `ai-pm-audit` |
| Load product context, references, templates | `ai-pm-get-context` |
| Eval design, golden datasets, regression gates | `ai-pm-evals` |
| API/SDK design, console, token economics | `ai-pm-platform` |
| Model selection, RAG/agent reliability, prompts | `ai-pm-models` |
| ROI/TCO business cases, P&L impact | `ai-pm-business-case` |
| Build-vs-buy, RFPs, vendor oversight | `ai-pm-vendor` |
| Multi-unit roadmaps, portfolios, board narratives | `ai-pm-transform` |

### Cross-Plugin Integration

- Leverage `@product-design.ideate` for visual ideation
- Leverage `@product-design.image-to-code` for prototype implementation
- Leverage `@product-design.audit` for UX/design audits
- Defer deep ML skills to future `ai-ml-engineer` plugin

## Skill Dependencies

```text
ai-pm-get-context → (first, runs preflight script)
ai-pm-discover ← ai-pm-get-context → ai-pm-design, ai-pm-price
ai-pm-design ← ai-pm-discover → ai-pm-architect
ai-pm-architect ← ai-pm-design → ai-pm-govern, ai-pm-grow
ai-pm-govern ← ai-pm-architect → ai-pm-audit
ai-pm-grow ← ai-pm-architect, ai-pm-price → ai-pm-communicate
ai-pm-communicate ← ai-pm-grow → (ongoing)
ai-pm-vision ← ai-pm-discover → ai-pm-design, ai-pm-architect
ai-pm-audit ← ai-pm-govern → (ongoing)
ai-pm-price ← ai-pm-discover → ai-pm-grow
ai-pm-research ← ai-pm-get-context → ai-pm-discover
ai-pm-team ← ai-pm-get-context → ai-pm-design, ai-pm-govern
ai-pm-evals ← ai-pm-architect, ai-pm-models → ai-pm-govern, ai-pm-audit
ai-pm-platform ← ai-pm-architect → ai-pm-price, ai-pm-business-case
ai-pm-models ← ai-pm-evals → ai-pm-architect, ai-pm-vendor
ai-pm-business-case ← ai-pm-price, ai-pm-vendor → ai-pm-transform
ai-pm-vendor ← ai-pm-models → ai-pm-business-case, ai-pm-transform
ai-pm-transform ← ai-pm-vision, ai-pm-business-case → ai-pm-communicate
```

## Role Assignments

All skills require these role assignments:

- **Data Owners** - Data governance, quality, lineage
- **Platform Admins/DevOps** - Infrastructure, CI/CD, monitoring
- **Governance Reps (Legal/InfoSec)** - Compliance, privacy, security
- **Solution Architects** - Architecture decisions, ML paradigm selection

## File Structure

```text
AI-Product-Manager/
├── AGENTS.md                    # This file (single source of truth)
├── ai-product-manager.md        # Program concept (type: Agent)
├── index.md                     # Bundle index
├── log.md                       # Change log
├── .markdownlint.json           # Markdownlint config
├── .codex-plugin/
│   └── plugin.json              # Codex manifest
├── .claude-plugin/
│   └── plugin.json              # Claude Code manifest
├── .devin-plugin/
│   └── plugin.json              # Devin manifest
├── .grok-plugin/
│   └── plugin.json              # Grok Build manifest
├── .qoder-plugin/
│   └── plugin.json              # Qoder manifest
├── .cursor/
│   └── rules/ai-pm.md           # Cursor rules
├── .windsurf/
│   └── rules/ai-pm.md           # Windsurf rules
├── .clinerules/
│   └── ai-pm.md                 # Cline rules
├── .kiro/
│   └── steering/ai-pm.md        # Kiro steering
├── .qoder/
│   └── rules/ai-pm.md           # Qoder rules
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot Chat
├── .openclaw/
│   └── skills/ai-pm/            # OpenClaw skill package
├── .opencode/
│   └── plugins/ai-pm.mjs        # OpenCode server plugin
├── pi-extension/
│   └── package.json             # Pi agent harness
├── ai-pm-mcp/
│   ├── package.json             # MCP server package
│   └── mcp-server.js            # MCP server
├── gemini-extension.json        # Gemini/Antigravity extension
├── package.json                 # npm package (Codex)
├── plugin.json                  # Root plugin manifest
├── hooks/
│   ├── on-prompt.js             # OpenCode onPrompt hook
│   └── on-task.js               # OpenCode onTask hook
├── commands/
│   └── ai-pm.js                 # OpenCode /ai-pm command
├── skills/                      # 19 skills (ai-pm-*)
├── templates/                   # 11 templates
├── references/                  # 8 references
├── agents/                      # ai-pm.md (single agent)
└── scripts/                     # get-context.sh, validate-adr.sh
```

## Output Standards

- One concept per file with OKF frontmatter
- Sources cited with `[^id]` matching `sources[].id`
- `verified`: human entry plus agent entries (append on each review)
- `role_assignments`: data-owners, platform-admins-devops, governance-reps-legal-infosec, solution-architects

## Handoff Protocol

When routing, acknowledge:
> "Routing to `<skill>` skill for [brief reason]. One moment..."

Then invoke target skill via `@ai-pm <skill> <task>`.

## Release Workflow

- Work on `develop`; `main` is locked. Never commit or push; leave changes
  local for review.
- Log user-facing changes under `## [Unreleased]` in `CHANGELOG.md`;
  never pre-create version sections or delete `Unreleased` (the release
  workflow promotes it and fails without it). `log.md` keeps one section
  per day.
- `VERSION` is the single source of truth; `scripts/bump_version.sh` syncs
  it across manifests (abstract pins stay untouched — dep versions move
  only deliberately). PRs check the `CHANGELOG Unreleased` box in the PR
  template and keep CI green.
- Release: dispatch the `release` workflow with `x.y.z` → `release/vX.Y.Z`
  PR → review → merge → tag `vX.Y.Z` + GitHub Release. Release
  `okf-abstracts` first: this bundle's CI pins it by tag, which must exist
  (and be public) before this repo's release CI can pass.
