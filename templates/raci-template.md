---
type: Template
title: RACI Chart Template
description: RACI (Responsible, Accountable, Consulted, Informed) chart template
tags:
- raci
- responsibility-matrix
- template
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:00:00Z' }
status: stable
stale_after: 2027-08-19
subtype_of:
  - { type: Template, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/template.md, version: v0.1.0 }
---
# RACI Chart: [Project/Feature Name]

## Overview

- **Project**: [Name]
- **Date**: [YYYY-MM-DD]
- **Version**: [Version]

## RACI Matrix

| Decision/Activity | PM | MLE/DS | Eng Lead | Compliance | Business Stakeholder | Designer | Data Eng | ML Platform |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Problem definition & success metrics | **A** | C | C | I | **R** | C | I | I |
| ML paradigm / algorithm selection | A | **R** | C | I | I | I | C | C |
| Architecture pattern / infra | A | C | **R** | C | I | C | C | C |
| Data access / privacy | A | C | C | **R** | I | I | **R** | C |
| Feature prioritization | **R** | C | C | I | **A** | C | I | I |
| Model promotion (staging→prod) | A | **R** | C | **R** | I | I | C | C |
| Go-to-market / pricing | **R** | I | I | I | **A** | C | I | I |
| Retirement / sunsetting | **R** | C | C | C | **A** | I | I | I |
| UX/Design approval | **A** | I | C | I | C | **R** | I | I |
| Data pipeline / pipeline changes | A | C | C | I | I | I | **R** | C |
| Model promotion (staging→prod) | A | **R** | C | **R** | I | I | C | **R** |
| Security review | A | C | C | **R** | I | I | C | C |
| Compliance sign-off | A | C | C | **R** | I | I | C | C |
| Launch go/no-go | A | C | I | **R** | **A** | I | I | I |

## Legend

- **R** = Responsible (does the work)
- **A** = Accountable (ultimately answerable, only one per row)
- **C** = Consulted (provides input)
- **I** = Informed (kept in the loop)

## Usage Notes

- Only one **A** per row
- At least one **R** per row
- Minimize **C** and **I** to avoid confusion
- Review and update at each major milestone
