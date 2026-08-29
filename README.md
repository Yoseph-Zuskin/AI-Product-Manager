<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.png">
    <img src="assets/logo.png" width="220" alt="AI Product Manager">
  </picture>
</p>

<h1 align="center">AI Product Manager</h1>

<p align="center">
  <em>Synthesized AI product strategy from Kellogg Executive Education — ready for your agent.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/github/v/tag/Yoseph-Zuskin/AI-Product-Manager?style=flat-square&color=6366F1&label=version" alt="Version">
  <img src="https://img.shields.io/github/license/Yoseph-Zuskin/AI-Product-Manager?style=flat-square&color=6366F1" alt="License">
  <img src="https://img.shields.io/badge/works%20with-13%20agents-6366F1?style=flat-square" alt="Works with 13 agents">
  <img src="https://img.shields.io/badge/OKF-v0.2-6366F1?style=flat-square" alt="OKF v0.2">
</p>

---

AI Product Manager is a Codex/ChatGPT plugin that puts a synthesized AI product strategy practice inside your agent. It distills two Kellogg Executive Education certificate programs—**AI Strategies for Business Transformations** and **AI-Driven Product Strategy** (Professor Mohan Sawhney)—into an actionable, agent-ready knowledge bundle with 13 workflow skills, 20 concepts, and 5 templates.

## What it does

| Skill | Purpose |
|-------|---------|
| `ai-pm-index` | Routes requests to the right skill |
| `ai-pm-get-context` | Loads product context, references, templates, local design system |
| `ai-pm-discover` | Product discovery, JTBD, opportunity analysis |
| `ai-pm-design` | Product design, user stories, MVP/MVX definition |
| `ai-pm-architect` | ML paradigm selection, system topology, deployment patterns |
| `ai-pm-govern` | ML model governance, compliance, responsible AI |
| `ai-pm-team` | Cross-functional team topology, RACI, collaboration rhythms |
| `ai-pm-research` | User research, competitive analysis, win/loss |
| `ai-pm-price` | Pricing strategy, monetization, packaging |
| `ai-pm-grow` | PLG loops, retention, activation, expansion |
| `ai-pm-communicate` | Stakeholder influence, storytelling, alignment |
| `ai-pm-vision` | Product vision, V2MOM, strategy canvas |
| `ai-pm-audit` | Product audits, responsible AI checks, tech debt |

**Templates (5)**: PRD, ADR, RACI, Postmortem, Model Card

## Optional Dependency: okf-abstracts

The plugin's knowledge bundle uses **OKF v0.2** concepts that reference types defined in **[okf-abstracts](https://github.com/Yoseph-Zuskin/okf-abstracts)** (pinned to `v0.1.0`). This is an optional dependency — the plugin works standalone, but linking to okf-abstracts provides:

- Standardized type definitions (Skill, Concept, Template, Agent, etc.)
- OWL-style class hierarchy (foundational → core → domain → application)
- Cross-bundle concept interoperability

To enable full cross-bundle resolution, add the okf-abstracts repo to your local marketplaces or place it alongside this repo.

## Install

### Codex (CLI & Desktop App)
```bash
codex plugin marketplace add Yoseph-Zuskin/AI-Product-Manager
codex plugin add ai-product-manager@AI-Product-Manager
```
Restart Codex desktop app after installing.

### ChatGPT / Codex (via ChatGPT Plugins Directory)
1. Open ChatGPT → Plugins → **Add plugin** → **Custom** → paste: `https://github.com/Yoseph-Zuskin/AI-Product-Manager`
2. Trust the hooks when prompted (SessionStart, SubagentStart, UserPromptSubmit)

### GitHub Copilot CLI
```bash
copilot plugin marketplace add Yoseph-Zuskin/AI-Product-Manager
copilot plugin install ai-product-manager@AI-Product-Manager
```

### Other Agents
Also available for: **Claude Code, Cursor, Windsurf, OpenCode, Devin, Grok, Qoder, Kimi, Pi, Hermes, Antigravity, Gemini** — see `.claude-plugin/`, `.cursor/`, `.windsurf/`, `.opencode/`, `.devin-plugin/`, `.grok-plugin/`, `.qoder-plugin/`, `.kimi-plugin/`, `.pi/`, `.hermes-plugin/`, `.agents/`, `.agents/plugins/`, `gemini-extension.json`.

## Quick Start

After installing, start a new thread and say:

> **Help me create a product strategy for my AI-powered feature**

The `ai-pm-index` skill routes to the appropriate workflow. For discovery, it invokes `ai-pm-discover`; for design, `ai-pm-design`; for architecture, `ai-pm-architect`, etc.

## Knowledge Bundle

The plugin includes an **OKF v0.2** knowledge bundle:

- **20 concepts** — AI product strategy, ML governance, pricing, architecture patterns, team topology, discovery, vision
- **13 skills** — Curated workflows with AGENTS.md routing rules
- **5 templates** — PRD, ADR, RACI, Postmortem, Model Card
- **Provenance** — Every concept cites sources from the two Kellogg programs

All content is synthesized from Professor Mohan Sawhney's Kellogg Executive Education materials (personal educational use per Emeritus terms).

## Harness Compatibility

| Harness | Config |
|---------|--------|
| Codex | `.codex-plugin/plugin.json` |
| Claude Code | `.claude-plugin/plugin.json` |
| Cursor | `.cursor/rules/ai-pm.md` |
| Windsurf | `.windsurf/rules/ai-pm.md` |
| OpenCode | `.opencode/plugins/ai-pm.mjs` |
| Devin | `.devin-plugin/plugin.json` |
| Grok | `.grok-plugin/plugin.json` |
| Qoder | `.qoder-plugin/plugin.json` |
| Kimi | `.kimi-plugin/` |
| Pi | `.pi/extensions/superpowers.ts` |
| Hermes | `.hermes-plugin/__init__.py` |
| Antigravity | `.agents/plugins/marketplace.json` |
| Gemini | `gemini-extension.json` |

## Legal

- **License**: MIT — see [LICENSE](LICENSE)
- **Privacy**: [privacy.md](privacy.md) — local-only execution, no data collection
- **Terms**: [terms.md](terms.md) — MIT licensed, no warranty

## Source Attribution

This plugin synthesizes concepts from two Kellogg Executive Education certificate programs by Professor Mohan Sawhney:

- [AI Strategies for Business Transformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)
- [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)

Materials are for personal educational use per Emeritus terms. The plugin contains synthesized concepts, not verbatim transcripts.

## Contributing

This is a personal knowledge bundle. Issues and PRs welcome for bug fixes and improvements. For major changes, open an issue first.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.
