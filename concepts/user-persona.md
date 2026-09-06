---
type: User Persona
title: User Persona
description: A synthesis persona representing the end user of a product — the person who actually interacts with the UI, performs the job, and experiences the value (or friction) of the solution. Distinct from the buyer and decision-maker.
tags:
- persona
- user-persona
- user-research
- jtbd
- product-design
- synthesis
subtype_of:
- { type: User Persona, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/user-persona.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:30:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-23T19:35:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-23T19:36:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T19:37:00Z' }
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p1-jtbd
  title: 'AI Strategies: JTBD across customer experience, operations, and support functions'
  resource: https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program
  author: human:mohan-sawhney
- id: p2-jtbd
  title: 'AI-Driven Product Strategy: JTBD for finding and prioritizing product opportunities'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: r-customer-experience-dna
  title: Customer Experience DNA Framework
  resource: ../references/customer-experience-dna.md
- id: public-long-ai-literacy
  title: 'What is AI Literacy? Competencies and Design Considerations'
  author: human:duri-long
  resource: https://dl.acm.org/doi/10.1145/3411764.3445100
  year: 2020
- id: public-amershi-hai
  title: 'Guidelines for Human-AI Interaction (CHI 2019)'
  author: human:saleema-amershi
  resource: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
  year: 2019
---
# User Persona

The user persona is the end user of a product — the person who actually
interacts with the interface, performs the job-to-be-done, and experiences
the value (or friction) of the solution. In both Kellogg programs, the user
is the anchor of JTBD: "as a [user persona], when [situation], I want to
[goal] so I can [outcome]" is the canonical job-statement template[^p1-jtbd][^p2-jtbd].
The user is distinct from the buyer (who pays) and the decision-maker (who
authorizes the purchase); on small-ticket B2C products these may be the same
person, but on enterprise sales the three roles typically split across
multiple individuals[^p2-jtbd][^r-persona].

The **AI-Driven Product Strategy** program treats the user persona as the
primary lens for opportunity sizing. High-opportunity jobs are those that
users consider important, where the current best solution is unsatisfying,
and which many users want done — and the answer to all three questions
requires knowing who the user is, what situation triggers their need, and
what outcome they measure[^p2-jtbd]. The **AI Strategies** program extends
this to the AI use-case layer: each Customer Experience DNA stage (discover,
learn, evaluate, buy, use, advocate) names the user-side job and pairs it
with the organization's matching job, so AI use cases are organized around
the user journey, not around internal capabilities[^p1-jtbd][^r-customer-experience-dna].

User personas are also the natural unit for AI-specific design decisions:
what data the model needs about the user, what inferences are appropriate
to surface, where explanation is required, and where consent gates apply.
A user persona with low technical sophistication needs guardrails the same
persona with high sophistication does not — so the persona's AI literacy is
a first-class attribute, not an afterthought. Long & Magerko's "What is
AI Literacy?" shows that users differ systematically in their ability to
read, evaluate, and act on model outputs, and the Amershi et al. CHI 2019
guidelines make that literacy load explicit (visible confidence, on-demand
explanation, simple override path)[^p2-jtbd][^public-long-ai-literacy][^public-amershi-hai].

## Definition

A detailed representation of the end user archetype for AI products. Captures demographics, goals, motivations, pain points, behaviors, technical proficiency, trust factors, and AI-specific concerns (explainability, control, privacy). Extends Persona with product interaction context.

## Sources

[^p1-jtbd]: [AI Strategies for Business Transformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)

[^p2-jtbd]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^r-customer-experience-dna]: [Customer Experience DNA](../references/customer-experience-dna.md)
[^public-long-ai-literacy]: [What is AI Literacy? (CHI 2020)](https://dl.acm.org/doi/10.1145/3411764.3445100) (Long & Magerko, 2020) — grounds the "AI literacy" attribute on the user persona.

[^public-amershi-hai]: [Guidelines for Human-AI Interaction (CHI 2019)](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/) (Amershi et al., 2019) — formalizes the design implications of differing AI literacy.

## Extensions

Placeholder for the owner's persona work — empirical personas derived from
real product usage, AI-literacy profiles, and consent posture matrices.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Persona Template](../templates/persona-template.md)
* [Buyer Persona](/concepts/buyer-persona.md)
* [Decision Maker](/concepts/decision-maker.md)
* [Product User](/concepts/product-user.md)
* [Jobs To Be Done](/concepts/jobs-to-be-done.md)
