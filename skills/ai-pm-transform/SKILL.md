---
name: ai-pm-transform
displayName: AI PM Transform
type: Skill
title: AI Transformation, Portfolio, and Executive Narrative
description: Sequences multi-unit AI roadmaps, manages bet portfolios with kill rules, crafts board narratives, and runs change, literacy, and client-delivery playbooks.
user-invocable: true
argument-hint: "<transformation scope>"
allowed-tools: Read Write Edit Glob Grep
subtype_of:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
implements:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- transformation
- portfolio
- executive-narrative
- change-management
- ai-literacy
- ai-product-management
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: draft
stale_after: 2027-09-05
---

# AI Transformation, Portfolio, and Executive Narrative

Turns scattered AI bets into a sequenced transformation: portfolio discipline, board-grade narrative, adoption that sticks, and client delivery that expands.

## Multi-Unit Roadmapping

- Sequence across business units by dependency and payoff: platform capabilities before unit-specific bets, quick credibility wins before heavy lifts.
- Each roadmap item names owner, funding source, and the decision it needs — roadmaps without decisions are wallpapers.
- Internal adoption instrumented like product: activation, sustained use, task-time saved.

## Bet Portfolio and Kill Rules

- Portfolio view: each bet with business case ([`ai-pm-business-case`](../ai-pm-business-case/SKILL.md)), stage, spend, and next decision date.
- Kill rules set at funding: the observed values that trigger scale-back or shutdown.
- Rebalance cadence: promote winners, kill losers, cap work-in-progress — portfolio review is a decisions meeting, not a status meeting.

## Board Narrative

- Structure: where we win, what changes, what it costs, what returns, what could go wrong — in that order.
- One number per claim; appendix for the rest. Boards fund clarity, not completeness.
- Investor mindset for commercial stories: market, moat, money, milestones.

## Change and Literacy

- Stakeholder-impact mapping per affected role: what changes, what they gain, what support they get.
- Literacy curricula by persona (executives, managers, practitioners): what AI can/can't do here, how to use the new tools, where humans stay in the loop.
- Pilot-to-scale playbooks: super-users, feedback loops, human-in-the-loop off-ramps, adoption metrics before rollout.

## Client Delivery

- Discovery-to-SOW translation: objectives to scope, boundaries, acceptance criteria, resourcing.
- Workshop design and facilitation: positioning, needs assessment, co-creation sessions.
- Expectation management under probabilistic AI: commit to process and guardrails, never to model perfection; expand accounts on delivered outcomes.

## Workflow

1. **Inventory bets** — Collect active and proposed AI work with owners and spend.
2. **Sequence the roadmap** — Dependencies first, credibility wins early, decisions attached.
3. **Set kill rules** — Fund with pre-committed scale/kill thresholds per bet.
4. **Build the narrative** — Board story plus commercial variant where needed.
5. **Drive adoption and delivery** — Literacy, pilots, client SOWs, expansion on outcomes.

## Output

- Transformation roadmap with sequenced bets, kill rules, board narrative, adoption and delivery playbooks.

## Handoff

Produces: transformation roadmap with narrative and playbooks.
Routes to: [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) per-bet funding, [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) for narrative delivery, [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) for partnership needs.

## Contract

### Preconditions

- Transformation scope (units, bets, or client engagement) with sponsors identified.

### Postconditions

- Roadmap with sequenced bets, kill rules, board narrative, adoption metrics, delivery playbooks.

### Invariants

- Every bet has an owner and a kill rule; every claim in the narrative traces to a number.

## Verification

- Confirm each roadmap item names owner, funding, and the decision it needs.
- Confirm kill rules state observable thresholds, not intentions.
- Confirm the Handoff names the next skill.
