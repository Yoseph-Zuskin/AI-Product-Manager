---
name: ai-pm-index
displayName: AI PM Index
type: Skill
title: AI Product Manager Skill Router
description: Routes user requests to the appropriate AI Product Manager skill based on the task type and context.
user-invocable: true
argument-hint: "<user request>"
allowed-tools: Read Glob Grep
subtype_of:
- type: Skill
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md
  version: v0.1.0
implements:
- type: Skill
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md
  version: v0.1.0
generated:
  by: human:yoseph-zuskin
  at: '2026-08-19T12:00:00Z'
verified:
- by: human:yoseph-zuskin
  at: '2026-08-19T12:05:00Z'
- by: opencode/deepseek-v4-flash-free
  at: '2026-08-19T12:06:00Z'
- by: opencode/nemotron-3-ultra-free
  at: '2026-08-23T16:40:30Z'
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
| Product discovery, JTBD, opportunity analysis, market sizing | [`ai-pm-discover`](../ai-pm-discover/SKILL.md) |
| Product design, MVP, wireframes, user stories, prototyping | [`ai-pm-design`](../ai-pm-design/SKILL.md) |
| AI architecture, ML paradigm selection, infrastructure decisions | [`ai-pm-architect`](../ai-pm-architect/SKILL.md) |
| AI deployment patterns, model serving, monitoring, rollback | [`ai-pm-architect`](../ai-pm-architect/SKILL.md) |
| ML model governance, model registry, compliance, responsible AI | [`ai-pm-govern`](../ai-pm-govern/SKILL.md) |
| Team topology, RACI, collaboration rhythms, decision rights | [`ai-pm-team`](../ai-pm-team/SKILL.md) |
| User research, competitive analysis, win/loss analysis | [`ai-pm-research`](../ai-pm-research/SKILL.md) |
| Pricing strategy, monetization, packaging, SaaS economics | [`ai-pm-price`](../ai-pm-price/SKILL.md) |
| PLG loops, retention, activation, expansion | [`ai-pm-grow`](../ai-pm-grow/SKILL.md) |
| Stakeholder communication, influence without authority | [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) |
| Product vision, V2MOM, strategy canvas, north star | [`ai-pm-vision`](../ai-pm-vision/SKILL.md) |
| Product audits, responsible AI checks, bias/fairness audits | [`ai-pm-audit`](../ai-pm-audit/SKILL.md) |
| Load product context, saved URLs, Figma, screenshots, codebase paths | [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) |
| Eval design, golden datasets, LLM-judge calibration, regression gates | [`ai-pm-evals`](../ai-pm-evals/SKILL.md) |
| API/SDK design, console, sandbox, token economics | [`ai-pm-platform`](../ai-pm-platform/SKILL.md) |
| Model selection, benchmarking, RAG/agent reliability, prompt lifecycle | [`ai-pm-models`](../ai-pm-models/SKILL.md) |
| ROI/TCO business cases, NPV/IRR, P&L impact | [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) |
| Build-vs-buy, RFPs, vendor terms and oversight | [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) |
| Multi-unit roadmaps, bet portfolios, board narratives, change and delivery | [`ai-pm-transform`](../ai-pm-transform/SKILL.md) |

## Routing Logic

1. **Identify primary intent** from user's primary verb/noun
2. **Check for multi-skill needs** (e.g., "design and deploy" → [`ai-pm-design`](../ai-pm-design/SKILL.md) then [`ai-pm-architect`](../ai-pm-architect/SKILL.md))
3. **Default to [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md)** if context is unclear or missing
4. **Confirm with user** before routing if ambiguous

## Handoff

When routing, acknowledge the selected skill:

> "Routing to `<skill>` skill for [brief reason]. One moment..."

Then invoke the target skill via `@ai-pm <skill> <task>`.

## Skill Dependencies

| Skill | Often Follows | Often Precedes |
| --- | --- | --- |
| [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) | (first) | All others |
| [`ai-pm-discover`](../ai-pm-discover/SKILL.md) | [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) | [`ai-pm-design`](../ai-pm-design/SKILL.md), [`ai-pm-price`](../ai-pm-price/SKILL.md) |
| [`ai-pm-design`](../ai-pm-design/SKILL.md) | [`ai-pm-discover`](../ai-pm-discover/SKILL.md) | [`ai-pm-architect`](../ai-pm-architect/SKILL.md) |
| [`ai-pm-architect`](../ai-pm-architect/SKILL.md) | [`ai-pm-design`](../ai-pm-design/SKILL.md) | [`ai-pm-govern`](../ai-pm-govern/SKILL.md), [`ai-pm-grow`](../ai-pm-grow/SKILL.md) |
| [`ai-pm-govern`](../ai-pm-govern/SKILL.md) | [`ai-pm-architect`](../ai-pm-architect/SKILL.md) | [`ai-pm-audit`](../ai-pm-audit/SKILL.md) |
| [`ai-pm-grow`](../ai-pm-grow/SKILL.md) | [`ai-pm-architect`](../ai-pm-architect/SKILL.md), [`ai-pm-price`](../ai-pm-price/SKILL.md) | [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) |
| [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) | [`ai-pm-grow`](../ai-pm-grow/SKILL.md) | (ongoing) |
| [`ai-pm-vision`](../ai-pm-vision/SKILL.md) | [`ai-pm-discover`](../ai-pm-discover/SKILL.md) | [`ai-pm-design`](../ai-pm-design/SKILL.md), [`ai-pm-architect`](../ai-pm-architect/SKILL.md) |
| [`ai-pm-audit`](../ai-pm-audit/SKILL.md) | [`ai-pm-govern`](../ai-pm-govern/SKILL.md) | (ongoing) |
| [`ai-pm-price`](../ai-pm-price/SKILL.md) | [`ai-pm-discover`](../ai-pm-discover/SKILL.md) | [`ai-pm-grow`](../ai-pm-grow/SKILL.md) |
| [`ai-pm-research`](../ai-pm-research/SKILL.md) | [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) | [`ai-pm-discover`](../ai-pm-discover/SKILL.md) |
| [`ai-pm-team`](../ai-pm-team/SKILL.md) | [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) | [`ai-pm-design`](../ai-pm-design/SKILL.md), [`ai-pm-govern`](../ai-pm-govern/SKILL.md) |
| [`ai-pm-evals`](../ai-pm-evals/SKILL.md) | [`ai-pm-architect`](../ai-pm-architect/SKILL.md), [`ai-pm-models`](../ai-pm-models/SKILL.md) | [`ai-pm-govern`](../ai-pm-govern/SKILL.md), [`ai-pm-audit`](../ai-pm-audit/SKILL.md) |
| [`ai-pm-platform`](../ai-pm-platform/SKILL.md) | [`ai-pm-architect`](../ai-pm-architect/SKILL.md) | [`ai-pm-price`](../ai-pm-price/SKILL.md), [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) |
| [`ai-pm-models`](../ai-pm-models/SKILL.md) | [`ai-pm-evals`](../ai-pm-evals/SKILL.md) | [`ai-pm-architect`](../ai-pm-architect/SKILL.md), [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) |
| [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) | [`ai-pm-price`](../ai-pm-price/SKILL.md), [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) | [`ai-pm-transform`](../ai-pm-transform/SKILL.md) |
| [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) | [`ai-pm-models`](../ai-pm-models/SKILL.md) | [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md), [`ai-pm-transform`](../ai-pm-transform/SKILL.md) |
| [`ai-pm-transform`](../ai-pm-transform/SKILL.md) | [`ai-pm-vision`](../ai-pm-vision/SKILL.md), [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) | [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) |

## Workflow

1. **Capture the request** — Read the user's full request plus any loaded product context.
2. **Match intent** — Compare against Routing Rules; pick the single best-fit skill.
3. **Check sequencing** — If the task spans skills, consult Skill Dependencies for order.
4. **Route with reason** — Emit the Handoff message naming the skill and the matched intent.

## Output

- Named target skill (or ordered sequence) with the matched intent as reason.

## Contract

### Preconditions

- User request text is available; product context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) when the request references an existing product or assets.

### Postconditions

- Exactly one target skill named with the matched intent as reason; multi-skill requests get an ordered sequence.

### Invariants

- Never executes the target skill's work inline; ambiguous requests are confirmed with the user, never guessed.

## Verification

- Route three sample intents (discovery, pricing, vision) and confirm each lands on the Routing Rules skill.
- Confirm the Handoff message names the skill and the matched intent before any target-skill work.
- Confirm ambiguous requests produce a clarification question, not a guess.
