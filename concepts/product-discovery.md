---
type: Concept
title: Product Discovery
description: The front-end practice of finding, framing, evaluating, sizing, articulating and hypothesis-testing product opportunities, as taught across both certificate programs.
tags:
- product-discovery
- jtbd
- opportunity-analysis
- hypothesis-testing
- synthesis
subtypes_of:
- { type: Concept, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/foundational/concept.md, version: v0.1.0 }
- { type: Persona, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md, version: v0.1.0 }
- { type: Business Department, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md, version: v0.1.0 }
- { type: Machine Learning Algorithm, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/machine-learning-algorithm.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:20:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:25:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:26:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
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
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md
- id: r-business-department
  title: Business Department
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md
- id: r-machine-learning-algorithm
  title: Machine Learning Algorithm
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/machine-learning-algorithm.md
---

# Product Discovery

In **AI-Driven Product Strategy**, the product life cycle begins with opportunity analysis: Sawhney defines a product opportunity as the intersection of three conditions — a real, widespread, important customer problem; a feasible solution the team can build better than the alternatives; and a viable business model with a credible monetization path. These map to design thinking's desirability, feasibility and viability. Because insights from instinct alone are fragile, opportunities are sourced systematically from diverse listening posts: customer complaints and call centers, salespeople, competitive gaps, analogies imported from other industries, market and technology discontinuities such as the AI revolution, and regulatory changes.[^p2-product-discovery][^r-persona]

Jobs-to-be-done (JTBD) is the anchor that keeps this work outside-in. A customer does not buy a product — they hire it to get a job done; the job is stable while solutions evolve (music has moved from live performance to gramophone to streaming without the underlying job changing). Job statements capture the persona, triggering situation, motivation and desired outcome, and distinguish functional, emotional and social jobs. The most attractive are high-opportunity jobs: important to the customer, poorly served by the current best alternative, and large or frequent enough to matter. From there the funnel converges — opportunities are evaluated with Real-Win-Worth and filters for customers, economics, competition, channels and timing, then sized via TAM/SAM/SOM top-down or economic-value-to-customer bottom-up (ideally triangulated), and finally articulated through the opportunity brief, the solution resume and the vision press release (PR/FAQ) to align stakeholders.[^p2-product-discovery][^r-persona][^r-business-department]

Discovery proper then moves from the problem domain into the solution domain: an iterative, experimental process that tests artifacts against customers until the wall between a customer problem and a technical solution is bridged — product-market fit. Sawhney distinguishes customer-first discovery (Uber's pain point first) from tech-first discovery for deep-tech ideas (Google's page-rank breakthrough first), and grounds each in discovery hypotheses: persona, problem, product, value and willingness to pay. These are prioritized around make-or-break assumptions, tested by getting out of the building (order of 50 customers for B2B, 500 for B2C) in a think-make-check-iterate loop that can take years and many pivots.[^p2-product-discovery][^r-persona][^r-business-department]

**AI Strategies for Business Transformations** frames the same discipline at enterprise scale. The AI Canvas 2.0's define phase deliberately keeps the solution out of view until the business problem, the jobs to be done and the business value (revenue enhancement, cost mitigation, risk mitigation or productivity improvement) are fixed — the enterprise mirror of the opportunity-analysis and discovery front-end. Its maturity matrix, which plots AI use cases from internal and incremental toward external and transformational, functions as a sourcing and prioritization map, and its narrative format — business problem, why it matters, why an AI-based solution, key benefits, back-of-envelope financial impact, a 90-day proof of concept, and hurdles with mitigations — is effectively a layered set of discovery hypotheses for AI initiatives.[^p1-product-discovery][^r-machine-learning-algorithm][^r-business-department]

## Sources

[^p1-product-discovery]: [AI Strategies for Business Transformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)
[^p2-product-discovery]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md)
[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md)
[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/machine-learning-algorithm.md)

## Extensions

Placeholder for concepts the owner describes later — new material that expands this synthesis beyond the two programs' teachings.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Jobs to Be Done](/concepts/jobs-to-be-done.md)
* [Product Design and MVP](/concepts/product-design-and-mvp.md)
* [ML Model Governance](/concepts/ml-model-governance.md)
