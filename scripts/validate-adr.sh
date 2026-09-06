#!/usr/bin/env bash
# scripts/validate-adr.sh
# Validates ADR files against template and checks cross-references

set -euo pipefail

ADR_DIR="${1:-./docs/adr}"
TEMPLATE="$(dirname "$0")/../templates/adr-template.md"
ERRORS=0

validate_adr() {
    local file="$1"
    local errors=0

    echo "Validating $file..."

    # Check required frontmatter fields
    for field in "title" "status" "date" "decision-makers" "context" "decision" "consequences"; do
        if ! grep -q "^$field:" "$file"; then
            echo "  ERROR: Missing required field '$field'"
            ((errors++))
        fi
    done

    # Check ADR number format (ADR-NNN)
    if ! grep -q "^# ADR-[0-9]\{3\}: " "$file"; then
        echo "  ERROR: Missing or malformed ADR header (expected '# ADR-NNN: Title')"
        ((errors++))
    fi

    # Check for required sections
    for section in "## Context" "## Decision" "## Consequences" "## ML-Specific Considerations"; do
        if ! grep -q "$section" "$file"; then
            echo "  WARN: Missing section '$section'"
        fi
    done

    # Check cross-references to okf-abstracts
    if grep -q "okf-abstracts" "$file"; then
        if ! grep -q "github.com/Yoseph-Zuskin/okf-abstracts" "$file"; then
            echo "  WARN: okf-abstracts reference missing full GitHub URL"
        fi
    fi

    # Check date format (YYYY-MM-DD)
    if grep -q "^date:" "$file"; then
        date_val=$(grep "^date:" "$file" | sed 's/date: *//')
        if ! [[ "$date_val" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
            echo "  ERROR: Invalid date format (expected YYYY-MM-DD): $date_val"
            ((errors++))
        fi
    fi

    return $errors
}

# Validate all ADR files
for adr in "$ADR_DIR"/ADR-*.md; do
    [ -f "$adr" ] || continue
    validate_adr "$adr"
    ERRORS=$((ERRORS + $?))
done

if [ $ERRORS -gt 0 ]; then
    echo "❌ Validation failed with $ERRORS error(s)"
    exit 1
else
    echo "✅ All ADRs valid"
    exit 0
fi
