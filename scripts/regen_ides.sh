#!/usr/bin/env bash
# Regenerates IDE rule files from .cursor/rules/ai-pm.md (canonical).
# Bodies are identical except the harness name; .mdc is the body without frontmatter.
# Uses perl (byte-exact; msys sed would strip CR bytes on Windows checkouts).
# Usage: bash scripts/regen_ides.sh
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
src="$root/.cursor/rules/ai-pm.md"

# $1 = output relpath, $2 = Title phrase, $3 = description phrase
gen() {
  mkdir -p "$(dirname "$root/$1")"
  H1="$2" DESC="$3" perl -pe 's/Cursor Rules/$ENV{H1}/g; s/Cursor rules/$ENV{DESC}/g' \
    "$src" > "$root/$1"
}

gen .windsurf/rules/ai-pm.md "Windsurf Rules" "Windsurf rules"
gen .clinerules/ai-pm.md "Cline Rules" "Cline rules"
gen .kiro/steering/ai-pm.md "Kiro Steering" "Kiro steering"
gen .qoder/rules/ai-pm.md "Qoder Rules" "Qoder rules"

# .mdc = body without the frontmatter block (first --- fence pair + blanks)
perl -0777 -pe 's/\A---.*?---\s*//s' "$src" > "$root/.cursor/rules/ai-pm.mdc"
echo "regenerated 5 IDE rule files"
