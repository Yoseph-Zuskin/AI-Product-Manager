---
name: ai-pm-audit
displayName: AI PM Audit
type: Skill
title: Product Audit Skill
description: Conducts structured product audits — UX/design reviews, responsible AI/bias checks, technical debt assessment, and ML model health evaluations.
user-invocable: true
argument-hint: "<product or skill>"
allowed-tools: Read Glob Grep
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
- product-audit
- ux-audit
- responsible-ai
- bias-audit
- technical-debt
- ml-health
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
sources:
- id: r-software-system
  title: Software System
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md
- id: r-machine-learning-algorithm
  title: Machine Learning Algorithm
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md
- id: r-security-control
  title: Security Control
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/security-control.md
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: r-business-department
  title: Business Department
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md
---

# Product Audit Skill

Conducts structured product audits — UX/design reviews, responsible AI/biaschecks, technical debt assessment, and MLmodel health evaluations.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) skill.

## Workflow

### 1. UX/Design Audit (leverages @product-design.audit)

- **Heuristic Evaluation**: Nielsen's 10 heuristics + AI-specific heuristics
- **Accessibility**: WCAG 2.1 AA compliance
- **User Journey Friction**: Identify drop-off points, cognitive load
- **Consistency**: Design system adherence, component library usage

### 2. Responsible AI / Bias Audit

- **Fairness Testing**: Demographic parity, equalized odds, disparate impact

  across slices
- **Adversarial Testing**: Red teaming for safety, robustness, prompt injection
- **Explainability**: SHAP/LIME local explanations, global feature importance
- **Model Card Review**: Intended use, limitations, performance slices, ethical

  considerations
- **Privacy**: Data minimization, consent flows, retention compliance

### 3. ML Model Health Assessment

- **Performance Monitoring**: Accuracy, latency, throughput, error rate trends
- **Drift Detection**: Feature drift, prediction drift, concept drift alerts
- **Data Quality**: Missing values, schema drift, distribution shift
- **Infrastructure Health**: GPU utilization, memory, queue depth, capacity

### 4. Technical Debt Assessment

- **Code/Architecture**: Coupling, complexity, test coverage, documentation
- **ML-Specific**: Model sprawl, experiment tracking debt, pipeline brittleness
- **Governance**: Model registry completeness, lineage gaps, ADR coverage

### 5. Audit Report Template

```markdown

## Product Audit Report — [Product Name] — [Date]

## Executive Summary

- Overall health score: X/10
- Critical findings: N
- Immediate actions required: N

## Findings by Category

### UX/Design

- Finding 1: [Description, Severity, Evidence, Recommendation]
- ...

### Responsible AI

- Fairness: [Metric, Slice, Threshold, Status]
- Bias: [Test, Result, Mitigation]
- Privacy: [Control, Status, Gap]

### ML Health

- Performance: [Metric, Trend, Threshold, Status]
- Drift: [Type, Severity, Detection Date, Mitigation]
- Data Quality: [Check, Result, Action]

### Technical Debt

- Category: [Component, Severity, Effort, Risk]

## Prioritized Action Items

1. [Critical] Action — Owner — Due Date2. [High] Action — Owner — Due Date

  ...
```

## Sources

[^r-software-system]: [Software System](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md)

[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md)
[^r-security-control]: [Security Control](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/security-control.md)

[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)
[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)

## Output

Present audit report with prioritized findings and action items.

## Handoff

Route to [`ai-pm-govern`](../ai-pm-govern/SKILL.md) for governance updates, [`ai-pm-architect`](../ai-pm-architect/SKILL.md) for architecture remediation, [`ai-pm-team`](../ai-pm-team/SKILL.md) for capacity planning.

## Contract

### Preconditions

- Audit target and scope (responsible-AI and/or product) are defined.

### Postconditions

- Findings rated by severity, each with remediation guidance.

### Invariants

- Severity rated consistently; no finding ships without remediation.

## Verification

- Confirm every finding has a severity rating and remediation guidance.
- Confirm scope coverage is stated (what was and was not audited).
- Confirm the Handoff states whether the thread continues or closes.
