---
type: Document
title: Multi-Harness Plugin Migration Plan
description: Migration plan for AI-Product-Manager to Ponytail-style multi-harness plugin architecture
tags:
- migration
- plugin-architecture
- multi-harness
- ponytail
status: draft
stale_after: 2027-08-19
---
# Multi-Harness Plugin Migration Plan: AI-PM / okf-abstracts

## Executive Summary

Migrate AI-Product-Manager (and optionally okf-abstracts) from current Codex-only plugin structure to a Ponytail-style multi-harness plugin supporting 14+ AI agents/harnesses, using a single source of truth for rules/instructions.

---

## Current State (AI-PM)

```
AI-Product-Manager/
├── .codex-plugin/
│   └── plugin.json              # Codex manifest
├── skills/                      # 13 skills (ai-pm-*)
├── templates/                   # 11 templates
├── references/                  # 7 references
├── agents/                      # ai-pm.md (single agent)
├── scripts/                     # get-context.sh, validate-adr.sh
├── opencode.json                # OpenCode config (minimal)
└── AGENTS.md                    # Not yet created
```

---

## Target State (Ponytail-Style Multi-Harness)

```
AI-Product-Manager/
├── AGENTS.md                    # Single source of truth (always-on rules)
├── hooks/
│   ├── ai-pm-instructions.js    # Shared instruction builder (ESM)
│   ├── ai-pm-config.js          # Mode persistence (lite/full/ultra/off)
│   └── ai-pm-frontmatter.cjs    # Skill/command frontmatter parser
├── skills/                      # 13 skills (ai-pm-*) — shared
├── commands/                    # Slash commands (.md files)
├── templates/                   # 11 templates — shared
├── references/                  # 7 references — shared
├── agents/                      # ai-pm.md — shared
├── scripts/                     # get-context.sh, validate-adr.sh — shared
├── .codex-plugin/
│   ├── plugin.json              # Codex manifest
│   └── hooks.json               # Claude/Codex lifecycle hooks
├── .opencode/
│   └── plugins/ai-pm.mjs        # OpenCode server plugin
├── .cursor/
│   └── rules/ai-pm.mdc          # Cursor rules
├── .windsurf/
│   └── rules/ai-pm.md           # Windsurf rules
├── .clinerules/
│   └── ai-pm.md                 # Cline rules
├── .kiro/
│   └── steering/ai-pm.md        # Kiro steering
├── .qoder/
│   └── rules/ai-pm.md           # Qoder rules
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot Chat
├── .openclaw/
│   └── skills/ai-pm/            # OpenClaw skill package
├── .devin-plugin/
│   └── plugin.json              # Devin plugin
├── .grok-plugin/
│   └── plugin.json              # Grok Build plugin
├── gemini-extension.json        # Gemini/Antigravity extension
├── pi-extension/
│   └── package.json             # Pi agent harness
├── qoder-hooks.json             # Qoder hooks (optional, for full plugin tier)
├── hooks/claude-codex-hooks.json # Shared with .codex-plugin
├── package.json                 # npm package for publishing
├── plugin.json                  # Root plugin manifest (for marketplaces)
├── plugin.yaml                  # Alternative manifest
└── README.md                    # Installation guide per harness
```

---

## Harness Coverage Matrix

| Harness | Installation Method | Config File | Auto-Activate | Slash Commands | Skills |
|---------|---------------------|-------------|---------------|----------------|--------|
| **Codex** | `codex plugin add` | `.codex-plugin/plugin.json` | ✅ Hooks | ✅ | ✅ |
| **Claude Code** | `/plugin install` | `.codex-plugin/hooks.json` | ✅ Hooks | ✅ | ✅ |
| **OpenCode** | `opencode.json` plugin | `.opencode/plugins/ai-pm.mjs` | ✅ Transform | ✅ | ✅ |
| **Cursor** | Copy `.cursor/rules/` | `.cursor/rules/ai-pm.mdc` | ✅ Auto-load | ❌ | ❌ |
| **Windsurf** | Copy `.windsurf/rules/` | `.windsurf/rules/ai-pm.md` | ✅ Auto-load | ❌ | ❌ |
| **Cline** | Copy `.clinerules/` | `.clinerules/ai-pm.md` | ✅ Auto-load | ❌ | ❌ |
| **GitHub Copilot Chat** | Copy `.github/copilot-instructions.md` | `.github/copilot-instructions.md` | ✅ Auto-load | ❌ | ❌ |
| **Kiro** | Copy `.kiro/steering/` | `.kiro/steering/ai-pm.md` | ✅ Auto-load | ❌ | ❌ |
| **Qoder** | Copy `.qoder/rules/` + hooks | `.qoder/rules/ai-pm.md` | ✅ Auto-load | ❌/✅* | ❌/✅* |
| **Devin CLI** | `devin plugins install` | `.devin-plugin/plugin.json` | ✅ Hooks | ✅ | ✅ |
| **Grok Build** | `grok plugin install` | `.grok-plugin/plugin.json` | ✅ Hooks | ✅ | ✅ |
| **Gemini / Antigravity** | `gemini extensions install` | `gemini-extension.json` | ✅ Ext | ✅ | ✅ |
| **Pi** | `pi install git:...` | `pi-extension/` | ✅ | ✅ | ✅ |
| **OpenClaw** | `clawhub install` | `.openclaw/skills/` | ✅ | ✅ | ✅ |
| **MCP Hosts** | MCP config | `ai-pm-mcp/` (separate) | ❌ Prompt-only | ✅ Tool | ❌ |

*Qoder: Full plugin tier needs `hooks/qoder-hooks.json` in user settings

---

## Shared Instruction Builder Pattern

Following Ponytail's `hooks/ponytail-instructions.js`:

```javascript
// hooks/ai-pm-instructions.js
// Single source of truth for all harnesses

export const AI_PM_RULES = `
# AI Product Manager Plugin Rules

## Core Principles
- OKF v0.2 conformance mandatory
- All concepts use YAML frontmatter with subtypes_of
- Cross-repo references use full GitHub URLs + version pins
- Trailing newlines: exactly 1 per file
- markdownlint: MD013 (ignore frontmatter/code/refs), MD025 (single H1)

## Skill Invocation
- Always run ai-pm-get-context first
- Route via ai-pm-index skill router
- Leverage @product-design.* for design capabilities
- Defer deep ML to future ai-ml-engineer plugin

## Output Standards
- One concept per file
- Sources cited with [^id] matching sources[].id
- verified: 3 entries (human + 2 agents)
- role_assignments: data-owners, platform-admins-devops, governance-reps-legal-infosec, solution-architects
`;

export function getAIPMInstructions(mode = 'full') {
  const intensity = {
    lite: 'Apply core principles. Skip optional abstractions.',
    full: AI_PM_RULES,
    ultra: AI_PM_RULES + '\n## Ultra Mode\n- Question every file. Delete over-engineered code. No scaffolding.',
  };
  return intensity[mode] || intensity.full;
}
```

---

## Migration Phases

### Phase 1: Foundation (Week 1)
- [ ] Create `AGENTS.md` as single source of truth
- [ ] Extract shared instruction builder to `hooks/ai-pm-instructions.js`
- [ ] Create `hooks/ai-pm-config.js` for mode persistence
- [ ] Create `hooks/ai-pm-frontmatter.cjs` for skill parsing
- [ ] Verify current Codex plugin still works

### Phase 2: Core Harness Adapters (Week 2)
- [ ] `.codex-plugin/plugin.json` + `hooks/claude-codex-hooks.json`
- [ ] `.opencode/plugins/ai-pm.mjs`
- [ ] `.cursor/rules/ai-pm.mdc`
- [ ] `.windsurf/rules/ai-pm.md`
- [ ] `.clinerules/ai-pm.md`
- [ ] `.github/copilot-instructions.md`
- [ ] `.kiro/steering/ai-pm.md`
- [ ] `.qoder/rules/ai-pm.md`

### Phase 3: Advanced Harness Adapters (Week 3)
- [ ] `.openclaw/skills/ai-pm/` (generate from `skills/`)
- [ ] `.devin-plugin/plugin.json`
- [ ] `.grok-plugin/plugin.json`
- [ ] `gemini-extension.json`
- [ ] `pi-extension/`
- [ ] `qoder-hooks.json` (for full Qoder plugin tier)

### Phase 4: MCP Server (Week 4)
- [ ] `ai-pm-mcp/` package (optional, for MCP-only hosts)
- [ ] Expose `ai_pm_instructions` tool + `ai_pm` prompt
- [ ] Reuse `hooks/ai-pm-instructions.js` + `hooks/ai-pm-config.js`

### Phase 5: Packaging & Publishing (Week 5)
- [ ] `package.json` with `files` array
- [ ] `plugin.json` + `plugin.yaml` root manifests
- [ ] Publish to npm: `@yoseph-zuskin/ai-product-manager`
- [ ] Submit to Codex/Claude Code marketplaces
- [ ] Documentation: `README.md` with per-harness install guide

---

## okf-abstracts Considerations

okf-abstracts is a **dependency** of AI-PM, not a standalone plugin. Two options:

### Option A: okf-abstracts as Shared Library (Recommended)
- okf-abstracts remains a pure OKF bundle (no plugin)
- AI-PM plugin declares dependency: `"okf-abstracts": "v0.1.0"`
- Harnesses load okf-abstracts concepts via GitHub URLs
- Simpler, matches current architecture

### Option B: okf-abstracts as Companion Plugin
- okf-abstracts gets its own plugin with concept-loading skills
- Skills: `okf-load`, `okf-validate`, `okf-graph`
- More complex, enables standalone okf-abstracts usage

**Decision**: Option A. okf-abstracts stays a versioned OKF bundle. AI-PM plugin pins it.

---

## MCP Necessity Evaluation

### Ponytail's MCP Server Purpose
- Serves ruleset to MCP-only hosts (no native plugin support)
- Exposes `ponytail` prompt + `ponytail_instructions` tool
- **Not a replacement** for always-on adapters

### AI-PM MCP Server: Needed?
**No**, for these reasons:
1. AI-PM is a **skill-based workflow plugin**, not a ruleset
2. Primary value is the 13 skills + templates + agent, not a ruleset
3. MCP hosts that matter (Cursor, Windsurf, Cline, Copilot, Kiro, Qoder, Devin, Grok, Gemini, Pi, OpenClaw, OpenCode, Codex, Claude Code) all have native plugin support
4. MCP adds maintenance burden without clear user value

**Exception**: If a target MCP-only host emerges with significant adoption, add `ai-pm-mcp/` later.

---

## Skill Migration Notes

Current 13 skills already use OKF frontmatter with `subtypes_of: Skill`. For multi-harness:

1. **Keep OKF frontmatter** — it's the source of truth
2. **Add skill manifest** for each harness that needs it:
   - Codex/Claude: `.codex-plugin/plugin.json` references `skills/`
   - OpenCode: `.opencode/plugins/ai-pm.mjs` adds `config.skills.paths`
   - OpenClaw: Generate `.openclaw/skills/` from `skills/` (build script)
   - Devin/Grok/Gemini: Plugin manifest references skills dir

3. **Slash commands** → `commands/*.md` (parsed by `ai-pm-frontmatter.cjs`)

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Hook incompatibilities across harnesses | Test each harness in isolation; use shared instruction builder |
| Skill discovery differences | Keep skills in `skills/`; each adapter registers the path |
| Version drift between adapters | Single `package.json` version; CI validates all adapters |
| Breaking changes in harness plugin APIs | Pin harness plugin API versions; monitor release notes |
| okf-abstracts version pinning | AI-PM plugin declares `"okf-abstracts": "v0.1.0"` in manifest |

---

## Success Criteria

- [ ] All 14 harnesses load AI-PM skills without manual config
- [ ] `ai-pm-get-context` runs as preflight on every session start
- [ ] Skill routing via `ai-pm-index` works identically across harnesses
- [ ] OKF validator passes for all bundles after plugin install
- [ ] No regression in current Codex workflow
- [ ] Published to npm + Codex marketplace
- [ ] Documentation covers all 14 harness install paths

---

## Estimated Effort

| Phase | Tasks | Estimate |
|-------|-------|----------|
| 1. Foundation | AGENTS.md, hooks, config | 2 days |
| 2. Core Adapters | 8 harness rule files | 3 days |
| 3. Advanced Adapters | 6 plugin manifests | 3 days |
| 4. MCP (Optional) | Separate package | 2 days |
| 5. Packaging | npm publish, marketplace | 2 days |
| **Total** | | **~12 days** |

---

## Appendix: Ponytail File Mapping Reference

| Ponytail File | AI-PM Equivalent | Purpose |
|---------------|------------------|---------|
| `AGENTS.md` | `AGENTS.md` | Always-on rules for all harnesses |
| `hooks/ponytail-instructions.js` | `hooks/ai-pm-instructions.js` | Shared instruction builder |
| `hooks/ponytail-config.js` | `hooks/ai-pm-config.js` | Mode persistence |
| `hooks/ponytail-frontmatter.cjs` | `hooks/ai-pm-frontmatter.cjs` | Command/skill parser |
| `hooks/claude-codex-hooks.json` | `hooks/claude-codex-hooks.json` | Claude/Codex lifecycle |
| `.codex-plugin/plugin.json` | `.codex-plugin/plugin.json` | Codex manifest |
| `.opencode/plugins/ponytail.mjs` | `.opencode/plugins/ai-pm.mjs` | OpenCode server plugin |
| `.cursor/rules/ponytail.mdc` | `.cursor/rules/ai-pm.mdc` | Cursor rules |
| `.windsurf/rules/ponytail.md` | `.windsurf/rules/ai-pm.md` | Windsurf rules |
| `.clinerules/ponytail.md` | `.clinerules/ai-pm.md` | Cline rules |
| `.kiro/steering/ponytail.md` | `.kiro/steering/ai-pm.md` | Kiro steering |
| `.qoder/rules/ponytail.md` | `.qoder/rules/ai-pm.md` | Qoder rules |
| `.github/copilot-instructions.md` | `.github/copilot-instructions.md` | Copilot Chat |
| `.openclaw/skills/ponytail/` | `.openclaw/skills/ai-pm/` | OpenClaw skill package |
| `.devin-plugin/plugin.json` | `.devin-plugin/plugin.json` | Devin plugin |
| `.grok-plugin/plugin.json` | `.grok-plugin/plugin.json` | Grok Build plugin |
| `gemini-extension.json` | `gemini-extension.json` | Gemini/Antigravity |
| `pi-extension/` | `pi-extension/` | Pi agent harness |
| `hooks/qoder-hooks.json` | `qoder-hooks.json` | Qoder full plugin tier |
| `ponytail-mcp/` | (not needed) | MCP server |
| `skills/ponytail-*.md` | `skills/ai-pm-*.md` | Core skills |
| `commands/*.md` | `commands/*.md` | Slash commands |
| `package.json` | `package.json` | npm package |
| `plugin.json` / `plugin.yaml` | `plugin.json` / `plugin.yaml` | Root manifests |
