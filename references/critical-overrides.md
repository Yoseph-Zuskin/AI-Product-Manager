---
type: Template
title: Critical Overrides
description: Critical overrides and routing rules for AI-PM plugin skills
tags:
- overrides
- routing
- critical-rules
- plugin-configuration
status: stable
stale_after: 2027-08-19
---
# Critical Overrides for AI-PM Plugin Skills

## General Overrides

- **Single Agent**: All 13 skills managed by single agent `agents/ai-pm.md`
- **Cross-Plugin Skills**: Leverage `@product-design.*` for design capabilities
- **ML-Specific Skills**: Defer to future `ai-ml-engineer` plugin for deep ML skills

## Skill-Specific Overrides

### get-context

- Must run before any other skill
- Runs `scripts/get-context.sh` preflight
- Loads user context, OKF references, templates

### architect

- Folds in deployment concerns (no separate `deploy` skill)
- Runs `scripts/validate-adr.sh` after ADR creation
- ML paradigm selection is core responsibility

### govern

- ML model governance + responsible AI combined
- Promotion gates: dev → staging → prod with gates
- Model retirement/sunsetting process

### design

- Leverages `@product-design.ideate` for visual ideation
- Leverages `@product-design.image-to-code` for prototype implementation
- Double diamond process + MVX concept

### deploy

- **Folded into `architect`** — deployment topology is an architectural decision
- PM's Deployment Checklist lives in `architect` skill

### audit

- Leverages `@product-design.audit` for UX/design audits
- Four audit types: UX, Responsible AI, ML Health, Technical Debt

## Cross-Plugin Integration

| This Plugin | External Plugin | Skills Used |
| --- | --- | --- |
| ai-product-manager | product-design | ideate, image-to-code, audit, research |

## OKF Compliance

- All skill files use OKF v0.2 frontmatter
- `subtypes_of` references okf-abstracts v0.1.0 via full GitHub URLs
- `sources` array with proper IDs
- `verified` array with 3 entries (human + 2 agents)
- References in `references/` are OKF Template type concepts
