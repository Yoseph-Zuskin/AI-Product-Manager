---
type: Concept
title: Decision Maker
description: A synthesis persona representing the individual who authorizes the purchase — the gatekeeper whose go/no-go determines whether the deal moves forward. Distinct from the user (who consumes), the buyer (who pays), and the influencer (who shapes opinion); on small purchases all three may collapse, but on B2B enterprise sales they typically split.
tags:
- persona
- decision-maker
- b2b
- stakeholder
- authorization
- synthesis
subtypes_of:
- { type: Persona, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>, version: v0.1.0 }
- { type: Concept, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/foundational/concept.md>, version: v0.1.0 }
- { type: Business Department, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:30:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-23T19:35:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-23T19:36:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T19:37:00Z' }
status: stable
stale_after: 2027-08-19
sources:
- id: p2-go-to-market
  title: 'AI-Driven Product Strategy: Go-to-Market Strategy and the GTM Plan'
  resource: <https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>
  author: human:mohan-sawhney
- id: p2-jtbd
  title: 'AI-Driven Product Strategy: JTBD for finding and prioritizing product opportunities'
  resource: <https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>
  author: human:mohan-sawhney
- id: r-persona
  title: Persona
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>
- id: r-influencing
  title: Influencing and Communication
  resource: /concepts/influencing-and-communication.md
- id: public-cialdini-influence
  title: 'Influence: The Psychology of Persuasion'
  author: human:robert-cialdini
  resource: <https://www.influenceatwork.com/about/the-book/>
  year: 2006
- id: public-mitchell-ai-governance
  title: 'Governing AI: A Risk Management Framework Primer'
  author: human:matt-mitchell
  resource: <https://aiGov.usc.edu>
  year: 2023
---
# Decision Maker

The decision maker is the individual who authorizes the purchase — the
gatekeeper whose go/no-go determines whether the deal moves forward. In
the **AI-Driven Product Strategy** program's GTM taxonomy, the decision
maker sits alongside the user, the buyer, and the influencer as one of
the four personas that must be addressed by the GTM plan, because the
four roles have different jobs, different evaluation criteria, and
different veto points[^p2-go-to-market][^r-persona].

The decision maker's job is to make a defensible choice under
uncertainty. They typically have less technical depth than the user and
less cost-model depth than the buyer, so they lean on two compensating
inputs: the recommendation of the influencer (peers, analysts,
consultants) and a high-confidence narrative from the seller that
connects the user's outcome to the buyer's ROI in language the decision
maker can defend to their own stakeholders[^p2-go-to-market][^p2-jtbd].
This is why the **AI-Driven Product Strategy** program pairs GTM with
influencing and communication: the decision maker is influenced, not
pitched.

For AI products, the decision maker's authorization is conditioned on
risk factors that the user and buyer may not fully internalize:
regulatory exposure, model-governance maturity, vendor concentration
risk, and the political cost of a public AI failure. The seller who
maps these to the decision maker's own career incentives (avoiding
embarrassment, capturing credit, hitting transformation goals) wins
more often than the seller who leads with feature parity. Cialdini's
"Influence" provides the social-proof and authority principles the
seller leans on, and Mitchell's risk-management framework provides the
vocabulary the decision maker uses internally to defend the
purchase[^p2-go-to-market][^r-influencing][^public-cialdini-influence][^public-mitchell-ai-governance].

## Sources

[^p2-go-to-market]: [AI-Driven Product Strategy](<https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>)
[^p2-jtbd]: [AI-Driven Product Strategy](<https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>)
[^r-persona]: [Persona](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>)
[^r-influencing]: [Influencing and Communication](/concepts/influencing-and-communication.md)
[^public-cialdini-influence]: [Influence: The Psychology of Persuasion](<https://www.influenceatwork.com/about/the-book/>) (Cialdini, 2006) — the canonical influence-and-persuasion book; provides the social-proof and authority levers the seller uses with the decision maker.
[^public-mitchell-ai-governance]: [Governing AI: A Risk Management Framework Primer](<https://aiGov.usc.edu>) (Mitchell, 2023) — provides the risk vocabulary the decision maker uses to defend the purchase internally.

## Extensions

Placeholder for stakeholder-mapping templates, decision-committee
dynamics, and AI-risk-communication playbooks.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Persona Template](../templates/persona-template.md)
* [User Persona](/concepts/user-persona.md)
* [Buyer Persona](/concepts/buyer-persona.md)
* [Influencing and Communication](/concepts/influencing-and-communication.md)
* [Go-to-Market Strategy](/concepts/go-to-market.md)
