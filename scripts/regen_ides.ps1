# Regenerates IDE rule files from .cursor/rules/ai-pm.md (canonical).
# Bodies are identical except the harness name; .mdc is the body without frontmatter.
# Usage: powershell -File scripts/regen_ides.ps1
$root = Split-Path -Parent $PSScriptRoot
$src = [IO.File]::ReadAllText((Join-Path $root '.cursor/rules/ai-pm.md'))
$targets = @(
  @('.windsurf/rules/ai-pm.md', 'Windsurf Rules', 'Windsurf rules'),
  @('.clinerules/ai-pm.md', 'Cline Rules', 'Cline rules'),
  @('.kiro/steering/ai-pm.md', 'Kiro Steering', 'Kiro steering'),
  @('.qoder/rules/ai-pm.md', 'Qoder Rules', 'Qoder rules')
)
$n = 0
foreach ($t in $targets) {
  $u = $src -creplace 'Cursor Rules', $t[1]
  $u = $u -creplace 'Cursor rules', $t[2]
  $out = Join-Path $root $t[0]
  New-Item -ItemType Directory -Path (Split-Path -Parent $out) -Force | Out-Null
  [IO.File]::WriteAllText($out, $u)
  $n++
}
$body = $src -replace '(?s)\A---.*?---\s*', ''
[IO.File]::WriteAllText((Join-Path $root '.cursor/rules/ai-pm.mdc'), $body)
$n++
"regenerated $n IDE rule files"
