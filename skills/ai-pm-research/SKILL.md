---
name: ai-pm-research
displayName: AI PM Research
type: Skill
title: User Research Skill
description: Executes user research workflows — qualitative and quantitative methods, competitive analysis, win/loss analysis, and continuous discovery habits.
subtypes_of:
- { type: Skill, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/skill.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- user-research
- competitive-analysis
- win-loss-analysis
- continuous-discovery
- qualitative-research
- quantitative-research
- synthesis
role_assignments:
- data-owners
- platform-admins-devops
- governance-reps-legal-infosec
- solution-architects
status: stable
stale_after: 2027-08-19
sources:
- id: r-persona
  title: Persona
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>
- id: r-business-department
  title: Business Department
  resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>
---
# User Research Skill

Executes user research workflows — qualitative and quantitative methods,
competitive analysis, win/loss analysis, andcontinuous discovery habits.

## Critical Overrides

- Refer to the Plugin router [index](../ai-pm-index/SKILL.md) before proceeding.
- Follow [critical-overrides](../../references/critical-overrides.md).

## Prerequisites

Requires context loaded via `ai-pm-get-context` skill.

## Workflow

### 1. Qualitative Research

- **User Interviews**: Semi-structured, 30-60 min, 5-10 users per segment
- **Contextual Inquiry**: Observe users in their environment
- **Usability Testing**: Task-based, think-aloud, 5 users per round
- **Diary Studies**: Longitudinal behavior capture

### 2. Quantitative Research

- **Surveys**: NPS, CSAT, CES, feature prioritization (MaxDiff, conjoint)
- **Analytics**: Funnel analysis, cohort retention, feature adoption
- **A/B Testing**: Experiment design, power analysis, statistical significance

### 3. Competitive Analysis

- **Feature Gap Matrix**: Capability comparison across competitors
- **Positioning Map**: Price vs. value, features vs. usability
- **Win/Loss Analysis**: Interview recent wins/losses, code themes

### 4. Continuous Discovery Habits

- **Weekly Customer Conversations**: 3+ users/week (Teresa Torres)
- **Opportunity Solution Tree**: Map outcomes → opportunities → solutions →

  experiments
- **Assumption Mapping**: Identify riskiest assumptions, design tests

## Sources

[^r-persona]: [Persona](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/persona.md>)
[^r-business-department]: [BusinessDepartment](<<https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/domain/business-department.md>)

## Output

Present research artifacts:

- Interview guides and synthesis
- Competitive landscape with positioning
- Win/loss themes and actionable insights
- Opportunity solution tree with prioritized experiments
- Research repository for organizational learning

## Handoff

Route to `ai-pm-discover` for opportunity validation, `ai-pm-design` forsolution ideation.
