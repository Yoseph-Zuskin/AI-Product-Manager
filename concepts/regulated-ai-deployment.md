---
type: Policy
title: Regulated AI Deployment
description: 'Draft pattern notes toward exam-grade deployment of AI in regulated industries: model-risk artifacts, adverse-action reasoning, decision reconstruction, and champion-challenger governance.'
subtype_of:
- { type: Policy, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/policy.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-09-05T18:11:16Z' }
verified:
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
tags:
- regulation
- model-risk
- financial-services
- compliance
- governance
status: draft
stale_after: 2027-09-05
sources:
- id: r-model
  title: Model
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/model.md
- id: sr-11-7
  title: SR 11-7 Guidance on Model Risk Management
  resource: https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm
  author: org:federal-reserve
- id: ai-pm-synthesis
  title: Original AI-PM synthesis bridging both certificate programs
  resource: https://www.github.com/Yoseph-Zuskin/AI-Product-Manager
---

# Regulated AI Deployment

Draft pattern notes toward exam-grade deployment of AI where regulators, auditors, and adverse-action law apply — principally financial services, with patterns that transfer to hiring, insurance, and other consequential decisions[^sr-11-7]. Pending human and legal review before any compliance reliance.

## Definition

Generic model governance (`ai-pm-govern`) keeps systems healthy; regulated deployment additionally produces evidence an examiner accepts. The difference is documentation discipline, independent validation, and reconstructability — every consequential decision traceable to model version, inputs, and reasons[^r-model][^ai-pm-synthesis].

## Model-Risk Artifacts

- Model inventory with tiering by materiality; documentation covering purpose, methodology, data, limitations, and monitoring plan.
- Independent validation gates before promotion: conceptual soundness review plus outcomes analysis by reviewers outside the build team.
- Change log tying every production model to validated version, approver, and date.

## Adverse-Action Reasoning

- Credit and hiring decisions must return specific principal reasons (ECOA/Regulation B pattern: four or fewer specific reasons, no generic denials).
- Reason codes designed with Legal: mapped to model features, tested for disparate impact, logged per decision.
- Explanations generated from the deciding model state, never reconstructed after the fact from a different version.

## Decision Reconstruction

- Point-in-time logging: inputs, model version, feature values, scores, reasons, and human overrides, immutable and timestamped.
- Reconstruction drill: prove any historical decision reproducible from logs alone before examiners ask.
- Retention aligned to regulatory windows, with deletion discipline after expiry.

## Champion-Challenger Governance

- New models deploy as challengers against the champion on live traffic slices with pre-registered success criteria.
- Promotion requires statistical evidence plus validation sign-off; rollback triggers defined before launch.
- Population stability (PSI) and drift thresholds with escalation paths to model owners and risk committees.

## Exam-Readiness Pack

- Standing evidence pack: inventory, validations, monitoring reports, incident log, remediation trail.
- Map each artifact to the regulatory expectation it satisfies; gaps owned with dated remediation plans.

## Provenance

Original AI-PM synthesis bridging both certificate programs[^ai-pm-synthesis].

## Sources

[^sr-11-7]: [SR 11-7 Guidance on Model Risk Management](https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm)

[^ai-pm-synthesis]: Original synthesis for this bundle, drawing on both programs; see [ai-product-manager.md](../ai-product-manager.md).
[^r-model]: [Model](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/model.md)
