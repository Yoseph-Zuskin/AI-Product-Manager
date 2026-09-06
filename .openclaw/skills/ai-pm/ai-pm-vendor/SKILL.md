---
name: ai-pm-vendor
displayName: AI PM Vendor
type: Skill
title: Build-vs-Buy and Vendor Lifecycle
description: Runs build-vs-buy decisions, RFP scorecards, enterprise agreement reviews, and ongoing vendor oversight for AI providers and tooling.
user-invocable: true
argument-hint: "<capability to source>"
allowed-tools: Read Glob Grep
subtype_of:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
implements:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- vendor
- build-vs-buy
- rfp
- procurement
- ai-product-management
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: draft
stale_after: 2027-09-05
---

# Build-vs-Buy and Vendor Lifecycle

Decides what to build, what to buy, and how to keep vendors honest — from first scorecard to renewal leverage.

## Build-vs-Buy Frame

- Build when the capability is differentiating, durable, and cheaper at scale than rent.
- Buy when it is table stakes, evolving fast externally, or needed faster than hiring allows.
- Price both honestly: build TCO (team, time, maintenance, opportunity cost) vs buy TCO (fees at volume, integration, switching, oversight).

## RFP Scorecards

- Score capability fit, security posture, data rights (training use, retention, deletion), latency/SLOs, and exit cost — weighted before vendors reply.
- Require eval evidence: vendor benchmarks re-run on your golden set from [`ai-pm-evals`](../ai-pm-evals/SKILL.md), never accepted on slides.
- Reference checks with churned customers, not just logos.

## Enterprise Agreements

- Data processing terms, model-change notification clauses, SLA credits with teeth, price protections at volume growth.
- Residency and sovereignty commitments in writing; audit rights for regulated use.
- Renewal leverage planned at signing: dual-source options, export formats, contract end-date actions.

## Ongoing Oversight

- Key risk indicators per vendor: quality drift, incident rate, support responsiveness, price creep.
- Quarterly business reviews with scorecard deltas; remediation plans with dates, not vibes.
- Exit drills for critical vendors: prove portability before you need it.

## Workflow

1. **Frame the decision** — Differentiating vs table stakes; honest build and buy TCOs.
2. **Score the field** — Weighted RFP scorecard; vendor evals re-run on your data.
3. **Negotiate terms** — Data rights, change clauses, SLAs, residency, renewal leverage.
4. **Stand up oversight** — KRIs, QBR cadence, remediation paths.
5. **Plan the exit** — Portability proof for anything critical.

## Output

- Sourcing decision with TCO comparison, scorecard, agreement checklist, oversight plan.

## Handoff

Produces: sourcing decision with terms and oversight plan.
Routes to: [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) for P&L impact, [`ai-pm-models`](../ai-pm-models/SKILL.md) for provider benchmark evidence, [`ai-pm-transform`](../ai-pm-transform/SKILL.md) for client-vendor positioning.

## Contract

### Preconditions

- Capability to source with requirements (security, data rights, SLOs) stated.

### Postconditions

- Sourcing decision with TCO comparison, weighted scorecard, agreement terms, KRI oversight plan.

### Invariants

- No vendor claim accepted without evidence on your data; exit cost always quantified.

## Verification

- Confirm weights were set before vendors replied.
- Confirm data rights, change clauses, and SLAs appear in the terms checklist.
- Confirm the Handoff names the next skill.
