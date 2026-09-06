---
name: ai-pm-platform
displayName: AI PM Platform
type: Skill
title: AI Platform, API, and Developer Experience
description: Designs AI platform surfaces (APIs, SDKs, console, sandbox, billing) and token/inference economics (metering, caching, spend controls).
user-invocable: true
argument-hint: "<platform surface or pricing question>"
allowed-tools: Read Glob Grep
subtype_of:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
implements:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- platform
- api
- developer-experience
- token-economics
- ai-product-management
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: draft
stale_after: 2027-09-05
---

# AI Platform, API, and Developer Experience

Designs the surfaces developers touch (APIs, SDKs, console, sandbox, docs, billing) and the unit economics underneath (tokens, caching, spend controls).

## API Primitives

- REST plus streaming and state primitives for long-running agent work; every endpoint documented with error taxonomy.
- Versioning and compatibility policy stated up front: deprecation windows, migration guides, breaking-change discipline.
- Rate limits, quotas, and regional processing/residency as first-class design, not afterthoughts.

## SDK Ergonomics and Console

- SDKs that minimize time-to-first-200: auth in one step, sensible defaults, runnable examples per use case.
- Console covering credentials, usage observability, sandbox with test keys, and self-serve upgrades.
- Docs, changelog, and status page owned as product surfaces with success metrics (integration completion, upgrade friction).

## Enterprise Controls

- Auth (SSO/SAML, SCIM), roles and permissions, audit logs, retention and encryption controls.
- Admin tooling for spend limits, budget alerts, and team management.

## Token Economics

- Per-token unit economics: input/output/blended cost per task, cache-hit modeling, margin per tier.
- Cost attribution dashboards: per-key, per-team, per-feature metering with alerts and budgets.
- Levers named explicitly: prompt compression, caching, smaller-model routing, batch vs realtime.

## Workflow

1. **Map the developer journey** — From signup to first production call; name every friction point.
2. **Spec the surface** — Endpoints, SDK shape, console pages, sandbox behavior.
3. **Design controls** — Auth, limits, residency, admin tooling for the target segment.
4. **Model economics** — Unit cost per task, cache assumptions, margin per tier.
5. **Define DX metrics** — Time-to-first-200, integration completion, upgrade friction, cost predictability.

## Output

- Platform spec: API/SDK/console design plus enterprise controls.
- Token-economics model with attribution and levers.

## Handoff

Produces: platform spec and token-economics model.
Routes to: [`ai-pm-architect`](../ai-pm-architect/SKILL.md) for serving choices, [`ai-pm-price`](../ai-pm-price/SKILL.md) for packaging, [`ai-pm-business-case`](../ai-pm-business-case/SKILL.md) for P&L impact.

## Contract

### Preconditions

- Target developer segment and platform surface (or pricing question) are stated.

### Postconditions

- Platform spec plus token-economics model with attribution and named levers.

### Invariants

- Every control (auth, limits, residency) is designed, not deferred; every cost number traces to an assumption.

## Verification

- Confirm the developer journey has no step without an owner surface (docs, console, or SDK).
- Confirm unit economics show per-task cost, cache assumptions, and margin.
- Confirm the Handoff names the next skill.
