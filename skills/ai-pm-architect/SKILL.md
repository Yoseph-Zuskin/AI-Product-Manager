---
name: ai-pm-architect
displayName: AI PM Architect
type: Skill
title: AI Architect Skill
description: Makes and documents architectural decisions for AI products — ML paradigm selection, system topology, infrastructure choices, deployment patterns, and ML-specific architectural concerns.
user-invocable: true
argument-hint: "<AI use case>"
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
- ai-architecture
- architecture-decisions
- architecture-pattern
- ml-paradigm
- infrastructure
- deployment-topology
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
sources:
- id: r-architecture-pattern
  title: Architecture Pattern
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/architecture-pattern.md
- id: r-machine-learning-algorithm
  title: Machine Learning Algorithm
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md
- id: r-software-system
  title: Software System
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md
- id: r-cloud-infrastructure
  title: Cloud Infrastructure
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/cloud-infrastructure.md
- id: r-on-premise-infrastructure
  title: On-Premise Infrastructure
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/on-premise-infrastructure.md
- id: r-software-development-lifecycle
  title: Software Development Lifecycle
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-development-lifecycle.md
- id: r-security-control
  title: Security Control
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/security-control.md
status: stable
stale_after: 2027-08-19
---

# AI Architect Skill

Makes and documents architectural decisions for AI products — ML paradigm selection, system topology, infrastructure choices, deployment patterns, and ML-specific architectural concerns.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) skill. Typically follows [`ai-pm-discover`](../ai-pm-discover/SKILL.md) and/or [`ai-pm-design`](../ai-pm-design/SKILL.md).

## Workflow

### 1. ML Paradigm Selection

Choose the learning paradigm that matches the problem structure:

- **Supervised Learning** → labeled data available, prediction/classification tasks [^r-machine-learning-algorithm]
- **Unsupervised Learning** → pattern discovery, clustering, anomaly detection [^r-machine-learning-algorithm]
- **Reinforcement Learning** → sequential decision-making, control systems [^r-machine-learning-algorithm]
- **Deep Learning** → unstructured data (vision, NLP, audio), representation learning [^r-machine-learning-algorithm]

### 2. Model Architecture & Deployment Topology

| Pattern | Use Case | Trade-offs |
| --- | --- | --- |
| Monolithic Model Serving | Simple, low-latency | Simpler ops, harder to scale components independently |
| Microservices (Model-per-Service) | Independent scaling, team autonomy | Operational complexity, latency |
| Model Ensemble / Pipeline | Composable ML (feature store → model → post-processor) | Flexible, debugging complexity |
| Edge/On-Device Inference | Low latency, offline, privacy | Model size constraints, update complexity |
| Hybrid Cloud/Edge | Latency-sensitive + heavy compute | Sync complexity, consistency |

[^r-architecture-pattern][^r-software-system][^r-cloud-infrastructure][^r-on-premise-infrastructure]

### 3. Infrastructure & Deployment Decisions

| Decision | Cloud | On-Premise | Hybrid |
| --- | --- | --- | --- |
| GPU/TPU Access | Managed (Vertex, SageMaker) | Capital expense, full control | Burst to cloud |
| Data Gravity | Data already in cloud | Data sovereignty, latency | Tiered storage |
| Compliance | Shared responsibility | Full control | Selective |
| Cost Model | OpEx, pay-per-use | CapEx, amortized | Optimize per workload |

[^r-cloud-infrastructure][^r-on-premise-infrastructure][^r-software-system]

### 4. ML-Specific Architectural Concerns

| Concern | Architectural Implication |
| --- | --- |
| Feature Store | Centralized vs. per-team; online/offline split |
| Model Registry | Centralized vs. per-team; lineage tracking |
| Training Pipeline | Batch vs. streaming; orchestration (Airflow, Kubeflow) |
| Experiment Tracking | Integrated (MLflow, Weights & Biases) vs. custom |
| Monitoring/Observability | Drift detection, performance, data quality |

[^r-architecture-pattern][^r-software-system][^r-cloud-infrastructure]

### 5. PM's Deployment Checklist

- [ ] Model registered with full lineage (data, code, hyperparams, metrics)
- [ ] Security scan passed (container scan, dependency scan, secret scan)
- [ ] Staging validation passed (accuracy, latency, bias, fairness)
- [ ] Canary deployed with rollback plan documented
- [ ] Monitoring dashboards created (performance, drift, business)
- [ ] Alerting configured with on-call rotation
- [ ] Rollback procedure tested and documented
- [ ] Compliance sign-off obtained (if regulated)
- [ ] Runbook updated with model-specific procedures
- [ ] Stakeholder communication sent (release notes, known limitations)

## ADR Template for AI Decisions

```markdown

## ADR-NNN: [Title]

## Status

Proposed | Accepted | Superseded

## Context

What is the problem? What ML/architecture decision is needed?

## Decision

What was decided? Include ML paradigm, architecture pattern, infrastructure.

## Consequences

### Positive

- Benefit 1
- Benefit 2

### Negative

- Trade-off 1
- Trade-off 2

### Risks

- Risk 1 (mitigation)

## ML-Specific Considerations

- Data requirements
- Compute requirements
- Latency/throughput targets
- Compliance/privacy implications

```text

Run `scripts/validate-adr.sh docs/adr/` after creating/editing ADRs.

## Sources

[^r-architecture-pattern]: [Architecture Pattern](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/architecture-pattern.md)

[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md)
[^r-software-system]: [Software System](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md)

[^r-cloud-infrastructure]: [Cloud Infrastructure](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/cloud-infrastructure.md)
[^r-on-premise-infrastructure]: [On-Premise Infrastructure](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/on-premise-infrastructure.md)

[^r-software-development-lifecycle]: [Software Development Lifecycle](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-development-lifecycle.md)
[^r-security-control]: [Security Control](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/security-control.md)

## Output

Present ADR with decision, consequences, ML-specific considerations, and PM's deployment checklist.

## Handoff

Route to [`ai-pm-govern`](../ai-pm-govern/SKILL.md) for ML model governance setup; deployment execution follows the deployment patterns above. Route to [`ai-pm-models`](../ai-pm-models/SKILL.md) for LLM selection, RAG/agent hardening, and prompt lifecycle.

## Contract

### Preconditions
- AI use case plus constraints (latency, cost, data availability) are stated.

### Postconditions
- Recommended ML paradigm and infrastructure with trade-offs against at least one alternative.

### Invariants
- Paradigm choice is justified by data/problem type; scaling and monitoring are addressed.


## Verification

- Confirm the paradigm choice cites the data/problem type and at least one rejected alternative.
- Confirm scaling, serving, monitoring, and rollback are each addressed.
- Confirm the Handoff names the next skill (usually [`ai-pm-govern`](../ai-pm-govern/SKILL.md) or [`ai-pm-grow`](../ai-pm-grow/SKILL.md)).
