#!/usr/bin/env bash
# Bump ONLY the AI-PM bundle's own version. Does NOT touch okf-abstracts dep versions.
# Usage: ./scripts/bump_version.sh <new_version>
# Reads version from VERSION file if no argument given.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VERSION_FILE="$REPO_ROOT/VERSION"

# Read version from argument or VERSION file
if [[ $# -eq 1 ]]; then
    NEW_VERSION="$1"
else
    NEW_VERSION="$(cat "$VERSION_FILE" 2>/dev/null || echo "")"
fi

# Validate semver
if ! [[ "$NEW_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Usage: $0 <semver>  (e.g., 0.1.2)" >&2
    exit 1
fi

VPREFIXED="v$NEW_VERSION"
echo "Bumping AI-PM bundle to $NEW_VERSION ($VPREFIXED)"

# Helper: apply sed in-place with BSD/GNU compatibility
sed_inplace() {
    local pattern="$1"
    local replacement="$2"
    local file="$3"
    if sed --version >/dev/null 2>&1; then
        # GNU sed
        sed -i -E "$pattern" "$file"
    else
        # BSD/macOS sed
        sed -i '' -E "$pattern" "$file"
    fi
}

changed=()

# Files where the AI-PM BUNDLE's own version appears (plain 0.1.1)
# Pattern: "version": "X.Y.Z" or version: X.Y.Z
bump_bundle_version() {
    local pattern="$1"
    local file="$2"
    local replacement="${3:-}"  # optional custom replacement
    if [[ ! -f "$file" ]]; then return; fi
    local orig
    orig="$(cat "$file")"
    if [[ -n "$replacement" ]]; then
        sed -i.bak -E "$pattern" "$file" && rm -f "$file.bak"
    else
        sed -i.bak -E "s/\"version\":[[:space:]]*\"[0-9]+\.[0-9]+\.[0-9]+\",?/\"version\": \"$NEW_VERSION\",/g" "$file" && rm -f "$file.bak"
    fi
    if ! diff -q <(echo "$orig") "$file" >/dev/null 2>&1; then
        changed+=("$file")
    fi
}

# Bundle version files (plain version)
bump_bundle_version '' "$REPO_ROOT/package.json"
bump_bundle_version '' "$REPO_ROOT/plugin.json"
bump_bundle_version '' "$REPO_ROOT/plugin.yaml"
bump_bundle_version '' "$REPO_ROOT/gemini-extension.json"
bump_bundle_version '' "$REPO_ROOT/.codex-plugin/plugin.json"
bump_bundle_version '' "$REPO_ROOT/.claude-plugin/plugin.json"
bump_bundle_version '' "$REPO_ROOT/.devin-plugin/plugin.json"
bump_bundle_version '' "$REPO_ROOT/.grok-plugin/plugin.json"
bump_bundle_version '' "$REPO_ROOT/.qoder-plugin/plugin.json"
bump_bundle_version '' "$REPO_ROOT/.openclaw/skills/ai-pm/manifest.json"
bump_bundle_version '' "$REPO_ROOT/ai-pm-mcp/package.json"
bump_bundle_version '' "$REPO_ROOT/pi-extension/package.json"

# AGENTS.md has two formats
sed_inplace "s/\\*\\*Version\\*\\*:[[:space:]]*[0-9]+\\.[0-9]+\\.[0-9]+/**Version**: $NEW_VERSION/g" "$REPO_ROOT/AGENTS.md"
sed_inplace "s/\\(v[0-9]+\\.[0-9]+\\.[0-9]+\\)/($VPREFIXED)/g" "$REPO_ROOT/AGENTS.md"

# ai-pm-mcp/mcp-server.js
sed_inplace "s/version:[[:space:]]*'[0-9]+\\.[0-9]+\\.[0-9]+',/version: '$NEW_VERSION',/g" "$REPO_ROOT/ai-pm-mcp/mcp-server.js"

# scripts/get-context.sh - okf-abstracts reference
sed_inplace "s/OKF Abstracts: https:\\/\\/github.com\\/Yoseph-Zuskin\\/okf-abstracts \\(v[0-9]+\\.[0-9]+\\.[0-9]+\\)/OKF Abstracts: https:\\/\\/github.com\\/Yoseph-Zuskin\\/okf-abstracts ($VPREFIXED)/g" "$REPO_ROOT/scripts/get-context.sh"

# Files where v-prefixed bundle version appears (v0.1.1 in harness manifests)
bump_vprefixed() {
    local file="$1"
    if [[ ! -f "$file" ]]; then return; fi
    sed_inplace "s/\"version\":[[:space:]]*\"v[0-9]+\\.[0-9]+\\.[0-9]+\",?/\"version\": \"$VPREFIXED\",/g" "$file"
    # Check if changed by looking for v-prefix
    if grep -q "\"version\": \"$VPREFIXED\"" "$file"; then
        changed+=("$file")
    fi
}

bump_vprefixed "$REPO_ROOT/.claude-plugin/plugin.json"
bump_vprefixed "$REPO_ROOT/.devin-plugin/plugin.json"
bump_vprefixed "$REPO_ROOT/.grok-plugin/plugin.json"
bump_vprefixed "$REPO_ROOT/.qoder-plugin/plugin.json"
bump_vprefixed "$REPO_ROOT/.openclaw/skills/ai-pm/manifest.json"
bump_vprefixed "$REPO_ROOT/ai-pm-mcp/package.json"
bump_vprefixed "$REPO_ROOT/pi-extension/package.json"
bump_vprefixed "$REPO_ROOT/gemini-extension.json"

# plugin.json's okf.version should NOT be bumped (external dep v0.1.0)
# .codex-plugin/plugin.json has no v-prefixed version

echo "Bumped AI-PM bundle to $NEW_VERSION ($VPREFIXED) — ${#changed[@]} files changed"