---
name: ai-pm-architect
displayName: AI PM Architect
type: Skill
title: AI Architect Skill
description: Makes and documents architectural decisions for AI products — ML paradigm selection, system topology, infrastructure choices, deployment patterns, and ML-specific architectural concerns.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
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
status: stable
stale_after: 2027-08-19
---
# AI Architect Skill

Makes and documents architectural decisions for AI products — ML paradigm selection, system topology, infrastructure choices, deployment patterns, and ML-specific architectural concerns.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via `ai-pm-get-context` skill. Typically follows `ai-pm-discover` and/or `ai-pm-design`.

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

[^r-architecture-pattern]: [Architecture Pattern](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/architecture-pattern.md>)
[^r-machine-learning-algorithm]: [Machine Learning Algorithm](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/machine-learning-algorithm.md>)
[^r-software-system]: [Software System](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-system.md>)
[^r-cloud-infrastructure]: [Cloud Infrastructure](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/application/cloud-infrastructure.md>)
[^r-on-premise-infrastructure]: [On-Premise Infrastructure](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/application/on-premise-infrastructure.md>)
[^r-software-development-lifecycle]: [Software Development Lifecycle](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-development-lifecycle.md>)
[^r-security-control]: [Security Control](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/security-control.md>)

## Output

Present ADR with decision, consequences, ML-specific considerations, and PM's deployment checklist.

## Handoff

Route to `ai-pm-govern` for ML model governance setup, or `deploy` for deployment execution (if separate skill).
