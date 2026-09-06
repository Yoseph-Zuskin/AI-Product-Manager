---
name: ai-pm-discover
displayName: AI PM Discover
type: Skill
title: Product Discovery Skill
description: Executes product discovery workflows — JTBD framing, opportunity analysis, hypothesis testing, and opportunity sizing.
user-invocable: true
argument-hint: "<product or market>"
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
- product-discovery
- jtbd
- opportunity-analysis
- hypothesis-testing
- opportunity-sizing
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
sources:
- id: r-jobs-to-be-done
  title: Jobs To Be Done
  resource: ../../concepts/jobs-to-be-done.md
- id: r-product-discovery
  title: Product Discovery
  resource: ../../concepts/product-discovery.md
status: stable
stale_after: 2027-08-19
---

# Product Discovery Skill

Executes product discovery workflows — JTBD framing, opportunity analysis,
hypothesis testing, and opportunity sizing.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) skill.

## Workflow

### 1. Frame the Opportunity (JTBD)

- Identify the job the customer hires a product to do
- Capture persona, triggering situation, motivation, desired outcome
- Distinguish functional, emotional, social jobs
- Reference: [Jobs to Be Done](../../../../concepts/jobs-to-be-done.md)

  [^r-jobs-to-be-done]

### 2. Source Opportunities

- Customer complaints, call centers, sales feedback
- Competitive gaps, adjacent industry analogies
- Market/technology discontinuities (AI, regulatory)
- Reference: [Product Discovery](../../../../concepts/product-discovery.md)

  [^r-product-discovery]

### 3. Evaluate & Size

- Real-Win-Worth framework
- TAM/SAM/SOM (top-down) + economic-value-to-customer (bottom-up)
- High-opportunity jobs: important, unsatisfied, large/frequent
- Articulate via opportunity brief, solution resume, vision press release

  (PR/FAQ)

### 4. Hypothesis-Driven Discovery

- Define discovery hypotheses: persona, problem, product, value, WTP
- Prioritize make-or-break assumptions
- Think-make-check-iterate loop with 50 (B2B) / 500 (B2C) customers
- Pivot or persevere based on evidence

## Sources

[^r-jobs-to-be-done]: [Jobs To Be Done](../../../../concepts/jobs-to-be-done.md)

[^r-product-discovery]: [Product Discovery](../../../../concepts/product-discovery.md)

## Output

Present discovery artifacts:

- JTBD statements with persona/situation/motivation/outcome
- Opportunity brief with RWW evaluation
- TAM/SAM/SOM sizing with triangulation
- Opportunity hypothesis list prioritized by risk
- PR/FAQ vision press release for stakeholder alignment

## Handoff

Route to [`ai-pm-design`](../ai-pm-design/SKILL.md) for MVP/design, or [`ai-pm-architect`](../ai-pm-architect/SKILL.md) for architecture decisions.

## Contract

### Preconditions

- Problem space and target users are named; prior research loaded when available.

### Postconditions

- Ranked opportunities, each with a JTBD statement and supporting evidence.

### Invariants

- Every opportunity traces to cited evidence; ranking criterion is stated.

## Verification

- Confirm every opportunity has a JTBD statement and at least one cited evidence source.
- Confirm the ranking criterion is stated and applied consistently.
- Confirm the Handoff names the next skill (usually [`ai-pm-design`](../ai-pm-design/SKILL.md) or [`ai-pm-price`](../ai-pm-price/SKILL.md)).
