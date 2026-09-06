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
