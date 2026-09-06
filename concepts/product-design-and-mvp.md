---
type: Workflow
title: Product Design and MVP
description: Translating discovered opportunities into user stories, designed solutions, minimum viable products and agile delivery, as taught across both certificate programs.
tags:
- product-design
- mvp
- user-stories
- agile-development
- synthesis
subtype_of:
- { type: Workflow, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/core/workflow.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:20:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:25:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:26:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p1-product-design-and-mvp
  title: 'AI Strategies: AI Canvas Design and Deploy Phases, and the AI Impact Model'
  resource: https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program
  author: human:mohan-sawhney
- id: p2-product-design-and-mvp
  title: 'AI-Driven Product Strategy: Product Design, User Experience, and Agile Development'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: r-software-system
  title: Software System
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md
- id: r-software-development-lifecycle
  title: Software Development Lifecycle
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-development-lifecycle.md
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: r-business-department
  title: Business Department
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md
---
# Product Design and MVP

In **AI-Driven Product Strategy**, requirements are the product manager's coredeliverable, and the atom of requirementsis the user story — narrative-complete, solution-neutral, and small enough tobuild within a single sprint. Written inthe "as a user, I want ..., so that ..." form, user stories are more granularderivations of jobs-to-be-done: the PMspecifies the what and leaves the how to engineering. Stories cluster into epicsand themes, and accumulate into alightweight requirements document covering purpose, users, core features, UI/UX,
definition of done, and releaseconstraints — replacing the heavyweight PRD of earlier practice. Generative AInow drafts stories, acceptance criteriaand edge cases from a sharedprompt.[^p2-product-design-and-mvp][^r-persona][^r-software-system]
Design then follows the double diamond: a divergent discovery phase
(brainstorming, mind mapping, journey mapping) and aconvergent define phase (5 Whys root-cause analysis, prioritization) in the problem space, followed by a divergentdevelop phase (three-up and one-up sketching, prototyping) and a convergentdeliver phase (usability testing and small-scale validation) in the solution space. Wireframes are the language ofthis work — they translate jobs to be doneand user stories into layout, hierarchy and flow. Teams start low-fidelity and climb only with confidence, since it isbetter to be approximately correct than precisely wrong, and prompt-to-wireframegenerative AI tools now let a PMprototype
directly.[^p2-product-design-and-mvp][^r-software-system][^r-software-development-lifecycle]
The minimum viable product is the acceptance artifact of this process. Minimummeans focusing on the one or two corejobs (DocuSign's electronic signature; Plaid's account connectivity); viablemeans users find value and some will pay.
Because the artifact need not be a product at all — explainer video, conciergeor Wizard-of-Oz manual process,
single-feature build, crowdsourced campaign, or landing page — Sawhney dubs itMVX, built to maximize learning oninvestment. Delivery then shifts to agile development: requirements are volatile, so sprints time-box short cycles with fixed time and resources but variable scope; Scrum structures them with backlog,
ceremonies, roles and burn-down charts;
Kanban optimizes flow and velocity; and the Spotify model scales squads intotribes, chapters and guilds — all assuming autonomous teams that cannot be coerced intoagile.[^p2-product-design-and-mvp][^r-software-development-lifecycle][^r-business-department]
**AI Strategies for Business Transformations** mirrors this MVP logic for AIinitiatives. The AI Canvas 2.0's designphase addresses data and model management (cleaning, prompting, fine-tuning orcustom models), then prescribes rapidsolutioning and prototyping — a lean AI MVP built in agile sprints within a90-day pilot, validated through a parallelhuman-in-the-loop run before scaling. Its deploy phase adds change managementand governance, explaining why elseinitiatives fail: value is not realized until people adopt new workflows. The AIImpact Model quantifies this argument,
predicting an initiative's business value from five drivers — problemdefinition, data, technology tools, talentavailability and execution capabilities, decomposed into 18 variables — and its findings echo the design discipline: awell-structured, deployable problem and leadership-backed change managementdiscriminate successful from unsuccessful AIprojects, the same reasons the design and MVP stages keep the problem definitionrigorous.[^p1-product-design-and-mvp][^r-software-system][^r-software-development-lifecycle]

## Definition

A framework for executing product design workflows for AI products. Covers user stories, wireframes, prototyping, MVP/MVX definition, agile delivery setup, and AI-specific design considerations (uncertainty communication, confidence calibration, human-in-the-loop patterns).

## Sources

[^p1-product-design-and-mvp]: [AI Strategies for BusinessTransformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)

[^p2-product-design-and-mvp]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^r-software-system]: [Software System](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md)

[^r-software-development-lifecycle]: [Software Development Lifecycle](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-development-lifecycle.md)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)

## Extensions

Placeholder for concepts the owner describes later — new material that expandsthis synthesis beyond the two programs'
teachings.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Jobs to Be Done](/concepts/jobs-to-be-done.md)
* [Product Discovery](/concepts/product-discovery.md)
* [ML Model Governance](/concepts/ml-model-governance.md)
* [AI Architecture Decisions](/concepts/ai-architecture-decisions.md)
