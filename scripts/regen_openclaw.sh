#!/usr/bin/env bash
# Regenerates .openclaw/skills/ai-pm/*/SKILL.md from canonical skills/*/SKILL.md.
# OpenClaw copies sit two levels deeper, so root-reaching links gain two ../ levels.
# Uses perl (byte-exact; msys sed would strip CR bytes on Windows checkouts).
# Usage: bash scripts/regen_openclaw.sh
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dest="$root/.openclaw/skills/ai-pm"
n=0
for src in "$root"/skills/*/SKILL.md; do
  name="$(basename "$(dirname "$src")")"
  mkdir -p "$dest/$name"
  perl -pe 's|\(<(\.\./\.\./)|(<$1../../|g; s|\((\.\./\.\./)|($1../../|g' \
    "$src" > "$dest/$name/SKILL.md"
  n=$((n + 1))
done
echo "regenerated $n skills"
if todos=$(grep -rl "TODO" "$dest"/*/SKILL.md 2>/dev/null); then
  echo "$todos" | head -3
  exit 1
else
  echo "no TODOs in OpenClaw copies"
fi
