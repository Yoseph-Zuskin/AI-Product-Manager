---
type: Template
title: AI Capability Maturity Model Template
description: AI Capability Maturity Model (CMM) template for assessing organizational AI readiness across five pillars
tags:
- ai-cmm
- maturity-model
- ai-readiness
- organizational-capability
- template
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:00:00Z' }
status: stable
stale_after: 2027-08-19
---
# AI Capability Maturity Model (CMM) Template

Use this template to assess organizational AI maturity across five pillars using the AI Capability Maturity Model from the AI Strategies for Business Transformations program.

## Maturity Levels

| Level | Description |
| --- | --- |
| **Emerging** | Initial capabilities, ad-hoc processes, limited governance |
| **Parity** | Capabilities matching industry peers, standardized processes |
| **Leading** | AI strategy drives competitive advantage, enterprise governance |

## Five Pillars Assessment

### Pillar 1: Strategy & Leadership

| Criterion | Emerging (1) | Parity (2) | Leading (3) | Score | Evidence |
| --- | --- | --- | --- | --- | --- |
| AI Vision & Strategy | No formal AI strategy | AI strategy exists, aligned with business | AI strategy drives competitive advantage | | |
| Leadership Commitment | Ad-hoc executive support | Active executive sponsorship | AI is board-level priority, funded | | |
| Governance Structure | Ad-hoc governance | Formal AI governance committee | Enterprise AI governance with authority | | |
| Investment Strategy | Ad-hoc | Formal governance framework | Automated governance, lineage | | |

### Pillar 2: Data & Infrastructure

| Criterion | Emerging (1) | Parity (2) | Leading (3) | Score | Evidence |
| --- | --- | --- | --- | --- | --- |
| Data Quality & Accessibility | Siloed, poor quality | Centralized, governed, accessible | Real-time, high-quality, federated | | |
| Data Governance | Ad-hoc policies | Formal governance framework | Automated governance, lineage | | |
| Technology Infrastructure | On-prem, limited GPU | Cloud-native, scalable GPU/TPU | Hybrid, elastic, multi-cloud | | |
| Feature Store | Non-existent | Centralized feature store | Real-time + offline, lineage | | |
| ML Platform | Non-existent | Centralized feature store | Real-time + offline, lineage | | |

### Pillar 3: Solution Development & Deployment

| Criterion | Emerging (1) | Parity (2) | Leading (3) | Score | Evidence |
| --- | --- | --- | --- | --- | --- |
| ML Paradigm Adoption | Basic supervised only | Supervised + unsupervised | Full spectrum + RL, GenAI | | |
| Model Development | Ad-hoc notebooks | Reproducible pipelines, versioning | Automated, reproducible, tracked | | |
| Experiment Tracking | Manual spreadsheets | MLflow/Weights & Biases | Auto-logging, comparison | | |
| Model Registry | Non-existent | Centralized registry | Lineage, versioning, promotion gates | | |
| Deployment | Manual, ad-hoc | CI/CD for ML, canary deploys | Automated, A/B, feature flags | | |
| Monitoring & Observability | Manual, ad-hoc | Basic monitoring | Automated, alerting, drift detection | | |

### Pillar 4: Talent & Expertise

| Criterion | Emerging (1) | Parity (2) | Leading (3) | Score | Evidence |
| --- | --- | --- | --- | --- | --- |
| ML Talent Density | Few specialists | Dedicated ML team | World-class team, research | | |
| Upskilling Program | Ad-hoc | Structured upskilling | Continuous learning culture | | |
| Cross-functional Collaboration | Siloed | Cross-functional squads | Integrated product/ML/design | | |
| External Partnerships | Non-existent | Selective partnerships | Strategic ecosystem | | |

### Pillar 5: Governance & Ethics

| Criterion | Emerging (1) | Parity (2) | Leading (3) | Score | Evidence |
| --- | --- | --- | --- | --- | --- |
| Bias & Fairness | Not assessed | Periodic audits | Automated, continuous | | |
| Privacy & Compliance | Ad-hoc | GDPR/CCPA compliant | Privacy by design, federated | | |
| Model Risk Management | Ad-hoc reviews | Model cards, validation gates | Automated guardrails, audit trails | | |
| Responsible AI Culture | Ad-hoc | Structured program | Embedded in culture | | |

## Scoring Summary

| Pillar | Score | Max | % | Level |
| --- | --- | --- | --- | --- |
| Strategy & Leadership | /12 | 12 | % | |
| Data & Infrastructure | /15 | 15 | % | |
| Solution Development & Deployment | /18 | 18 | % | |
| Talent & Expertise | /12 | 12 | % | |
| Governance & Ethics | /12 | 12 | % | |
| **Total** | /69 | 69 | % | |

- **Emerging**: < 40%
- **Parity**: 40-70%
- **Leading**: > 70%

---

## Action Plan

| Priority | Pillar | Action | Owner | Timeline |
| --- | --- | --- | --- | --- |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

## References

- [AI Capability Maturity Model](../references/ai-capability-maturity-model.md)
- [AI Strategies for Business Transformations](<https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program>)
- [AI Canvas 2.0](../references/ai-canvas-2.0.md) for initiative framing
- [AI Radar 2.0](../references/ai-radar-2.0.md) for opportunity mapping
