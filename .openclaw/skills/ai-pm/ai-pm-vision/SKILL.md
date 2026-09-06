---
name: ai-pm-vision
displayName: AI PM Vision
type: Skill
title: Product Vision Skill
description: Defines and communicates compelling product vision — north star articulation, V2MOM framework, strategy canvas, and AI-era vision that anchors teams on problem-focused north star.
user-invocable: true
argument-hint: "<product and horizon>"
allowed-tools: Read Write Edit Glob Grep
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
- product-vision
- vision
- strategy
- v2mom
- north-star
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
sources:
- id: r-business-department
  title: Business Department
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: r-machine-learning-algorithm
  title: Machine Learning Algorithm
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md
- id: r-software-system
  title: Software System
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md
---

# Product Vision Skill

Defines and communicates compelling product vision — north star articulation,
V2MOM framework, strategy canvas, andAI-era vision that anchors teams on problem-focused north star.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) skill.

## Workflow

### 1. Vision as Alignment Device

Vision anchors all downstream decision-making and prioritization. The C-suite's
"AI-powered enterprise" is the enterprise-level rendition of the PM's North Star.

### 2. Enterprise Vision (AI Strategies)

- 3-5 year picture of AI-powered enterprise
- Business outcomes to achieve, resource focus
- Three guiding questions per initiative/tech/people
- Where-to-play from proprietary data richness (AI Radar 2.0)
- Enterprise as value chain: front office, operations, support functions

### 3. Product Vision (AI-Driven Product Strategy)

- **North Star**: End state, who product becomes, value delivered
- **Mission**: Journey of what team does today to reach destination
- **Good Vision Tests**: Ambitious, inspiring, unique, enduring, vivid,

  explainable
- **Strategy Translation**: Customer problems → desirable/feasible/viable

  products
- **Frameworks**: V2MOM, Product Strategy Canvas (vision → mission → values →

  arenas → bets → competencies →
  metrics/hurdles)

### 4. Convergence: Vision as Double Duty

- Describes end state of intelligent, adaptive, personalized products
- Guides how PM works: analysis → orchestration, prompt engineering, model

  literacy, agent design, data product
  thinking, ethical oversight
- One-page statement, aspirational yet concrete, traceable to problem

### 5. AI Era Vision Competencies

- Prompt engineering
- Model literacy
- Agent design
- Data product thinking
- Ethical oversight

## Sources

[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)

[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)
[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md)

[^r-software-system]: [Software System](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md)

## Output

Present vision artifacts:

- One-page vision statement (aspirational yet concrete)
- V2MOM or Product Strategy Canvas
- Vision traceability: future state → problem → metrics
- Communication plan for stakeholder alignment

## Handoff

Route to [`ai-pm-discover`](../ai-pm-discover/SKILL.md) for opportunity validation, [`ai-pm-design`](../ai-pm-design/SKILL.md) for solution design,
[`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) for stakeholder rollout, [`ai-pm-transform`](../ai-pm-transform/SKILL.md) for multi-unit roadmaps and bet portfolios with kill rules.

## Contract

### Preconditions

- Product, planning horizon, and inputs (research, discovery) are available.

### Postconditions

- Vision statement plus V2MOM or strategy-canvas draft.

### Invariants

- Every V2MOM element traces to an input; horizon is stated, not implied.

## Verification

- Confirm the horizon is stated and every V2MOM element traces to a listed input.
- Confirm the vision is falsifiable (a future observer could tell if it failed).
- Confirm the Handoff names the next skill (usually [`ai-pm-design`](../ai-pm-design/SKILL.md) or [`ai-pm-architect`](../ai-pm-architect/SKILL.md)).
