/**
 * Descarga las fuentes self-hosted (woff2, subset latin) desde Google Fonts.
 * Uso: node scripts/fetch-fonts.mjs
 *
 * Tipografías: Instrument Serif (display), Inter Tight (texto),
 * JetBrains Mono (etiquetas técnicas). Todas bajo SIL Open Font License.
 */
import { mkdir, writeFile } from 'node:fs/promises';

const FONTS = [
  {
    file: 'instrument-serif-regular.woff2',
    url: 'https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2',
  },
  {
    file: 'instrument-serif-italic.woff2',
    url: 'https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7M.woff2',
  },
  {
    file: 'inter-tight-var.woff2',
    url: 'https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsH8ag.woff2',
  },
  {
    file: 'jetbrains-mono-var.woff2',
    url: 'https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwg.woff2',
  },
];

const dir = new URL('../public/fonts/', import.meta.url);
await mkdir(dir, { recursive: true });

for (const font of FONTS) {
  const res = await fetch(font.url);
  if (!res.ok) throw new Error(`${font.file}: ${res.status}`);
  const bytes = Buffer.from(await res.arrayBuffer());
  await writeFile(new URL(font.file, dir), bytes);
  console.log(`ok  ${font.file} — ${(bytes.length / 1024).toFixed(1)} kB`);
}
