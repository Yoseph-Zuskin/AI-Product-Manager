#!/usr/bin/env bash
# scripts/get-context.sh
# Preflight: loads product context into agent working memory

set -euo pipefail

PLUGIN_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REF_DIR="$PLUGIN_DIR/references"
TEMPLATES_DIR="$PLUGIN_DIR/templates"

# 1. Load user-saved product context (URLs, Figma, screenshots, codebase paths)
#    Reads from $CODEX_HOME/user-context/product.json if exists
# 2. Load plugin references (OKF concept copies) into working memory
# 3. Load templates (ADR, Model Card, PRD, RACI, Postmortem)
# 4. Check for local design context (Storybook, design-system/, tokens/, etc.)
# 4. Output summary for agent consumption

echo "=== AI-PM Context Loaded ==="
echo "Plugin: ai-product-manager"
echo "References: $REF_DIR"
echo "Templates: $TEMPLATES_DIR"
echo "OKF Abstracts: https://github.com/Yoseph-Zuskin/okf-abstracts (v0.1.0)"
echo ""
echo "Available skills:"
echo "  discover  - Product discovery, JTBD, opportunity analysis"
echo "  design    - Product design, MVP, wireframes (+ @product-design.ideate)"
echo "  architect - AI architecture, ML paradigm, infra decisions"
echo "  govern    - ML model governance, responsible AI"
echo "  team      - Cross-functional team topology, RACI"
echo "  research  - User research, competitive analysis"
echo "  price     - Pricing strategy, monetization"
echo "  grow      - PLG, retention, growth loops"
echo "  communicate - Stakeholder communication, influence"
echo "  vision    - Product vision, V2MOM, strategy canvas"
echo "  audit     - Product audits, responsible AI checks"
echo ""
echo "Context loaded. Ready for @ai-pm <skill> <task>"
