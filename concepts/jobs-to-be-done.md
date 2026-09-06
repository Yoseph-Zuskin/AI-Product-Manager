---
type: Knowledge Artifact
title: Jobs To Be Done
description: A synthesis of the two programs' teaching that understanding the job a customer or process wants done — not the product — is the unit around which AI opportunities and AI use cases are organized, prioritized, and built.
tags:
- jobs-to-be-done
- synthesis
subtype_of:
- { type: Knowledge Artifact, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/core/knowledge-artifact.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:20:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:25:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:26:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p1-jobs-to-be-done
  title: 'AI Strategies: JTBD across customer experience, operations, and support functions'
  resource: https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program
  author: human:mohan-sawhney
- id: p2-jobs-to-be-done
  title: 'AI-Driven Product Strategy: JTBD for finding and prioritizing product opportunities'
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
# Jobs To Be Done

The **AI Strategies for Business Transformations** program uses jobs to be done
(JTBD) as the organizing framework for AI value creation across the whole enterprise. Incustomer management, theCustomer Experience DNA (CxDNA) maps the customer's jobs along the life cycle —
discover, learn,
evaluate, buy, use, and advocate — and pairs them with the organization'smatching jobs of reaching,
acquiring, converting, selling more to, serving, and retaining the customer.[^p1-jobs-to-be-done][^r-persona][^r-business-department]
Once the jobs on both sides are explicit, AI use cases hang onto them naturallyacross the threepillars of demand generation, sales enablement, and service and retention.[^p1-jobs-to-be-done][^r-machine-learning-algorithm]
The same recipe repeats at every other layer of the enterprise. In operations,
the five-stepoperations ecosystem — sourcing, manufacturing, storage, routing, and delivery —
has a definedset of jobs at each stage (resilient, fast sourcing; low-cost and flexiblehigh-qualitymanufacturing; accurate picking and storage; an agile distribution network;
prompt last-miledelivery), and AI use cases such as predictive sourcing, cobots, predictivemaintenance, and routeoptimization are mapped directly onto those jobs.[^p1-jobs-to-be-done][^r-business-department] In the support functionsof
HR, IT, finance, and risk, the jobs to be done center on improving productivity and mitigatingrisk — the areas where most enterprise cost and value are buried.[^p1-jobs-to-be-done][^r-business-department] The consistent pattern is a three-step drill: define the stage or process, state the job to be done,
then attach the AI use cases that accomplish it.

The **AI-Driven Product Strategy** program turns JTBD into the foundation forfinding product opportunities. Its core insight is that customers do not buy products; they hirethem to get a jobdone, and the job — not the solution — is the true North Star and anchor for opportunity
identification.[^p2-jobs-to-be-done][^r-persona] Jobs are native to the humancondition: they are stable whilesolutions churn (music went from concert halls through vinyl, cassettes, and the iPod tostreaming while the job stayed constant), so focusing on jobs iscustomer-centric,
solution-agnostic, and measurable.[^p2-jobs-to-be-done] Jobs are captured in jobstatements that name the performer-persona, the triggering situation, the motivation, and the desired outcome
("as a [persona], when [situation], I want to [goal] so I can [outcome]"), and they come in threetypes — functional, emotional, and social.[^p2-jobs-to-be-done][^r-persona]
The programs converge on the job as the unit around which initiatives are organized and prioritized, each scaling it differently. AI Strategies applies JTBDenterprise-wide, using it toorganize use-case inventories and connect data and applications to business processes, whileAI-Driven Product Strategy uses it to find and prioritize product opportunities,
ratinghigh-opportunity jobs as those that customers consider important, where the current best solutionis unsatisfying, and which many customers wantdone.[^p2-jobs-to-be-done][^r-persona][^r-machine-learning-algorithm] The practical takeawayis to always ask first what job the customer or process is trying to get done,
understand how itis currently done — including the status quo of doing nothing — and only then propose a product orAI use case that does the job better than the incumbent alternative.

## Definition

A framework for discovering and articulating customer jobs to be done (JTBD). Captures the stable job (what the customer hires a product to do), persona, triggering situation, motivation, desired outcome, and distinguishes functional, emotional, and social job dimensions. Includes opportunity sizing via TAM/SAM/SOM and Real-Win-Worth analysis.

## Sources

[^p1-jobs-to-be-done]: [AI Strategies for BusinessTransformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)

[^p2-jobs-to-be-done]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)
[^r-machine-learning-algorithm]: [Machine Learning Algorithm](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/machine-learning-algorithm.md)

## Extensions

Placeholder for concepts the owner describes later — new material that expands this synthesis beyond the two programs' teachings.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Product Vision](/concepts/product-vision.md)
* [ML Model Governance](/concepts/ml-model-governance.md)
* [Cross-Functional AI Team](/concepts/cross-functional-ai-team.md)
