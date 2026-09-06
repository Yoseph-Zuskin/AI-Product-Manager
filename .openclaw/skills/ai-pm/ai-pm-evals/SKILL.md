---
name: ai-pm-evals
displayName: AI PM Evals
type: Skill
title: AI Evaluation Design and Quality Operations
description: Designs eval harnesses for AI features (golden datasets, rubrics, LLM-judge calibration, regression gates) and runs the production-telemetry failure loop.
user-invocable: true
argument-hint: "<AI feature and quality bar>"
allowed-tools: Read Glob Grep
subtype_of:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
implements:
- { type: Skill, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- evals
- quality
- llm-judge
- regression
- ai-product-management
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: draft
stale_after: 2027-09-05
---

# AI Evaluation Design and Quality Operations

Designs eval harnesses that prove an AI feature meets its quality bar before launch and keep it there after every model or prompt change.

## Eval Dimensions

Scope what quality means for the feature before building anything:

- **Correctness** — factual accuracy, grounded citations, task completion.
- **Instruction following** — constraint adherence, format compliance, refusal calibration.
- **Robustness** — paraphrase stability, adversarial inputs (prompt injection, jailbreaks), edge-case behavior.
- **Multi-turn coherence** — context retention, goal tracking, graceful recovery across turns.

## Golden Datasets and Rubrics

- Build a golden set per dimension: 50-200 anchored examples with expected outputs, sampled from real usage, not imagined cases.
- Write rubrics with anchored levels (pass/borderline/fail with examples), never bare 1-5 scales.
- Version datasets like code; record provenance (source, date, annotator agreement rate).

## Tiered Pipeline

1. **Fast gate** — LLM-as-judge on the full golden set, every prompt or model change.
2. **Calibrated review** — human grades a sampled subset; track judge-human agreement, recalibrate below 85%.
3. **Regression gate** — no promotion on quality drops; failures enter the failure taxonomy.

## Failure Loop

Production telemetry (thumbs-down, escalations, rewrites, support tickets) feeds failure analysis, which expands the golden set and reprioritizes the backlog. Evals grow with the product; a static eval set is a decaying one.

## Workflow

1. **Scope dimensions** — Pick the 2-4 quality dimensions that define done for this feature.
2. **Build golden set** — Sample real inputs, write expected outputs and anchored rubrics.
3. **Stand up pipeline** — Fast LLM-judge gate plus calibrated human review cadence.
4. **Set the bar** — Pass thresholds per dimension; wire into promotion gates.
5. **Close the loop** — Route production failures back into taxonomy and dataset expansion.

## Output

- Eval plan: dimensions, golden-set spec, rubrics, pass bars.
- Regression-gate definition wired to the release process.

## Handoff

Produces: eval plan with rubrics and pass bars.
Routes to: [`ai-pm-architect`](../ai-pm-architect/SKILL.md) for model changes, [`ai-pm-govern`](../ai-pm-govern/SKILL.md) for quality-gate enforcement, [`ai-pm-audit`](../ai-pm-audit/SKILL.md) for periodic quality review.

## Contract

### Preconditions

- AI feature and quality bar (or draft bar) are stated; sample production inputs exist or are constructible.

### Postconditions

- Eval plan with dimensions, golden-set spec, anchored rubrics, and pass bars; regression gate defined.

### Invariants

- Every quality claim traces to a dimension with a rubric; no promotion past a red gate.

## Verification

- Confirm every dimension has a rubric with anchored pass/borderline/fail examples.
- Confirm judge-human agreement is measured with a recalibration threshold.
- Confirm the Handoff names the next skill.
