---
type: Concept
title: AI Product Manager Skill Router
description: Routes user requests to the appropriate AI Product Manager skill based on the task type and context.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- router
- skill-router
- ai-product-manager
- skill-orchestration
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
---
# AI Product Manager Skill Router

Routes user requests to the appropriate AI Product Manager skill based on the task type and context.

## Routing Rules

Analyze the user's request and route to the appropriate skill:

| User Intent | Route to Skill |
| --- | --- |
| Product discovery, JTBD, opportunity analysis, market sizing | `ai-pm-discover` |
| Product design, MVP, wireframes, user stories, prototyping | `ai-pm-design` |
| AI architecture, ML paradigm selection, infrastructure decisions | `ai-pm-architect` |
| AI deployment patterns, model serving, monitoring, rollback | `ai-pm-architect` |
| ML model governance, model registry, compliance, responsible AI | `ai-pm-govern` |
| Team topology, RACI, collaboration rhythms, decision rights | `ai-pm-team` |
| User research, competitive analysis, win/loss analysis | `ai-pm-research` |
| Pricing strategy, monetization, packaging, SaaS economics | `ai-pm-price` |
| PLG loops, retention, activation, expansion | `ai-pm-grow` |
| Stakeholder communication, influence without authority | `ai-pm-communicate` |
| Product vision, V2MOM, strategy canvas, north star | `ai-pm-vision` |
| Product audits, responsible AI checks, bias/fairness audits | `ai-pm-audit` |
| Load product context, saved URLs, Figma, screenshots, codebase paths | `ai-pm-get-context` |

## Routing Logic

1. **Identify primary intent** from user's primary verb/noun
2. **Check for multi-skill needs** (e.g., "design and deploy" → `ai-pm-design` then `ai-pm-architect`)
3. **Default to `ai-pm-get-context`** if context is unclear or missing
4. **Confirm with user** before routing if ambiguous

## Handoff Protocol

When routing, acknowledge the selected skill:

> "Routing to `<skill>` skill for [brief reason]. One moment..."

Then invoke the target skill via `@ai-pm <skill> <task>`.

## Skill Dependencies

| Skill | Often Follows | Often Precedes |
| --- | --- | --- |
| `ai-pm-get-context` | (first) | All others |
| `ai-pm-discover` | `ai-pm-get-context` | `ai-pm-design`, `ai-pm-price` |
| `ai-pm-design` | `ai-pm-discover` | `ai-pm-architect` |
| `ai-pm-architect` | `ai-pm-design` | `ai-pm-govern`, `ai-pm-grow` |
| `ai-pm-govern` | `ai-pm-architect` | `ai-pm-audit` |
| `ai-pm-grow` | `ai-pm-architect`, `ai-pm-price` | `ai-pm-communicate` |
| `ai-pm-communicate` | `ai-pm-grow` | (ongoing) |
| `ai-pm-vision` | `ai-pm-discover` | `ai-pm-design`, `ai-pm-architect` |
| `ai-pm-audit` | `ai-pm-govern` | (ongoing) |
| `ai-pm-price` | `ai-pm-discover` | `ai-pm-grow` |
| `ai-pm-research` | `ai-pm-get-context` | `ai-pm-discover` |
| `ai-pm-team` | `ai-pm-get-context` | `ai-pm-design`, `ai-pm-govern` |
