---
type: Concept
title: ML Model Governance Skill
description: Establishes and operates governance frameworks for ML models across their lifecycle — from development through deployment, monitoring, and retirement — ensuring compliance, accountability, and responsible AI practices.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- ml-governance
- model-governance
- responsible-ai
- compliance
- ml-lifecycle
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
---
# ML Model Governance Skill

Establishes and operates governance frameworks for ML models across theirlifecycle — from development throughdeployment, monitoring, and retirement — ensuring compliance, accountability,
and responsible AI practices.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via `ai-pm-get-context` skill. Typically follows
`ai-pm-architect`.

## Workflow

### 1. Model Registry & Lineage

Every model must be registered with metadata: training data provenance,
hyperparameters, performance metrics, intendeduse cases, and ownership. Enables auditability and reproducibility
[^r-software-development-lifecycle][^r-machine-learning-algorithm].

### 2. Access Control & Identity

Model access must be governed through identity providers and role-based accesscontrol. Only authorized personas (DataScientist, ML Engineer, ML Ops, Compliance Officer) can promote models acrossenvironments
[^r-identity-provider][^r-persona].

### 3. Security & Compliance Controls

Models must pass security reviews: adversarial robustness testing, data privacyvalidation (PII/PHI), bias/fairnessassessment, and regulatory compliance checks (GDPR, CCPA, sector-specific)
[^r-security-control][^r-machine-learning-algorithm].

### 4. Deployment & Monitoring Gates

Promotion gates between environments (dev → staging → prod) require: performancethresholds met, drift detectionconfigured, rollback procedures documented, and incident response ownersassigned
[^r-software-development-lifecycle][^r-software-system].

### 5. Model Retirement & Sunsetting

End-of-life criteria: performance degradation, concept drift detected, businessuse case retired, or regulatory change.
Retirement process includes: notification to dependent systems, data deletionper retention policy, and audit trailcompletion [^r-security-control][^r-software-development-lifecycle].

### Responsible AI Integration

Governance must embed responsible AI principles throughout:

- **Fairness**: Demographic parity, equalized odds testing across protected

  attributes
- **Transparency**: Model cards documenting intended use, limitations,

  performance slices
- **Accountability**: Clear ownership chain from data scientist → ML engineer →

  product owner → compliance
- **Privacy**: Training data minimization, differential privacy where

  applicable, federated learning options

## PM's Role in Governance

The AI Product Manager owns the governance checklist for their product:

- Define acceptable use cases and out-of-scope scenarios
- Set performance and fairness thresholds for go/no-go gates
- Own the model card documentation for stakeholder transparency
- Coordinate with Legal/Compliance on regulatory requirements
- Champion responsible AI culture within cross-functional teams

  [^r-business-department][^r-persona]

## Sources

[^r-machine-learning-algorithm]: [Machine LearningAlgorithm](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/machine-learning-algorithm.md>)
[^r-security-control]: [SecurityControl](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/security-control.md>)
[^r-identity-provider]: [IdentityProvider](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/identity-provider.md>)
[^r-software-development-lifecycle]: [Software DevelopmentLifecycle](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-development-lifecycle.md>)
[^r-software-system]: [SoftwareSystem](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-system.md>)
[^r-business-department]: [BusinessDepartment](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>)
[^r-persona]: [Persona](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>)

## Output

Present governance checklist and promotion gates configuration.

## Handoff

Route to `ai-pm-audit` for periodic audits, or `ai-pm-architect` forarchitecture updatesbased on governance feedback.
