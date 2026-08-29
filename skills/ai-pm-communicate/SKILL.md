---
name: ai-pm-communicate
displayName: AI PM Communicate
type: Skill
title: Strategic Communication Skill
description: Masters strategic communication, influence without authority, and storytelling for AI product managers — aligning stakeholders, driving decisions, and building trust.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- influencing
- communication
- storytelling
- stakeholder-alignment
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
sources:
- id: r-business-department
  title: Business Department
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>
- id: r-persona
  title: Persona
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>
- id: r-software-development-lifecycle
  title: Software Development Lifecycle
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-development-lifecycle.md>
---
# Strategic Communication Skill

Masters strategic communication, influence without authority, and storytellingfor AI product managers — aligningstakeholders, driving decisions, and building trust.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via `ai-pm-get-context` skill.

## Workflow

### 1. Structural Communication

- **Pyramid Principle**: Lead with "so what," unpack logic
- **Audience Framing**: Study priorities, vocabulary, preferred medium
- **Listening**: Understand before responding; customers/engineers rarely state

  real needs directly

### 2. Influence Without Authority

Influence comes from:

- Expertise and credibility
- Invested relationships and reciprocity
- Social proof
- Tactics: map allies/blockers, pre-wire decisions, borrow authority sparingly,

  share credit, co-create decisions

### 3. AI Collaboration Communication

- Cross-functional AI work fails without collaboration
- Adapt Agile to dual cycles of DataOps and DevOps (MLOps)
- Parallel data and program backlogs, embedded retrospectives
- Model, feature, defect, insight logs + explainability journal

### 3. Persuasive Artifacts

- **Pitches**: Answer why care, why you, how, why believe, why now
- **Demos**: Persuasive artifacts, not feature recitations
- **Vision Communication**: Problem-focused, not solution-focused

### 4. Conflict & Difficult Conversations

- Distinguish task, process, relationship conflict
- Channel disagreement into functional debate
- Prepare for sticky situations (customers, engineering, leadership)

## Sources

[^r-business-department]: [BusinessDepartment](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>)
[^r-persona]: [Persona](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>)
[^r-software-development-lifecycle]: [Software DevelopmentLifecycle](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/software-development-lifecycle.md>)

## Output

Present communication playbook:

- Audience-specific message frameworks
- Influence tactics toolkit
- Pitch/demo templates
- Conflict resolution framework

## Handoff

Route to `ai-pm-grow` for growth messaging, `ai-pm-vision` for strategycommunication,
`ai-pm-team` for cross-functional alignment.
