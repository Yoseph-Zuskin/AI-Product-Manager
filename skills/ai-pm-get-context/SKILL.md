---
type: Concept
title: Get Context Skill
description: Loads product context, saved references, and OKF concept references into the agent's working memory before any other skill executes.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- context-loading
- preflight
- product-context
- reference-loading
- initialization
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
---
# Get Context Skill

Loads product context, saved references, and OKF concept references into the agent's working memory before any other skill executes.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## User Context

Before starting, load [user-context](#) and run its preflight script when local shell access is available.

Attach provided product URLs, Figma files, screenshots, reference images, codebase paths, Storybook, tokens, design systems, brand assets, component refs, browser preferences, and share targets to the context.

## Workflow

1. **Run preflight script** — Execute `scripts/get-context.sh` to load context
2. **Load OKF references** — Load concept references from `references/` and okf-abstracts
3. **Load templates** — Load templates from `templates/`
4. **Check local design context** — Look for Storybook, design-system/, tokens/, components/
5. **Output summary** — Present loaded context to user

## Preflight Script

Run `scripts/get-context.sh` which:

1. Loads user-saved product context (URLs, Figma, screenshots, codebase paths)
2. Loads OKF concept references from `references/` and okf-abstracts
3. Loads templates (ADR, Model Card, PRD, RACI, Postmortem)
4. Checks for local design context (Storybook, design-system/, tokens/, components/)
5. Outputs summary for agent consumption

## Output

Present context summary to user:

```text

=== AI-PM Context Loaded ===
Plugin: ai-product-manager
References: ./references
Templates: ./templates
OKF Abstracts: <https://github.com/Yoseph-Zuskin/okf-abstracts> (v0.1.0)
Available skills:
  discover  - Product discovery, JTBD, opportunity analysis
  design    - Product design, MVP, wireframes (+ @product-design.ideate)
  architect - AI architecture, ML paradigm, infra decisions
  govern    - ML model governance, responsible AI
  team      - Cross-functional team topology, RACI
  research  - User research, competitive analysis
  price     - Pricing strategy, monetization
  grow      - PLG, retention, growth loops
  communicate - Stakeholder communication, influence
  vision    - Product vision, V2MOM, strategy canvas
  audit     - Product audits, responsible AI checks
  get-context - Load product context, references

Context loaded. Ready for @ai-pm <skill> <task>

```

## Output Protocol

After loading context, stop and await user's skill selection:

`@ai-pm <skill> <task>`

Do not proceed to other skills until context is confirmed loaded.
