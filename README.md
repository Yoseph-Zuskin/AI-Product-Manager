<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo.png">
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
  <img src="https://img.shields.io/badge/works%20with-19%20skills-6366F1?style=flat-square" alt="Works with 19 skills">
  <img src="https://img.shields.io/badge/OKF-v0.2-6366F1?style=flat-square" alt="OKF v0.2">
</p>

---

AI Product Manager is a Codex/ChatGPT plugin that puts a synthesized AI product strategy practice inside your agent. It distills two Kellogg Executive Education certificate programs—**AI Strategies for Business Transformations** and **AI-Driven Product Strategy** (Professor Mohan Sawhney)—into an actionable, agent-ready knowledge bundle with 19 workflow skills, 21 concepts, and 11 templates.

## What it does

| Skill | Purpose |
| ------- | --------- |
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
| `ai-pm-evals` | Eval design, golden datasets, regression gates |
| `ai-pm-platform` | API/SDK design, console, token economics |
| `ai-pm-models` | Model selection, RAG/agent reliability, prompts |
| `ai-pm-business-case` | ROI/TCO business cases, P&L impact |
| `ai-pm-vendor` | Build-vs-buy, RFPs, vendor oversight |
| `ai-pm-transform` | Multi-unit roadmaps, portfolios, board narratives |

**Templates (11)**: PRD, ADR, RACI, Postmortem, Model Card, and others

## Optional Dependency: okf-abstracts

The plugin's knowledge bundle uses **OKF v0.2** concepts that reference types defined in **[okf-abstracts](https://www.github.com/Yoseph-Zuskin/okf-abstracts)** (pinned to `v0.1.0`). This is an optional dependency — the plugin works standalone, but linking to okf-abstracts provides:

- Standardized type definitions (Skill, Concept, Template, Agent, etc.)
- OWL-style class hierarchy (foundational → core → domain → application)
- Cross-bundle concept interoperability

To enable full cross-bundle resolution, add the okf-abstracts repo to your local marketplaces or place it alongside this repo.

## Install

Add the marketplace once from its git URL, then install through each harness's
UI or CLI. The marketplace lives at `https://www.github.com/Yoseph-Zuskin/AI-Product-Manager`.

### Codex

1. Add the marketplace (CLI):
   ```bash
   codex plugin marketplace add Yoseph-Zuskin/AI-Product-Manager
   ```
2. Install in the `/plugins` browser UI (marketplace tab), or via CLI:
   ```bash
   codex plugin add ai-product-manager@ai-product-manager
   ```
3. Restart the Codex desktop app (or reload plugins) after installing.

### Claude Code

1. Open `/plugin` and use the **Discover** tab (UI), or add the marketplace:
   ```bash
   /plugin marketplace add Yoseph-Zuskin/AI-Product-Manager
   ```
2. Install:
   ```bash
   /plugin install ai-product-manager@ai-product-manager
   ```

### ChatGPT (web UI)

1. Open ChatGPT → Plugins → **Add plugin** → **Custom** → paste: `https://www.github.com/Yoseph-Zuskin/AI-Product-Manager`
2. Trust the hooks when prompted (SessionStart, SubagentStart, UserPromptSubmit)

### GitHub Copilot CLI

```bash
copilot plugin marketplace add Yoseph-Zuskin/AI-Product-Manager
```

Then install via `/plugin`. In VS Code, marketplaces can also be registered in
user settings JSON:

```json
{
  "chat.plugins.enabled": true,
  "chat.plugins.marketplaces": [
    "Yoseph-Zuskin/AI-Product-Manager"
  ]
}
```

### Cursor

In Agent chat, run:

```text
/add-plugin https://www.github.com/Yoseph-Zuskin/AI-Product-Manager
```

Then select or enable `ai-product-manager` when Cursor prompts.

### Other Agents

Also available for: **Windsurf, OpenCode, Devin, Grok, Qoder, Pi, Gemini** — see `.windsurf/`, `.opencode/`, `.devin-plugin/`, `.grok-plugin/`, `.qoder-plugin/`, `pi-extension/`, `gemini-extension.json`.

## Quick Start

After installing, start a new thread and say:

> **Help me create a product strategy for my AI-powered feature**

The `ai-pm-index` skill routes to the appropriate workflow. For discovery, it invokes `ai-pm-discover`; for design, `ai-pm-design`; for architecture, `ai-pm-architect`, etc.

## Knowledge Bundle

The plugin includes an **OKF v0.2** knowledge bundle:

- **21 concepts** — AI product strategy, ML governance, pricing, architecture patterns, team topology, discovery, vision
- **19 skills** — Curated workflows with AGENTS.md routing rules (the 6 newest: `evals`, `platform`, `models`, `business-case`, `vendor`, `transform` — ship as `draft` pending human review)
- **11 templates** — PRD, ADR, RACI, Postmortem, Model Card, and others
- **Provenance** — Every concept cites sources from the two Kellogg programs

All content is synthesized from Professor Mohan Sawhney's Kellogg Executive Education materials (personal educational use per Emeritus terms).

## Harness Compatibility

| Harness | Config |
| --------- | -------- |
| Codex | `.codex-plugin/plugin.json` |
| Claude Code | `.claude-plugin/plugin.json` |
| Cursor | `.cursor/rules/ai-pm.md` |
| Windsurf | `.windsurf/rules/ai-pm.md` |
| OpenCode | `.opencode/plugins/ai-pm.mjs` |
| Devin | `.devin-plugin/plugin.json` |
| Grok | `.grok-plugin/plugin.json` |
| Qoder | `.qoder-plugin/plugin.json` |
| Pi | `pi-extension/` |
| Gemini | `gemini-extension.json` |
| Copilot | `.github/plugin.json` |

## Legal

- **License**: MIT — see [LICENSE](LICENSE)
- **Privacy**: [privacy.md](privacy.md) — local-only execution, no data collection
- **Terms**: [terms.md](terms.md) — MIT licensed, no warranty

## Source Attribution

This plugin synthesizes concepts from two Kellogg Executive Education certificate programs by Professor Mohan Sawhney:

- [AI Strategies for Business Transformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)
- [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)

Materials are for personal educational use per Emeritus terms. The plugin contains synthesized concepts, not verbatim transcripts.

## IP & Commercial Use Verdict

**This plugin is suitable for unrestricted commercial use.**

The knowledge bundle contains **original synthesized frameworks** — not verbatim course transcripts. Key evidence:

- **Original synthesized frameworks**: Decision tables (ML Paradigm Selection, Model Architecture & Deployment Topology, Infrastructure & Deployment Decisions), workflows, and templates are original syntheses with analysis
- **Proper attribution via sources**: All concepts cite Kellogg/Emeritus courses via `[^p1-xxx]` footnotes — proper scholarly attribution, not copying
- **Synthesis, not transcription**: Content synthesizes two courses into new frameworks (e.g., "AI Canvas 2.0's define phase deliberately keeps the solution out of view..." + "Enterprise mirror of the opportunity-analysis...") — synthesis with commentary, not transcription
- **No redistributable course materials**: No verbatim transcripts, slides, or copied course materials are included; named frameworks (AI Canvas 2.0, V2MOM, RWW, JTBD, AI Radar 2.0, CxDNA, CMM) appear only as original summaries with attribution

The MIT license applies to the plugin code, skills, templates, and synthesized concepts. The original Kellogg/Emeritus course materials remain under their respective terms (personal educational use only per Emeritus terms).

## Contributing

This is a personal knowledge bundle. Issues and PRs welcome for bug fixes and improvements. For major changes, open an issue first.

Before submitting, validate your change the same way releases are judged:

1. Mechanical gates (from the bundle root, with `okf-abstracts` checked out beside it):
   `validate_subtype.py --strict`, `check_consistency.py`, `check_links.py`, `check_newlines.py`
2. Adversarial review: run the [OKF Adversarial Review](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/skills/okf-adversarial-review/SKILL.md)
   skill against your bundle. It judges what validators cannot (true is-a links,
   contract quality, IP posture) and reports BLOCKING vs ADVISORY with a release
   verdict. Address every BLOCKING flag before submitting. New synthesis ships as
   `status: draft` until human-reviewed; only the owner promotes to `stable`.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.
