---
type: Class
title: Security Control
description: A safeguard or countermeasure designed to protect the confidentiality, integrity, and availability of an information system.
subtypes_of:
- { type: Operational Artifact, resource: <https://www.github.com/Yoseph-Zuskin/okf-abstracts/entities/core/operational-artifact.md>, version: v0.1.0 }
generated: { by: human:yoseph-zuskin, at: '2026-08-19T12:00:00Z' }
verified:
- { by: human:yoseph-zuskin, at: '2026-08-19T12:05:00Z' }
- { by: opencode/deepseek-v4-flash-free, at: '2026-08-19T12:06:00Z' }
- { by: opencode/nemotron-3-ultra-free, at: '2026-08-23T16:40:30Z' }
tags:
- security-control
- information-security
- cybersecurity
- safeguard
- compliancestatus: stable
stale_after: 2027-08-19
---
# Security Control

A safeguard or countermeasure designed to protect the confidentiality,
integrity, and availability of an informationsystem.

## Contract

A concept of this class describes the class itself as a universal — *not* aconcrete
instance. Its body defines the contract for instances:

- **What it is** (definition above).
- **Frontmatter** an instance must carry: a distinct `type` value naming this

  class, plus a
  `subtypes_of` entry `{ type: <Class>, resource: <href>, version: <tag> }`
  pointing here.
- **Body conventions** expected of instances.

## Implemented by

- Concrete instances in the workspace bundles reference this class via

  `subtypes_of`.
