---
type: Concept
title: Buyer Persona
description: A synthesis persona representing the economic buyer — the person who controls budget and signs the check. Distinct from the user (who consumes) and the decision-maker (who authorizes); on a single-step B2C purchase all three collapse, but on B2B sales they typically split.
tags:
- persona
- buyer-persona
- b2b
- procurement
- jtbd
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
- id: p2-jtbd
  title: 'AI-Driven Product Strategy: JTBD for finding and prioritizing product opportunities'
  resource: <https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>
  author: human:mohan-sawhney
- id: p2-go-to-market
  title: 'AI-Driven Product Strategy: Go-to-Market Strategy and the GTM Plan'
  resource: <https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>
  author: human:mohan-sawhney
- id: r-persona
  title: Persona
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>
- id: r-business-department
  title: Business Department
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>
- id: public-wamba-ai-value
  title: 'AI and Value: Business and Management Research Review'
  author: human:nathalie-wamba
  resource: <https://www.sciencedirect.com/science/article/pii/S0007681323001181>
  year: 2023
- id: public-mitchell-ai-governance
  title: 'Governing AI: A Risk Management Framework Primer'
  author: human:matt-mitchell
  resource: <https://aiGov.usc.edu>
  year: 2023
---
# Buyer Persona

The buyer persona is the economic buyer — the person who controls the
budget and signs the check. In the **AI-Driven Product Strategy** program's
buyer taxonomy, buyers split into three types: technical (who evaluates
whether the solution actually works), economic (who evaluates whether the
price and ROI are justified), and relationship (who evaluates the vendor
as a long-term partner). All three can veto a deal; the economic buyer is
the one who typically signs[^p2-jtbd][^p2-go-to-market][^r-persona].

The buyer's job is not the user's job. The user wants the product to do
its job well; the buyer wants the product to do its job well **at a price
the business can justify, with a vendor the business can rely on**. The
GTM plan in the AI-Driven Product Strategy program names the buyer
explicitly as one of the seven elements (alongside audience, value
proposition, acquisition, routes, pricing, and internal/external
readiness), because the buyer's evaluation criteria differ from the
user's job criteria, and the same product must satisfy both[^p2-go-to-market].

For AI products, the buyer persona carries additional weight because
the buyer's risk model is shaped by AI-specific concerns: model
explainability for regulated industries, data residency for
multi-national buyers, vendor lock-in for foundation-model dependence,
and the total cost of ownership once inference, fine-tuning, and
retraining are factored in. The economic buyer's "is this worth it"
question expands from the unit price to the full operational and
governance cost of the AI system over its lifetime[^p2-jtbd][^r-business-department][^public-mitchell-ai-governance].
Wamba et al.'s "AI and Value" survey documents that enterprise buyers
consistently underestimate the operational and governance cost of AI
systems and overestimate the unit-price savings, which is exactly the
mismatch the AI-aware buyer persona is designed to surface in the GTM
plan[^public-wamba-ai-value].

## Sources

[^p2-jtbd]: [AI-Driven Product Strategy](<https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>)
[^p2-go-to-market]: [AI-Driven Product Strategy](<https://online.em.kellogg.northwestern.edu/ai-driven-product-strategy-program>)
[^r-persona]: [Persona](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>)
[^r-business-department]: [Business Department](<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>)
[^public-wamba-ai-value]: [AI and Value (Communications of the ACM, 2023)](<https://www.sciencedirect.com/science/article/pii/S0007681323001181>) (Wamba et al., 2023) — documents the systematic mismatch between enterprise buyers' AI cost expectations and actual TCO.
[^public-mitchell-ai-governance]: [Governing AI: A Risk Management Framework Primer](<https://aiGov.usc.edu>) (Mitchell, 2023) — the canonical risk-management framing for AI buyers' explainability, residency, and lock-in concerns.

## Extensions

Placeholder for buyer-specific scoring rubrics (technical/economic/relationship),
procurement-process maps, and AI-risk-tolerance profiles by industry.

## Related

* [AI Product Manager](../ai-product-manager.md)
* [Persona Template](../templates/persona-template.md)
* [User Persona](/concepts/user-persona.md)
* [Decision Maker](/concepts/decision-maker.md)
* [Go-to-Market Strategy](/concepts/go-to-market.md)
* [Jobs To Be Done](/concepts/jobs-to-be-done.md)
