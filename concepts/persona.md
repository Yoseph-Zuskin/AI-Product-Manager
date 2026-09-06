---
type: Knowledge Artifact
title: Persona
description: A synthesis concept wrapping the abstract Persona class from okf-abstracts with an AI-PM-specific methodology — the persona-as-hypothesis framing, JTBD coupling, AI-literacy attribute, and lifecycle-stage tagging that the two Kellogg programs use to make personas actionable for AI products.
tags:
- persona
- user-research
- product-design
- jtbd
- methodology
- synthesis
subtype_of:
- { type: Knowledge Artifact, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/core/knowledge-artifact.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:30:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-23T19:35:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-23T19:36:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T19:37:00Z' }
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p2-jtbd
  title: 'AI-Driven Product Strategy: JTBD for finding and prioritizing product opportunities'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: p1-customer-experience
  title: 'AI Strategies: Customer Experience DNA across the customer life cycle'
  resource: https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program
  author: human:mohan-sawhney
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: public-cooper-personas
  title: 'The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity'
  author: human:alan-cooper
  resource: https://www.cooper.com/journal/the-inmates-are-running-the-asylum-2nd-edition
  year: 2004
- id: public-christensen-jtbd
  title: 'Competing Against Luck: The Story of Innovation and Customer Choice'
  author: human:clayton-christensen
  resource: https://www.harpercollins.com/products/competing-against-luck-clayton-m-christensen
  year: 2016
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
- id: public-prasad-consent
  title: 'Privacy Personas: Aiding User-Facing Privacy Work with a User-Centered Persona Model'
  author: human:ashwini-prasad
  resource: https://dl.acm.org/doi/10.1145/3544548.3581102
  year: 2023
---
# Persona (AI-PM Synthesis)

This concept is the AI-PM synthesis wrapper around the abstract `Persona`
class. Where the abstract class describes a persona as a fictional
representation of a target user or customer segment, this concept pins
down the methodology the two Kellogg programs use to make personas
operationally useful for AI products[^r-persona][^p2-jtbd].

## Definition

A detailed representation of a user or stakeholder archetype. Captures demographics, goals, motivations, pain points, behaviors, and context. Used for product discovery, design, and communication. Includes functional, emotional, and social job dimensions per Jobs-to-be-Done theory.

## The methodology (course-sourced)

The **AI-Driven Product Strategy** program teaches persona as a
**JTBD-anchored, customer-expert construct**: the PM is "the go-to
person, the expert in understanding your customers, the jobs that they
want to get done, their pain points, their priorities, their context,
their persona" (lesson 1.7). A persona is built from a JTBD statement
("as a [persona], when [situation], I want to [goal] so I can
[outcome]") — functional, emotional, and social jobs — and is rated
"high opportunity" when the user considers the job important, the
current best solution unsatisfying, and many users want it done[^p2-jtbd].

The **AI Strategies** program extends this with the **Customer
Experience DNA (CxDNA)**: the same persona must be re-applied to every
life-cycle stage (discover, learn, evaluate, buy, use, advocate), and
"the CxDNA need to be created for each of your high-value customer
segments and personas" because each stage has its own job on both the
customer and the organization side[^p1-customer-experience].

## Persona-as-hypothesis (synthesis)

The persona-as-hypothesis framing — a persona is a falsifiable claim
that earns the right to drive design decisions only after testing —
is the AI-PM synthesis that goes beyond what either program teaches
explicitly. The wider product-craft literature is explicit about
this: Cooper's original "Inmates of the Asylum" framing treats the
persona as a design tool whose job is to predict behavior, not to
describe demographics, and whose value is measured by how often it
correctly predicts a design decision[^public-cooper-personas].
Christensen's "Competing Against Luck" makes the same point from the
JTBD side: the persona matters only insofar as it captures the job,
and the job captures what the customer would actually hire a
product to do[^public-christensen-jtbd]. The AI-PM synthesis adopts
both traditions and treats the persona as a hypothesis to be
tested against observed behavior, with retirement or revision when
the test fails.

## AI-specific attributes (synthesis with public grounding)

For AI products specifically, the synthesis adds two attributes the
generic Persona class does not require:

1. **AI literacy** — the persona's comfort with model-driven outputs,
   explanation, and override. The CHI 2019 *Guidelines for Human-AI
   Interaction* formalize the principle that an AI system must make
   its confidence, limitations, and override path visible at the
   moment of interaction[^public-amershi-hai], and Long & Magerko's
   "What is AI Literacy?" shows that users differ systematically in
   their ability to read, evaluate, and act on model outputs — a
   difference the persona must capture, not average out[^public-long-ai-literacy].
   A novice user needs visible confidence indicators and a simple
   override path; an expert user wants explanations on demand and a
   power-user API.

2. **Consent posture** — what data the persona is willing to share
   with the model, and what inferences the persona is willing to be
   the target of. This is both a regulatory and a UX variable, and
   the persona literature is now extending to it: Prasad et al.'s
   "Privacy Personas" (CHI 2023) model user-facing privacy work as a
   persona-attribute that determines which consent flows feel natural
   to which user[^public-prasad-consent]. The AI-PM synthesis borrows
   this attribute because an AI system that misreads a user's
   consent posture will over-collect data, surprise the user, or
   block value delivery.

Both attributes are first-class because the **AI Strategies** program's
Customer Experience DNA shows that personalization and AI use cases
hit the user at every life-cycle stage, and a one-size-fits-all
persona cannot carry the design implications across that range[^p1-customer-experience].

## Sources

[^p2-jtbd]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)

[^p1-customer-experience]: [AI Strategies for Business Transformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^public-cooper-personas]: [The Inmates Are Running the Asylum](https://www.cooper.com/journal/the-inmates-are-running-the-asylum-2nd-edition) (Cooper, 2004) — the canonical book on interaction-design personas; treats the persona as a behavior-predictive design tool rather than a demographic stereotype.
[^public-christensen-jtbd]: [Competing Against Luck](https://www.harpercollins.com/products/competing-against-luck-clayton-m-christensen) (Christensen et al., 2016) — the canonical JTBD-in-product-strategy book; grounds the "persona captures the job" framing.

[^public-long-ai-literacy]: [What is AI Literacy? Competencies and Design Considerations (CHI 2020)](https://dl.acm.org/doi/10.1145/3411764.3445100) (Long & Magerko, 2020) — the canonical paper on AI literacy as a measurable user attribute.
[^public-amershi-hai]: [Guidelines for Human-AI Interaction (CHI 2019)](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/) (Amershi et al., 2019) — formalizes the implication that a user encountering an AI alone needs visible confidence, limitations, and override paths.

[^public-prasad-consent]: [Privacy Personas (CHI 2023)](https://dl.acm.org/doi/10.1145/3544548.3581102) (Prasad et al., 2023) — the user-centered persona model for data-sharing and consent, which the AI-PM synthesis adopts as the "consent posture" attribute.

## Extensions

Placeholder for persona-validation experiments, AI-literacy rubrics,
and consent-posture matrices derived from real product usage.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Persona Template](../templates/persona-template.md)
* [User Persona](/concepts/user-persona.md)
* [Buyer Persona](/concepts/buyer-persona.md)
* [Decision Maker](/concepts/decision-maker.md)
* [Product User](/concepts/product-user.md)
* [Jobs To Be Done](/concepts/jobs-to-be-done.md)
* [Persona (abstract class)](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)
