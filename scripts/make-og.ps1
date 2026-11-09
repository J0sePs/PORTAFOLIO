# Genera public/og.png (1200×630) para vistas previas en redes.
# Lee el nombre y el dominio desde src/app/core/profile.ts.
# Uso: pwsh scripts/make-og.ps1
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root 'public\og.png'
$profileTs = Get-Content (Join-Path $root 'src\app\core\profile.ts') -Raw

function Get-ProfileValue([string]$key, [string]$fallback) {
  $match = [regex]::Match($profileTs, "$key\s*:\s*'([^']+)'")
  if ($match.Success) { return $match.Groups[1].Value }
  return $fallback
}

$name = Get-ProfileValue 'name' 'TU NOMBRE'
$focus = Get-ProfileValue 'focus' 'Infraestructura · Software · Cloud'
$site = (Get-ProfileValue 'siteUrl' 'https://tu-portafolio.vercel.app') -replace '^https?://', ''
$year = (Get-Date).Year

$W = 1200
$H = 630

$bmp = New-Object System.Drawing.Bitmap $W, $H
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$paper = [System.Drawing.ColorTranslator]::FromHtml('#F1EEE6')
$ink = [System.Drawing.ColorTranslator]::FromHtml('#171511')
$muted = [System.Drawing.ColorTranslator]::FromHtml('#6F6857')
$accent = [System.Drawing.ColorTranslator]::FromHtml('#B23A20')
$line = [System.Drawing.ColorTranslator]::FromHtml('#D3CCBC')

$g.Clear($paper)

# Retícula técnica
$gridPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(28, $line)), 1
for ($x = 0; $x -lt $W; $x += 48) { $g.DrawLine($gridPen, $x, 0, $x, $H) }
for ($y = 0; $y -lt $H; $y += 48) { $g.DrawLine($gridPen, 0, $y, $W, $y) }

$edgePen = New-Object System.Drawing.Pen $line, 1
$g.DrawLine($edgePen, 80, 96, 1120, 96)

$mono = New-Object System.Drawing.Font 'Consolas', 13, ([System.Drawing.FontStyle]::Regular)
$sans = New-Object System.Drawing.Font 'Segoe UI', 21, ([System.Drawing.FontStyle]::Regular)
$sansSmall = New-Object System.Drawing.Font 'Segoe UI', 15, ([System.Drawing.FontStyle]::Regular)
$yearFont = New-Object System.Drawing.Font 'Georgia', 34, ([System.Drawing.FontStyle]::Regular)

$brushInk = New-Object System.Drawing.SolidBrush $ink
$brushMuted = New-Object System.Drawing.SolidBrush $muted
$brushAccent = New-Object System.Drawing.SolidBrush $accent
$brushGreen = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#2F8F4E'))

# Encabezado
$role = (Get-ProfileValue 'role' 'Ingeniería de Sistemas').ToUpper()
$g.DrawString("PORTAFOLIO / $role", $mono, $brushMuted, 80, 60)

# Marca
$g.FillRectangle($brushAccent, 80, 150, 34, 5)

# Nombre: reduce el tamaño si no cabe en el ancho útil
$nameSize = 74
do {
  $serif = New-Object System.Drawing.Font 'Georgia', $nameSize, ([System.Drawing.FontStyle]::Regular)
  $nameWidth = $g.MeasureString($name, $serif).Width
  if ($nameWidth -le 1000 -or $nameSize -le 36) { break }
  $serif.Dispose()
  $nameSize -= 4
} while ($true)
$g.DrawString($name, $serif, $brushInk, 74, 174)

# Línea de especialidad
$g.DrawString($focus, $sans, $brushMuted, 80, 330)

# Disponibilidad
$g.FillEllipse($brushGreen, 82, 402, 9, 9)
$g.DrawString('DISPONIBLE PARA PROYECTOS', $mono, $brushMuted, 102, 397)

# Bloque derecho: índice
$g.FillRectangle($brushInk, 980, 60, 140, 2)
$g.DrawString('01  SISTEMAS', $mono, $brushMuted, 980, 82)
$g.DrawString('02  REDES', $mono, $brushMuted, 980, 110)
$g.DrawString('03  CLOUD', $mono, $brushMuted, 980, 138)
$g.DrawString('04  DATOS', $mono, $brushMuted, 980, 166)

# Pie
$g.DrawLine($edgePen, 80, 512, 1120, 512)
$g.DrawString($site, $mono, $brushMuted, 80, 540)
$g.DrawString('Diseño y construcción de sistemas', $sansSmall, $brushMuted, 80, 566)

$yearWidth = $g.MeasureString($year, $yearFont).Width
$g.DrawString($year, $yearFont, $brushMuted, 1120 - $yearWidth, 535)

$g.Dispose()
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "OG generada: $out ($name)"
