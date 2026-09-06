---
type: Product User
title: Product User
description: A synthesis persona representing the end user of a product who is also the customer — a single individual who simultaneously is the user, the buyer, and the decision-maker. Common in B2C self-serve products where the purchase is small, immediate, and personal.
tags:
- persona
- product-user
- b2c
- self-serve
- plg
- synthesis
subtype_of:
- { type: Product User, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/application/product-user.md, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:30:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-23T19:35:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-23T19:36:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T19:37:00Z' }
- { by: opencode/muse-spark-1.3-free, at: '2026-09-05T18:11:16Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p1-customer-experience
  title: 'AI Strategies: Customer Experience DNA across the customer life cycle'
  resource: https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program
  author: human:mohan-sawhney
- id: p2-jtbd
  title: 'AI-Driven Product Strategy: JTBD for finding and prioritizing product opportunities'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: p2-plg-best-practices
  title: 'AI-Driven Product Strategy: PLG best practices — democratization, templates, PQLs, loops'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: p2-freemium
  title: 'AI-Driven Product Strategy: Freemium and free trials — when to use which'
  resource: https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program
  author: human:mohan-sawhney
- id: r-persona
  title: Persona
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md
- id: r-product-led-growth
  title: Product-Led Growth
  resource: /concepts/product-led-growth.md
- id: r-jtbd-frameworks
  title: Jobs-To-Be-Done & Real-Win-Worth Frameworks
  resource: ../references/jtbd-rww-frameworks.md
- id: public-christensen-jtbd
  title: 'Competing Against Luck: The Story of Innovation and Customer Choice'
  author: human:clayton-christensen
  resource: https://www.harpercollins.com/products/competing-against-luck-clayton-m-christensen
  year: 2016
- id: public-bush-plg
  title: 'Product-Led Growth: How to Build a Product That Sells Its elf'
  author: human:wes-bush
  resource: https://www.productledalliance.com/product-led-growth-book/
  year: 2019
- id: public-amershi-hai
  title: 'Guidelines for Human-AI Interaction (CHI 2019)'
  author: human:saleema-amershi
  resource: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
  year: 2019
---
# Product User

The product user is the persona in which the **user, the buyer, and the
decision-maker collapse into a single individual** — the same person
performs the job, pays for the solution, and authorizes the purchase,
with no other stakeholder in the loop. This collapse is what the
**AI-Driven Product Strategy** program describes, in the GTM lesson on
audiences, as the case where the "audience persona" reduces to a single
end user because the purchase is small enough to skip budget approval,
immediate enough to bypass a committee, and personal enough that no
proxy negotiates on the user's behalf[^p2-jtbd]. Outside this collapse case, user, buyer, and decision-maker remain disjoint: a fictional buyer-persona is never the same instance as an approver-role occupant.

## Definition

A representation of the end user who directly interacts with the AI product. Captures user goals, workflows, technical proficiency, trust factors, and AI-specific concerns (explainability, control, privacy). Extends Persona with product interaction context.

## When the collapse happens (and when it doesn't)

The five-audience Zoom/university example in the AI-Driven Product
Strategy program is the negative case: faculty and students are the end
users, but the IT organization cares about scalability and security, the
Dean's office cares about administration, and procurement negotiates
commercial terms — the three personas split across multiple individuals
and the seller must address each one[^p2-jtbd]. By contrast, when
the purchase is a $9.99/month SaaS subscription, a free mobile app, or
a self-serve consumer product, all three personas sit in the same
person and the seller only needs to address one.

The program's **freemium and free-trials** lesson codifies the
conditions under which the collapse is viable: the marginal cost to
serve a free user must be small, the addressable market must be large
relative to the conversion rate, and the product's value must be
demonstrable without a sales call[^p2-freemium]. These are exactly the
conditions under which the product user can self-serve the entire
journey from discover to advocate without the buyer's and
decision-maker's involvement. The wider PLG literature outside the
program calls this the **product-qualified-lead (PQL)** motion: a
behavioral trigger inside the product itself (Slack's message count,
HubSpot's feature depth) replaces the sales-team qualification step and
is the only "audience" the product has to address[^p2-plg-best-practices][^public-bush-plg].

## The product user in the AI Strategies program

The **AI Strategies for Business Transformations** program does not name
the product user explicitly, but its **Customer Experience DNA (CxDNA)**
framework is essentially a lifecycle view of the product user. The CxDNA
stages — discover, learn, evaluate, buy, use, advocate — are the stages
the product user traverses alone, because in the personalized-engagement
target state "at scale in real time" the AI delivers value continuously
across the whole life cycle without a human intermediary[^p1-customer-experience].
The program's advice that "the CxDNA need to be created for each of
your high-value customer segments and personas" applies most naturally
to the product user, because the product user is the persona for which
the CxDNA can be fully owned by the product team rather than split
across sales, marketing, and customer success[^p1-customer-experience].

## Why this matters for AI products (synthesis)

For AI products specifically, the product user is also the persona
where guardrails move from procurement to UX. When the buyer and
decision-maker are absent from the loop, the AI system has no
human-in-the-loop intermediary to catch its mistakes — so
explainability, consent gates, and fallback paths become direct UX
requirements on the product user, not policies negotiated by the
buyer. The CHI 2019 Guidelines for Human-AI Interaction formalize the
implication: a product that the user encounters alone must make the
AI's confidence, limitations, and override path visible at the moment
of interaction, because there is no other persona in the room to
vouch for it[^public-amershi-hai].

The "**democratization**" theme the **AI-Driven Product Strategy** PLG
lesson names — Canva empowering citizen creatives, Shopify enabling
economic independence, HubSpot democratizing marketing — is the
emotional core of the product-user experience[^p2-plg-best-practices].
The product user is buying into a story of self-empowerment, and the
product's brand promise must consistently deliver on that story across
every CxDNA stage or the product user defects in days, not quarters.

## Sources

[^p1-customer-experience]: [AI Strategies for Business Transformations](https://online.em.kellogg.northwestern.edu/ai-strategies-for-business-transformations-program)

[^p2-jtbd]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^p2-plg-best-practices]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)

[^p2-freemium]: [AI-Driven Product Strategy](https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^r-product-led-growth]: [Product-Led Growth](/concepts/product-led-growth.md)
[^r-jtbd-frameworks]: [Jobs-To-Be-Done & Real-Win-Worth Frameworks](../references/jtbd-rww-frameworks.md)

[^public-christensen-jtbd]: [Competing Against Luck](https://www.harpercollins.com/products/competing-against-luck-clayton-m-christensen) (Christensen et al., 2016) — the canonical JTBD-in-product-strategy book; the "user hires a product to do a job" framing the AI-PM synthesis builds on.
[^public-bush-plg]: [Product-Led Growth](https://www.productledalliance.com/product-led-growth-book/) (Bush, 2019) — the canonical PLG book; the PQL motion and the "product as salesperson" framing both come from this tradition.

[^public-amershi-hai]: [Guidelines for Human-AI Interaction (CHI 2019)](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/) (Amershi et al., 2019) — formalizes the implication that a user encountering an AI alone needs visible confidence, limitations, and override paths.

## Extensions

Placeholder for B2C activation-metric libraries, freemium-to-paid
conversion models, and AI-safety UX patterns for self-serve products.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Persona Template](../templates/persona-template.md)
* [User Persona](/concepts/user-persona.md)
* [Buyer Persona](/concepts/buyer-persona.md)
* [Product-Led Growth](/concepts/product-led-growth.md)
* [Customer Experience DNA](../references/customer-experience-dna.md)
