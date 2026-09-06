---
name: ai-pm-design
displayName: AI PM Design
type: Skill
title: Product Design Skill
description: Executes product design workflows — user stories, wireframes, prototyping, MVP/MVX definition, and agile delivery setup.
user-invocable: true
argument-hint: "<product concept>"
allowed-tools: Read Write Edit Glob Grep
subtype_of:
- type: Skill
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md
  version: v0.1.0
implements:
- type: Skill
  resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/skill.md
  version: v0.1.0
generated:
  by: human:yoseph-zuskin
  at: '2026-08-19T12:00:00Z'
verified:
- by: human:yoseph-zuskin
  at: '2026-08-19T12:05:00Z'
- by: opencode/deepseek-v4-flash-free
  at: '2026-08-19T12:06:00Z'
- by: opencode/nemotron-3-ultra-free
  at: '2026-08-23T16:40:30Z'
tags:
- product-design
- mvp
- user-stories
- agile-development
- wireframing
- prototyping
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
sources:
- id: r-ai-product-management
  title: AI Product Management
  resource: ../../concepts/ai-product-management.md
- id: r-product-design-and-mvp
  title: Product Design and MVP
  resource: ../../concepts/product-design-and-mvp.md
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
status: stable
stale_after: 2027-08-19
---

# Product Design Skill

Executes product design workflows — user stories, wireframes, prototyping,
MVP/MVX definition, and agile delivery setup.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../../../references/critical-overrides.md).
- Leverage `@product-design.ideate` for visual ideation and

  `@product-design.image-to-code` for prototype
  implementation.

## Prerequisites

Requires context loaded via [`ai-pm-get-context`](../ai-pm-get-context/SKILL.md) skill. Typically follows
[`ai-pm-discover`](../ai-pm-discover/SKILL.md).

## Workflow

### 1. Requirements as User Stories

- Atom of requirements = user story: "As a [user], I want [...], so that [...]
- Stories are narrative-complete, solution-neutral, sprint-sized
- Cluster into epics/themes; accumulate into lightweight requirements doc
- Generative AI drafts stories, acceptance criteria, edge cases

  [^r-ai-product-management]

### 2. Double Diamond Design Process

- **Discover (divergent)**: Brainstorming, mind mapping, journey mapping
- **Define (convergent)**: 5 Whys root-cause, prioritization
- **Develop (divergent)**: Three-up sketches, one-up sketches, prototyping
- **Deliver (convergent)**: Usability testing, small-scale validation

  Wireframes translate jobs-to-be-done and user stories into layout, hierarchy,
  flow. Start low-fidelity, climb with
  confidence. Prompt-to-wireframe AI tools let PM prototype directly.

### 3. Minimum Viable Product (MVP / MVX)

- Minimum: focus on 1-2 core jobs (DocuSign's e-signature; Plaid's connectivity)
- Viable: users find value, some will pay
- Artifact need not be product: explainer video, concierge, Wizard-of-Oz,

  single-feature build, landing page
- MVX = maximize learning per investment

### 4. Agile Delivery Setup

- Sprints time-box short cycles: fixed time/resources, variable scope
- Scrum: backlog, ceremonies, roles, burn-down
- Kanban: flow optimization, velocity
- Spotify model: squads, tribes, chapters, guilds
- Autonomous teams that cannot be coerced into agile

## AI Strategies Integration

AI Canvas 2.0 design phase → data/model management → rapid prototyping → lean AIMVP in 90-day pilot → parallelhuman-in-the-loop validation. Deploy phase adds change management/governance.

## Sources

[^r-ai-product-management]: [AI Product Management](../../../../concepts/ai-product-management.md)

[^r-product-design-and-mvp]: [Product Design and MVP](../../../../concepts/product-design-and-mvp.md)
[^r-software-system]: [Software System](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-system.md)

[^r-software-development-lifecycle]: [Software Development Lifecycle](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/software-development-lifecycle.md)
[^r-persona]: [Persona](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/persona.md)

[^r-business-department]: [Business Department](https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/business-department.md)

## Output

Present design artifacts:

- User story map with epics/themes
- Wireframes (low-fi → high-fi)
- MVP/MVX definition with success criteria
- Agile setup: sprint cadence, ceremonies, team structure
- PR/FAQ for stakeholder alignment

## AI UX for Non-Determinism

AI outputs vary; design for uncertainty, not just the happy path:

- **Trust patterns** — citations for grounded claims, confidence display where calibrated, undo/edit on generations, human-in-the-loop escalation on low confidence.
- **Streaming and disclosure** — stream long outputs with progressive disclosure; skeleton states while generating.
- **Failure states** — empty states that teach prompting, error states for hallucinations that offer retry with narrowed scope, never dead ends.
- **Personalization controls** — memory and tone controls the user can inspect and clear.

## Handoff

Route to [`ai-pm-architect`](../ai-pm-architect/SKILL.md) for architecture/ML decisions, or [`ai-pm-govern`](../ai-pm-govern/SKILL.md)
for deployment planning.

## Contract

### Preconditions

- A validated concept or explicit brief is available.

### Postconditions

- MVP scope plus user stories, each with acceptance criteria; out-of-scope items listed.

### Invariants

- Every story is testable; non-essentials are excluded explicitly, not silently.

## Verification

- Confirm every user story has acceptance criteria and the MVP lists out-of-scope items.
- Confirm no story depends on an unvalidated assumption without flagging it.
- Confirm the Handoff names the next skill (usually [`ai-pm-architect`](../ai-pm-architect/SKILL.md)).
