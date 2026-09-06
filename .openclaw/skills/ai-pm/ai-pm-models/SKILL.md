---
name: ai-pm-models
displayName: AI PM Models
type: Skill
title: Model Selection, RAG, Agents, and Prompt Lifecycle
description: Selects and benchmarks models (prompt vs RAG vs fine-tune), hardens RAG and agent reliability, and manages prompts as versioned assets.
user-invocable: true
argument-hint: "<AI use case and constraints>"
allowed-tools: Read Glob Grep
subtype_of:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
implements:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- model-selection
- benchmarking
- rag
- agents
- prompt-engineering
- ai-product-management
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
sources:
- id: r-model
  title: Model
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/model.md
status: draft
stale_after: 2027-09-05
---

# Model Selection, RAG, Agents, and Prompt Lifecycle

Chooses how AI capability gets built (prompt, RAG, fine-tune, dedicated deploy)[^r-model] on quality/latency/cost evidence, then hardens the chosen path.

## Decision Tree

- **Prompt-only** when the base model already knows the task; cheapest to change, weakest on private knowledge.
- **RAG** when answers must ground in owned content; pay retrieval complexity for freshness without training.
- **Fine-tune** when behavior must shift systematically (tone, format, domain reasoning) and evals prove the gain persists.
- **Dedicated deploy** when volume, latency, or data-control demands it; price against MaaS at scale.
- Decide on benchmark evidence from [`ai-pm-evals`](../ai-pm-evals/SKILL.md), never on vibes; record rejected options with reasons.

## Benchmarking Protocol

- Fix the eval set first; compare frontier options on identical inputs.
- Score quality, latency (P50/P99), and cost per task together — single-axis comparisons mislead.
- Pin versions; re-run on provider model updates and deprecations.

## RAG Levers

- Chunking matched to content structure; embeddings fit to domain; rerank before generation.
- Citations required in outputs; ungrounded answers labeled, not hidden.
- Retrieval quality measured separately from generation quality (different failures, different fixes).

## Agent Reliability

- Tool definitions narrow and typed; sandbox side effects; explicit multi-step planning with checkpoints.
- Context managed as budget: summarize, truncate, and escalate to human-in-the-loop on low confidence.
- Long-horizon tasks decomposed with verifiable intermediate states.

## Prompt Lifecycle

- Prompts live in a versioned template library with owners, changelogs, and rollback.
- Every prompt change runs the eval gate; improvements must beat the pinned baseline.
- Optimization is eval-tied iteration (examples, structure, constraints), not adjective stuffing.

## Workflow

1. **Frame the choice** — Use case, quality bar, latency and cost constraints.
2. **Benchmark** — Shortlist options on a fixed eval set across quality, latency, cost.
3. **Decide with evidence** — Pick prompt, RAG, fine-tune, or dedicated; record rejections.
4. **Harden the path** — Apply the RAG, agent, or prompt levers for the chosen route.
5. **Pin and monitor** — Version everything; re-run benchmarks on provider changes.

## Output

- Model decision with benchmark evidence and rejected alternatives.
- Hardening plan (RAG/agent/prompt levers) plus versioning and monitoring rules.

## Handoff

Produces: model decision with evidence and hardening plan.
Routes to: [`ai-pm-evals`](../ai-pm-evals/SKILL.md) for the eval set, [`ai-pm-architect`](../ai-pm-architect/SKILL.md) for serving, [`ai-pm-vendor`](../ai-pm-vendor/SKILL.md) for provider terms.

## Contract

### Preconditions

- AI use case with quality bar and latency/cost constraints; eval set available or buildable via [`ai-pm-evals`](../ai-pm-evals/SKILL.md).

### Postconditions

- Model decision with benchmark evidence, rejected alternatives, and hardening plan.

### Invariants

- No model choice without benchmark evidence; versions pinned, never floating.

## Verification

- Confirm quality, latency, and cost are all scored (no single-axis decisions).
- Confirm rejected options are recorded with reasons.
- Confirm the Handoff names the next skill.

[^r-model]: [Model](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/model.md)
