# Directory Update Log

## 2026-08-19

* **Initialization**: Created the AI-Product-Manager bundle as an `type: Agent` knowledge kit synthesizing AI Strategies for Business Transformations and AI-Driven Product Strategy. Added the top-level agent concept, bundle `index.md`, and skeleton folders `concepts/` and `references/`.

## 2026-08-23

* **Review pass**: third-party agent review across the workspace bundles; findings
  recorded as `verified` stamps on reviewed files.
* **IDE harnesses**: Added Cursor, Windsurf, Cline, Kiro, Qoder rules files and
  Copilot instructions.

## 2026-08-29

* **v0.1.0 release**: Initial public plugin for Codex/ChatGPT (20 concepts,
  13 skills, 5 templates).
* **v0.1.1 fixes**: Skill `displayName` Title Case, `type: Skill` on skills,
  `privacy.md`/`terms.md`, `logoDark`, centralized `bump_version.sh`.

## 2026-09-05

* **Repairs**: YAML hard failures fixed (agent sources, reference status run-ons,
  program concept frontmatter); executable Contract/Verification in all skills;
  typo, bracket, spacing, and fence sweeps.
* **Lattice**: true is-a parents for all concepts (no vacuous root links; L3
  persona specializations; framework references on the Reference branch);
  10 abstract-shadow references deleted; templates single-parented.
* **Growth**: 6 job-description-driven bridge skills (`ai-pm-evals`,
  `ai-pm-platform`, `ai-pm-models`, `ai-pm-business-case`, `ai-pm-vendor`,
  `ai-pm-transform`) plus `regulated-ai-deployment` concept (21 concepts,
  19 skills total).
* **Harnesses**: OpenClaw and IDE rule files generated from canonical sources
  (`regen_openclaw.ps1`, `regen_ides.ps1`); Copilot manifest; Codex-native
  marketplace; manifest inventories synced; MCP server repaired and smoke-tested.
* **Quality gates**: strict validation, consistency, link, newline, and
  frontmatter checks green; unit tests; CI and pre-commit gates; README
  install rewritten UI-first per harness.
* **Glue slim-down**: MCP resource listing loops over three directories;
  hooks share one ruleset loader; `bump_version.sh` drops dead params;
  stub `validate`/`test` keys cut from `package.json`; round-2 cuts (empty
  dep objects, unused imports, dead env default, duplicated warnings, dead
  guards). MCP test green (pass 1/fail 0).
* **Harness parity**: `regen_openclaw.sh`/`regen_ides.sh` Bash ports proven
  byte-identical to the `.ps1` originals (25/25 files); CI gates regen
  freshness for OpenClaw copies plus all 5 IDE rule files.

## 2026-09-07

* **CI fixes**: abstracts pin moved from stale `v0.1.0` tag to `main`;
  markdownlint excludes `node_modules` (third-party docs failed the gate);
  `release.yml` tag-fetch fix, auto-merge removal, Node-24 majors.
* **Docs**: new `CONTRIBUTING.md` (adversarial review required pre-PR);
  `README` IP phrasing generalized to cited synthesis; `AGENTS.md`
  contribution pointer; markdownlint numbering fixes.
* **v0.1.1 goals**: `README` MCP-server section; sync `Other Agents` line
  and compatibility table (cline, kiro, MCP); release once abstracts is
  re-tagged and public.
* **v0.1.2 goals**: investigate ChatGPT footnote rendering (`[^id]` refs
  show literally, definitions list missing - files verified complete, 7/7
  refs defined in-skill; likely host-side, may need inline links or host
  feedback).

## 2026-09-12

* **SkillSpector scan**: static-only, score 56 on 45 hits at 100% component
  coverage (skills, MCP server, hooks, scripts). Verified: shell-idiom and
  doc-link hits false; substantiated hygiene is unpinned npx markdownlint
  and caret-range MCP SDK (pin + lockfile + npm audit). Scanner-missed
  hardening backlog confirmed by reading code: unsanitized path joins in
  `mcp-server.js` CallTool/ReadResource, dynamic import in OpenCode plugin,
  hooks trust equals repo trust.
* **SECURITY.md**: vulnerability policy plus scan triage and hardening backlog.
* **CI verdict**: same as abstracts - static fork-safe job, recommendation
  gate, LLM conditional. No workflow added yet.

## 2026-09-13

* **Semantic scan**: `opencode_cli` provider with Nemotron 3 Ultra Free,
  score 58/100 (static 56 + 2 semantic delta), 0 semantic findings (3
  analyzers succeeded, 1 degraded). Delta: 0 findings — no actionable
  security issues. Static HIGH score remains a pattern artifact.
* **SECURITY.md**: updated with semantic scan addendum (score 58, 0
  findings, posture unchanged).
* **Semantic re-scan (Muse Spark)**: `opencode_cli` provider, model
  `opencode/muse-spark-1.3-contributor-free`, score 58/100 — identical to
  the Nemotron semantic baseline. LLM stage degraded (0/4 calls: shared
  runtime budget expired before any model inference), so the run is
  static-only and the model was never invoked.
* **Triage**: 0 new findings, 0 new true positives — posture unchanged.
* **SECURITY.md**: appended Muse Spark re-scan addendum.
* **Semantic re-scan (Nemotron 3 Ultra Free)**: `opencode_cli` provider,
  model `opencode/nemotron-3-ultra-free`, score 69/100 — +11 vs the prior
  semantic baseline (static-pattern churn, no semantic findings). LLM stage
  degraded (0/4 calls: shared runtime budget expired), run is static-only.
  Posture unchanged.
