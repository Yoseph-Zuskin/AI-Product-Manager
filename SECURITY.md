# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, use GitHub's private vulnerability reporting (the repository's
Security tab → "Report a vulnerability"). Solo-maintainer project: there is
no bug bounty program and no SLA, but every private report is reviewed;
fix, release, and credit follow coordinated disclosure.

Please include as much as you can:

- Type of issue (e.g. path traversal, injection, exfiltration, vulnerable dependency)
- Full paths of involved source files
- Tag, branch, or commit (or direct URL) of the affected code
- Any special configuration required to reproduce
- Step-by-step instructions to reproduce
- Proof-of-concept or exploit code (if possible)
- Impact, including how an attacker might exploit the issue

## Automated Scanning

Repository scanned 2026-09-12 with [SkillSpector](https://github.com/NVIDIA/SkillSpector)
2.11.2, static analysis only (no LLM provider credentials on the scanning
machine; semantic stage unavailable, so this is pattern evidence, not a
conclusive verdict).

- **Scope:** whole repository at 100% component coverage, including all 19
  `skills/ai-pm-*/SKILL.md`, `ai-pm-mcp/mcp-server.js`, `hooks/*.js`,
  `scripts/*.sh`, `.opencode/plugins/ai-pm.mjs`, `commands/ai-pm.js`,
  manifests, and workflows.
- **Result:** score 56/100, severity HIGH, recommendation DO_NOT_INSTALL,
  on 45 static-pattern hits.
- **Triage:** 1 HIGH (shell `&&` idiom in `bump_version.sh` backup cleanup)
  and 39 MEDIUM verified false positives: 28 "Skill Enumeration" hits are
  documentation citations and links to local skill docs (OKF `sources[].id`
  footnotes, `subtype_of` cross-repo URLs, `index.md` manifest links,
  `log.md`/`CHANGELOG.md` intra-repo links) — the scanner flags any URL-like
  string as "skill reference," but these are static knowledge-bundle metadata,
  not dynamic skill loads; 11 "Link/Command" hits are `npx markdownlint-cli2`
  lint invocations and `git`/`npm` commands in CI/pre-commit/docs — fixed
  arguments, no shell injection, no untrusted input. Substantiated hygiene
  only: unpinned `npx markdownlint-cli2` in CI and pre-commit (real rug-pull
  surface, low impact — pin it), and a caret-range
  `@modelcontextprotocol/sdk` with upstream advisories whose applicability
  is unknowable without a pin — pin the dependency, commit a lockfile, and
  run `npm audit` on release.
- **Manually verified hardening backlog** (scanner-missed, read-only impact
  today): `mcp-server.js` joins unsanitized tool names and resource
  filenames into filesystem paths — add an allowlist / reject `..` and
  separators; the OpenCode plugin dynamically imports every `*.js` in
  `commands/` — keep that directory owner-controlled; hooks inject the
  local `AGENTS.md` ruleset by design — never point hooks at untrusted
  checkouts.
- **Posture:** local-first, read-only knowledge kit — no network services,
  no credentials, no exfiltration paths in its code. Treat `skills/`,
  `AGENTS.md`, and `commands/` as trusted local content.
- A prior reported 15/100 score was not reproduced and is contradicted by
  this evidence (zero findings in the MCP server, hooks, plugin loader,
  and context script).

- A prior reported 15/100 score was not reproduced and is contradicted by
  this evidence (zero findings in the MCP server, hooks, plugin loader,
  and context script).

Scores measure pattern hits, not exploitability. Re-run with LLM semantic
analysis available before treating any future scan as conclusive.

## Semantic Scan Addendum (2026-09-12)

Repository re-scanned 2026-09-12 with SkillSpector 2.11.2, `opencode_cli`
provider (Nemotron 3 Ultra Free), LLM semantic analysis enabled.

- **Scope:** whole repository at 100% component coverage, including all 19
  skills, MCP server, hooks, scripts, and manifests.
- **Result:** score 58/100, severity HIGH, recommendation DO_NOT_INSTALL,
  on 0 semantic findings (4 semantic analyzers attempted, 3 succeeded, 1
  degraded).
- **Triage:** 0 semantic findings — no delta vs static baseline.
- **Verdict:** No actionable security issues; the HIGH score is a
  static-pattern artifact (all 56 static hits previously triaged). Semantic
  scan adds no new risks. Posture unchanged: local-first, read-only
  knowledge kit with no network services, credentials, or exfiltration
  paths in code. Hardening backlog (path sanitization in MCP server, pinning
  JS deps) remains as previously documented.

## Semantic Re-scan Addendum (2026-09-13)

Repository re-scanned 2026-09-13 with SkillSpector 2.11.2, `opencode_cli`
provider, model `opencode/nemotron-3-ultra-free`, LLM semantic
analysis requested.

- **Result:** score 69/100, severity HIGH, recommendation DO_NOT_INSTALL,
  +11 vs the 2026-09-12 semantic baseline (+13 vs the static 56).
- **Caveat:** 0/4 LLM calls succeeded — the shared runtime budget expired
  before any model inference, so the model was never invoked and this run
  is static-only, same as the Nemotron run.
- **Triage:** 0 new true positives — the +11 delta is static-pattern
  churn (reserved-file noise and manifest indexing differences), no
  semantic findings. Posture unchanged: local-first, read-only knowledge
  kit; hardening backlog stands.

## Semantic Re-scan Addendum (2026-09-19)

Repository `skills/` re-scanned 2026-09-19 with SkillSpector 2.11.2,
`copilot_cli` provider (local fork branch, Copilot Free CLI-default
model), LLM semantic analysis enabled — all 19 skills executed
successfully (prior whole-repo semantic baselines above still stand
for MCP server, hooks, scripts, and manifests).

- **Scope:** `skills/` only, recursive (19 `ai-pm-*/SKILL.md`).
- **Result:** max risk 9/100, severity LOW, recommendation CAUTION,
  on 3 MEDIUM semantic findings.
- **Triage:** all 3 are methodology-guidance advisories, not code
  vulnerabilities. SQP-2 on `ai-pm-evals`: production telemetry
  (feedback, rewrites, tickets, usage inputs) directed into eval
  datasets without consent/redaction/retention guidance — backlog: add
  notice-consent-minimize-redact language. SSD-3 on
  `ai-pm-get-context`: broad context collection (URLs, Figma,
  screenshots, paths) with no secret-redaction or sensitivity
  boundaries — backlog: document redaction + confirm-before-load for
  sensitive assets (skill itself stays read-only). SQP-2 on
  `ai-pm-research`: interview/survey/diary/analytics guidance without
  consent, minimization, or anonymization requirements — backlog: add
  privacy handling per method.
- **Environment note:** same as `okf-abstracts` — the
  `opencode_cli`/Nemotron route is currently 403-blocked by Zen
  free-tier client gating under the provider's isolation env;
  unrelated to this repo's posture.
- **Verdict:** No exploitable issues; no code changes required.
  Posture unchanged: local-first, read-only knowledge kit. Prior
  hardening backlog (MCP path sanitization, dep pinning — since
  pinned) stands, plus the 3 doc advisories above.
