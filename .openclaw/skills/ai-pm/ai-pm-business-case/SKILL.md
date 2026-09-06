---
name: ai-pm-business-case
displayName: AI PM Business Case
type: Skill
title: ROI, TCO, and P&L Business Cases
description: Builds driver-based business cases for AI bets (benefits, full TCO including inference, NPV/IRR/payback, sensitivity) that survive Finance review.
user-invocable: true
argument-hint: "<AI bet and baseline>"
allowed-tools: Read Glob Grep
subtype_of:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
implements:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- business-case
- roi
- tco
- pnl
- ai-product-management
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: draft
stale_after: 2027-09-05
---

# ROI, TCO, and P&L Business Cases

Builds the driver-based case that turns an AI bet into funded reality — baseline vs challenger, full costs, and returns Finance can audit.

## Benefit Drivers

- Name benefit drivers explicitly: labor saved (hours times loaded cost), revenue lifted (conversion, retention, expansion), risk avoided (expected loss times probability).
- Baseline is the world without the bet, quantified — never zero, never vibes.
- Benefits phase in over adoption curves from [`ai-pm-transform`](../ai-pm-transform/SKILL.md), not day-one fantasies.

## Full TCO

- Build: engineering, data labeling, evals, integration, change management.
- Run: inference per task at volume (see [`ai-pm-platform`](../ai-pm-platform/SKILL.md) unit economics), data pipelines, monitoring, vendor fees, retraining.
- Hidden: exception handling labor, HITL review cost, compliance evidence work.
- Compare against vendor TCO from [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) before recommending build.

## Returns and Sensitivity

- NPV, IRR, and payback computed on driver ranges, not point estimates.
- Sensitivity bands on the three drivers that move the answer most; state the kill threshold (what observed value invalidates the case).
- P&L mapping: which line items move, when, and who owns each number.

## Defense

- Pre-empt Finance objections: adoption risk, cost overrun, benefit attribution.
- Every number traces to a sourced assumption; unknowns carry explicit ranges.
- One-page summary plus auditable appendix; never only a slide.

## Workflow

1. **Fix the baseline** — Quantify the world without the bet.
2. **Model drivers** — Benefits, phased by realistic adoption.
3. **Cost everything** — Build, run, and hidden TCO including inference at volume.
4. **Compute returns** — NPV/IRR/payback on ranges; sensitivity and kill thresholds.
5. **Prepare defense** — Objections, attribution, one-pager plus appendix.

## Output

- Business case: baseline, drivers, TCO, returns, sensitivity, P&L mapping, defense notes.

## Handoff

Produces: Finance-grade business case.
Routes to: [`ai-pm-transform`](../ai-pm-transform/SKILL.md) for portfolio sequencing, [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) for buy-side numbers, [`ai-pm-communicate`](../ai-pm-communicate/SKILL.md) for the funding narrative.

## Contract

### Preconditions

- AI bet and measurable baseline; volume and adoption assumptions statable.

### Postconditions

- Business case with baseline, drivers, full TCO, returns on ranges, sensitivity, kill thresholds, P&L mapping.

### Invariants

- Every number traces to a sourced assumption; ranges, never unsupported points.

## Verification

- Confirm baseline is quantified and non-zero.
- Confirm inference-at-volume appears in TCO with a stated unit cost.
- Confirm kill thresholds name the observed values that invalidate the case.
