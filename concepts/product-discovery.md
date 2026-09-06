---
type: Process
title: Product Discovery
description: The front-end practice of finding, framing, evaluating, sizing, articulating and hypothesis-testing product opportunities, as taught across both certificate programs.
tags:
- product-discovery
- jtbd
- opportunity-analysis
- hypothesis-testing
- synthesis
subtype_of:
- { type: Process, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/foundational/process.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:20:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:25:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:26:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p1-product-discovery
  title: 'AI Strategies: Business-Case Framing and the AI Canvas 2.0 (Define-Design-Deploy)'
  resource: https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program
  author: human:mohan-sawhney
- id: p2-product-discovery
  title: 'AI-Driven Product Strategy: Opportunity Analysis and Product Discovery'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: r-business-department
  title: Business Department
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md
- id: r-machine-learning-algorithm
  title: Machine Learning Algorithm
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md
---
# Product Discovery

In **AI-Driven Product Strategy**, the product life cycle begins with opportunity analysis: Sawhney defines a product opportunity as the intersection of three conditions — a real, widespread,
important customer problem; a feasiblesolution the team can build better than the alternatives; and a viable businessmodel with a credible monetization path.
These map to design thinking's desirability, feasibility and viability. Becauseinsights from instinct alone are fragile, opportunities are sourced systematically from diverse listening posts:
customer complaints and call centers,
salespeople, competitive gaps, analogies imported from other industries, market and technology discontinuities such asthe AI revolution, and regulatory changes.[^p2-product-discovery][^r-persona]
Jobs-to-be-done (JTBD) is the anchor that keeps this work outside-in. A customer does not buy a product — they hire itto get a job done; the job is stable while solutions evolve (music has movedfrom live performance to gramophone tostreaming without the underlying job changing). Job statements capture the persona, triggering situation, motivation and desired outcome, and distinguish functional, emotional and social jobs. The mostattractive are high-opportunity jobs:
important to the customer, poorly served by the current best alternative, and large or frequent enough to matter. Fromthere the funnel converges — opportunities are evaluated with Real-Win-Worth and filters for customers, economics,
competition, channels and timing, then sized via TAM/SAM/SOM top-down oreconomic-value-to-customer bottom-up (ideallytriangulated), and finally articulated through the opportunity brief, the solution resume and the vision press release
(PR/FAQ) to alignstakeholders.[^p2-product-discovery][^r-persona][^r-business-department]
Discovery proper then moves from the problem domain into the solution domain: aniterative, experimental process that tests artifacts against customers until the wall between a customer problem anda technical solution is bridged —
product-market fit. Sawhney distinguishes customer-first discovery (Uber's painpoint first) from tech-first discoveryfor deep-tech ideas (Google's page-rank breakthrough first), and grounds each indiscovery hypotheses: persona, problem,
product, value and willingness to pay. These are prioritized around make-or-break assumptions, tested by getting out of the building (order of 50 customers for B2B, 500 for B2C) in athink-make-check-iterate loop that can take years and many pivots.[^p2-product-discovery][^r-persona][^r-business-department]
**AI Strategies for Business Transformations** frames the same discipline atenterprise scale. The AI Canvas 2.0'sdefine phase deliberately keeps the solution out of view until the businessproblem, the jobs to be done and the business value (revenue enhancement, cost mitigation, risk mitigation orproductivity improvement) are fixed — the enterprise mirror of the opportunity-analysis and discovery front-end. Its maturity matrix, which plots AI use casesfrom internal and incremental toward external and transformational, functions asa sourcing and prioritization map, and its narrative format — business problem, why it matters, why an AI-basedsolution, key benefits, back-of-envelopefinancial impact, a 90-day proof of concept, and hurdles with mitigations — iseffectively a layered set of discoveryhypotheses for AIinitiatives.[^p1-product-discovery][^r-machine-learning-algorithm][^r-business-department]

## Definition

The front-end practice of finding, framing, evaluating, sizing, articulating, and hypothesis-testing product opportunities. Covers JTBD framing, opportunity analysis, hypothesis testing, opportunity sizing (TAM/SAM/SOM, Real-Win-Worth), and continuous discovery habits.

## Sources

[^p1-product-discovery]: [AI Strategies for BusinessTransformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)

[^p2-product-discovery]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)
[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md)

## Extensions

Placeholder for concepts the owner describes later — new material that expandsthis synthesis beyond the two programs'
teachings.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Jobs to Be Done](/concepts/jobs-to-be-done.md)
* [Product Design and MVP](/concepts/product-design-and-mvp.md)
* [ML Model Governance](/concepts/ml-model-governance.md)
