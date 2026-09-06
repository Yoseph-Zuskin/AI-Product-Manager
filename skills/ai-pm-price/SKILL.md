---
name: ai-pm-price
displayName: AI PM Price
type: Skill
title: Pricing Strategy Skill
description: Defines pricing strategy, monetization models, packaging, and value capture frameworks for AI products.
user-invocable: true
argument-hint: "<product and packaging>"
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
- pricing
- monetization
- packaging
- saas-economics
- value-capture
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
- id: r-machine-learning-algorithm
  title: Machine Learning Algorithm
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md
- id: r-software-system
  title: Software System
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md
---

# Pricing Strategy Skill

Defines pricing strategy, monetization models, packaging, and value capture frameworks for AI products.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) skill.

## Workflow

### 1. Pricing as Strategic Lever

- Small improvements in price optimization yield outsized operating-profit gains
- Pricing decisions ripple across customer life cycle: acquisition (WTP), retention (delivered value), expansion (upsell/cross-sell)
- Pricing is an ongoing capability, not a one-time decision

### 2. Pricing Model Evolution

| Model | Description | Best For |
| --- | --- | --- |
| Perpetual License | One-time fee, perpetual use | Legacy on-prem |
| Subscription | Recurring fee, continuous access | SaaS standard |
| Usage-Based | Pay per API call, token, compute | AI APIs, infrastructure |
| Outcome-Based | Pay per successful outcome | High-value, measurable outcomes |
| Hybrid | Mixed models | Complex products |

### 3. SaaS Economics

- Cash-flow trough: early growth looks like losses
- Health rules: LTV > 3x CAC, payback < 12 months, Rule of 40 (growth + margin)
- Unit economics: CAC, LTV, churn, expansion revenue

### 4. Monetization Mechanics

- **Freemium**: Free tier showcases value, premium monetizes subset
- **Free Trials**: Limited-time full access when product sells itself
- **Paywalls**: Value inflection points via behavioral triggers
- **Packaging**: SKUs aligned to segments; each tier adds genuine new functionality

### 5. AI-Specific Pricing

- AI Impact Model predicts business value before investment
- What-if simulation optimizes score by testing controllable levers
- Leadership clarity and well-structured problems separate high/low impact

## Sources

[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)

[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md)
[^r-software-system]: [Software System](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md)

## Output

Present pricing strategy:

- Recommended model with rationale
- Packaging tiers with feature/value mapping
- SaaS health metrics and targets
- What-if scenarios for key levers

## Handoff

Route to [`ai-pm-grow`](../ai-pm-grow/SKILL.md) for PLG/retention loops, [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) for pricing communication, [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) for full ROI/TCO/P&L cases including inference costs.

## Contract

### Preconditions

- Product, packaging options, and cost basis are available.

### Postconditions

- Pricing recommendation with unit economics and stated assumptions.

### Invariants

- Every number traces to a listed assumption; competitor claims cite sources.

## Verification

- Confirm unit economics are shown and every number traces to a listed assumption.
- Confirm competitor figures cite sources.
- Confirm the Handoff names the next skill (usually [`ai-pm-grow`](../ai-pm-grow/SKILL.md)).
