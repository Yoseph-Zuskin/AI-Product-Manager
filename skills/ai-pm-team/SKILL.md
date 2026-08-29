---
name: ai-pm-team
type: Concept
title: Cross-Functional AI Team Skill
description: Defines team topology, collaboration rhythms, and decision rights for effective AI product development across business, engineering, data, design, and compliance functions.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- cross-functional-team
- team-topology
- ai-team
- collaboration
- organizational-design
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
sources:
- id: r-business-department
  title: Business Department
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>
- id: r-persona
  title: Persona
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>
- id: r-software-development-lifecycle
  title: Software Development Lifecycle
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-development-lifecycle.md>
---
# Cross-Functional AI Team Skill

Defines team topology, collaboration rhythms, and decision rights for effective AI product development across business, engineering, data, design, and compliance functions.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via `ai-pm-get-context` skill.

## Workflow

### Core Team Roles

| Role | Department | Persona | Key Responsibilities |
| --- | --- | --- | --- |
| **AI Product Manager** | Product Department | Decision Maker | Product strategy, prioritization, stakeholder alignment, go/no-go decisions |
| **ML Engineer / Data Scientist** | Engineering / Data Science | Product User | Model development, experimentation, feature engineering, evaluation |
| **ML Platform Engineer** | Information Technology Department | Product User | ML infrastructure, feature store, model registry, CI/CD for ML |
| **Data Engineer** | Information Technology Department | Product User | Data pipelines, feature store, data quality, lineage |
| **Designer / UX Researcher** | Product Department | User Persona | User research, journey mapping, prototyping, usability testing |
| **Compliance / Legal** | Risk Management Department | Decision Maker | Regulatory review, bias/fairness, privacy, model cards |
| **Business Stakeholder** | | | |

## Team Topologies

| Topology Type | Structure | Best For |
| --- | --- | --- |
| **Stream-Aligned Team** | End-to-end ownership of AI product vertical | Mature AI products, clear value stream |
| **Platform Team** | ML platform, feature store, model registry, MLOps | Multiple AI products sharing infrastructure |
| **Enabling Team** | MLOps coaches, responsible AI coaches, data quality coaches | Upskilling, standardization across teams |
| **Complicated-Subsystem Team** | Specialized ML research, custom silicon, edge deployment | Deep tech, novel architectures |

## Collaboration Rhythms

| Cadence | Ceremony | Participants | Purpose |
| --- | --- | --- | --- |
| Daily | Standup | Core team (PM, MLE, Eng, Designer) | Sync on blockers, progress |
| Weekly | Sprint Planning / Review | Core team + Business Stakeholder | Prioritize, demo, retrospect |
| Bi-weekly | Model Review | PM, MLE, Data Scientist, Compliance | Model performance, drift, bias review |
| Monthly | Business Review | PM, Business Stakeholders, Leadership | Business metrics, roadmap alignment |
| Quarterly | Strategy Offsite | PM, Business Stakeholders, Leadership | Vision check, obstacle triage |

## RACI Matrix

| Decision | PM | MLE/DS | Eng Lead | Compliance | Business Stakeholder | Designer | Data Eng | ML Platform |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Problem definition & success metrics | **A** | C | C | I | **R** | C | I | I |
| ML paradigm / algorithm selection | A | **R** | C | I | I | I | C | C |
| Architecture pattern / infra | A | C | **R** | C | I | C | C | C |
| Data access / privacy | A | C | C | **R** | I | I | **R** | C |
| Feature prioritization | **R** | C | C | I | **A** | C | I | I |
| Model promotion (staging→prod) | A | **R** | C | **R** | I | I | C | C |
| Go-to-market / pricing | **R** | I | I | I | **A** | C | I | I |
| Retirement / sunsetting | **R** | C | C | C | **A** | I | I | I |
| UX/Design approval | **A** | I | C | I | C | **R** | I | I |
| Data pipeline / pipeline changes | A | C | C | I | I | I | **R** | C |
| Model promotion (staging→prod) | A | **R** | C | **R** | I | I | C | **R** |
| Security review | A | C | C | **R** | I | I | C | C |
| Compliance sign-off | A | C | C | **R** | I | I | C | C |
| Launch go/no-go | A | C | I | **R** | **A** | I | I | I |

R = Responsible, A = Accountable, C = Consulted, I = Informed

[^r-business-department][^r-persona][^r-software-development-lifecycle]

### PM's Role as Team Integrator

The AI Product Manager is the connective tissue:

- **Translate** business value into ML problems and success metrics
- **Sequence** work across dual tracks: discovery (problem space) + delivery (solution space)
- **Mediate** between research velocity (experimentation) and delivery predictability (sprints)
- **Advocate** for platform investment (feature store, model registry, monitoring) vs. feature velocity
- **Escalate** cross-functional conflicts with data-driven trade-off analysis

[^r-business-department][^r-persona][^r-software-development-lifecycle]

## Sources

[^r-business-department]: [Business Department](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>)
[^r-persona]: [Persona](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>)
[^r-software-development-lifecycle]: [Software Development Lifecycle](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-development-lifecycle.md>)

## Extensions

Placeholder for organization-specific team charter templates, competency matrices, and hiring guides.

## Related

* [AI Product Manager](../../ai-product-manager.md)
* [AI Product Management](/concepts/ai-product-management.md)
* [ML Model Governance](/concepts/ml-model-governance.md)
* [AI Architecture Decisions](/concepts/ai-architecture-decisions.md)
* [Responsible AI Product Practice](../../concepts/responsible-ai-product-practice.md)
