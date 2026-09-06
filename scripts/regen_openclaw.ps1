# Regenerates .openclaw/skills/ai-pm/*/SKILL.md from canonical skills/*/SKILL.md.
# OpenClaw copies sit two levels deeper, so root-reaching links gain two ../ levels.
# Usage: powershell -File scripts/regen_openclaw.ps1
$root = Split-Path -Parent $PSScriptRoot
$dest = Join-Path $root '.openclaw/skills/ai-pm'
$n = 0
foreach ($src in (Get-ChildItem -LiteralPath (Join-Path $root 'skills') -Directory)) {
    $srcFile = Join-Path $src.FullName 'SKILL.md'
    if (-not (Test-Path -LiteralPath $srcFile)) { continue }
    $t = [IO.File]::ReadAllText($srcFile)
    $u = $t -replace '\(\<(\.\./\.\./)', '(<$1../../'
    $u = $u -replace '\((\.\./\.\./)', '($1../../'
    $outDir = Join-Path $dest $src.Name
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    [IO.File]::WriteAllText((Join-Path $outDir 'SKILL.md'), $u)
    $n++
}
"regenerated $n skills"
$todos = Select-String -Path (Join-Path $dest '*/SKILL.md') -Pattern 'TODO' | Select-Object -First 3
if ($todos) { $todos; exit 1 } else { 'no TODOs in OpenClaw copies' }
