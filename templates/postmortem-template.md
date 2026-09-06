---
type: Template
title: Postmortem Template
description: Blameless postmortem template for incident analysis
tags:
- postmortem
- incident-analysis
- template
generated: { by: human:yoseph-zuskin, at: '2026-08-23T19:00:00Z' }
status: stable
stale_after: 2027-08-19
subtype_of:
  - { type: Template, resource: https://www.github.com/Yoseph-Zuskin/okf-abstracts/blob/v0.1.0/entities/domain/template.md, version: v0.1.0 }
---
# Postmortem: [Incident/Issue Name]

## Overview

- **Incident ID**: [ID]
- **Date**: [YYYY-MM-DD]
- **Duration**: [Start] → [End] ([Duration])
- **Severity**: [SEV-1/SEV-2/SEV-3]
- **Status**: [Resolved/Mitigated/Monitoring]
- **Author**: [Name]
- **Reviewers**: [Names]

## Summary

[1-2 paragraph summary of what happened, impact, and resolution]

## Timeline

| Time (UTC) | Event | Notes |
| --- | --- | --- |
| [Time] | [Event] | [Details] |
| [Time] | [Event] | [Details] |

- **Users Affected**: [Number/%]
- **Revenue Impact**: [$ amount or N/A]
- **Features Affected**: [List]
- **Customer Complaints**: [Number/Nature]

## Root Cause Analysis

### Root Cause

[Primary root cause]

### Contributing Factors

1. [Factor 1]
2. [Factor 2]
3. [Factor 3]

### Root Cause Category

- [ ] Code defect
- [ ] Configuration error
- [ ] Infrastructure failure
- [ ] Dependency failure
- [ ] Capacity/exhaustion
- [ ] Human error
- [ ] ML model issue (drift, bias, performance)
- [ ] Data quality issue
- [ ] Security issue
- [ ] Process gap
- [ ] Other: [Specify]

## Resolution

### What Fixed It

[What action resolved the incident]

### Time to Resolution

- **Time to Detect**: [Time from start to detection]
- **Time to Mitigate**: [Time from detection to mitigation]
- **Time to Resolve**: [Time from start to full resolution]

## Action Items

### Immediate (Mitigation)

| Action | Owner | Due Date | Status |
| --- | --- | --- | --- |
| [Action] | [Owner] | [Date] | [Status] |

### Long-term (Prevent Recurrence)

| Action | Owner | Due Date | Status |
| --- | --- | --- | --- |

### What Went Well

- [What went well]

### What Could Be Improved

- [Improvement 1]
- [Improvement 2]

| Action | Owner | Due Date | Priority |
| --- | --- | --- | --- |
| | | | |

- **Related Incidents**: [IDs]
- **Related ADRs**: [ADR numbers]
- **Related PRs/Commits**: [Links]
- **Follow-up Tickets**: [Ticket IDs]

## Communication

- **Internal Communication**: [Slack channel, email, etc.]
- **Customer Communication**: [Status page, email, in-app notice]
- **Stakeholder Briefing**: [Date, attendees, summary]

## Sign-off

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| Incident Commander | | | |
| Engineering Lead | | | |
| PM | | | |
| Compliance (if applicable) | | | |
