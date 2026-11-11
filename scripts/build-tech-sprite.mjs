/**
 * Genera el sprite SVG de tecnologías a partir de Simple Icons (CC0).
 *
 * Uso:  node scripts/build-tech-sprite.mjs
 *
 * - Descarga cada icono desde cdn.simpleicons.org
 * - Elimina colores propios para que hereden `currentColor`
 * - Escribe public/icons/tech-sprite.svg
 *
 * Al agregar iconos, sube SPRITE_VERSION en src/app/shared/sprite.ts
 * para invalidar la caché de los navegadores.
 *
 * Los iconos son marcas registradas de sus respectivos dueños y se usan
 * únicamente para identificar las tecnologías empleadas en cada proyecto.
 */
import { writeFile, mkdir } from 'node:fs/promises';

const ICONS = [
  'angular',
  'typescript',
  'javascript',
  'html5',
  'css',
  'sass',
  'tailwindcss',
  'nodedotjs',
  'python',
  'php',
  'go',
  'cplusplus',
  'c',
  'dotnet',
  'spring',
  'django',
  'laravel',
  'express',
  'astro',
  'fastapi',
  'jinja',
  'geopandas',
  'pytest',
  'ruff',
  'uv',
  'mysql',
  'postgresql',
  'mongodb',
  'sqlite',
  'redis',
  'supabase',
  'firebase',
  'prisma',
  'linux',
  'ubuntu',
  'debian',
  'docker',
  'kubernetes',
  'googlecloud',
  'nginx',
  'apache',
  'gnubash',
  'git',
  'github',
  'gitlab',
  'vercel',
  'cloudflare',
  'cisco',
  'wireshark',
  'youtube',
  'tensorflow',
  'pytorch',
  'huggingface',
  'pandas',
  'numpy',
  'jupyter',
  'scikitlearn',
  'langchain',
  'ollama',
  'anthropic',
  'claude',
  'googlegemini',
  'figma',
  'flutter',
  'dart',
  'kotlin',
  'swift',
  'android',
  'arduino',
  'raspberrypi',
  'unity',
  'blender',
  'wordpress',
  'notion',
  'telegram',
  'whatsapp',
  'microsoft-excel',
  'powerbi',
  'grafana',
  'prometheus',
  'elasticsearch',
  'apachekafka',
  'terraform',
  'ansible',
  'jenkins',
  'npm',
  'vite',
  'rxjs',
  'jest',
  'vitest',
  'cypress',
  'playwright',
  'postman',
  'jira',
  'trello',
];

// Marcas que ya no están en la versión actual de Simple Icons.
// Se toman de Devicon (MIT) o de una versión anterior de Simple Icons.
const FALLBACKS = [
  {
    id: 'openai',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@14/icons/openai.svg',
    viewBox: '0 0 24 24',
  },
  {
    id: 'linkedin',
    url: 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons/linkedin.svg',
    viewBox: '0 0 24 24',
  },
  {
    id: 'amazonwebservices',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
  },
  {
    id: 'microsoftazure',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-plain.svg',
  },
  {
    id: 'csharp',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-plain.svg',
  },
  {
    id: 'java',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-plain.svg',
  },
  {
    id: 'powershell',
    url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/powershell/powershell-plain.svg',
  },
];

const OUT = new URL('../public/icons/tech-sprite.svg', import.meta.url);

// Tecnologías sin marca publicada en Simple Icons ni Devicon. Se dibujan
// aquí, en el mismo trazo monocromo que el resto del sprite.
const CUSTOM = [
  {
    id: 'xarray',
    viewBox: '0 0 24 24',
    inner: '<path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>',
  },
  {
    id: 'netcdf4',
    viewBox: '0 0 24 24',
    inner:
      '<path d="M12 3C7.6 3 4 4.3 4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0-1.7-3.6-3-8-3zm6 15c0 .5-2.4 1.6-6 1.6S6 18.5 6 18v-2.2c1.6.9 3.9 1.3 6 1.3s4.4-.4 6-1.3V18zm0-5c0 .5-2.4 1.6-6 1.6S6 13.5 6 13v-2.2c1.6.9 3.9 1.3 6 1.3s4.4-.4 6-1.3V13zm-6-5.4c-3.6 0-6-1.1-6-1.6S8.4 4.4 12 4.4s6 1.1 6 1.6-2.4 1.6-6 1.6z"/>',
  },
  {
    id: 'matplotlib',
    viewBox: '0 0 24 24',
    inner:
      '<path d="M4 3h2v16h14v2H4V3zm4 11h2.2v4H8v-4zm3.6-5h2.2v9h-2.2V9zm3.6 3h2.2v6h-2.2v-6z"/>',
  },
  {
    id: 'openspec',
    viewBox: '0 0 24 24',
    inner:
      '<path d="M6 2h7l5 5v15H6V2zm2 2v14h8V8h-4V4H8zm1 10.4 2.1 2.1 4-4-1.2-1.2-2.8 2.8-.9-.9-1.2 1.2z"/>',
  },
];

const symbols = [];
const failed = [];

function toSymbol(slug, svg, fallbackViewBox) {
  // Quita el título (el nombre accesible lo aporta el texto de la interfaz).
  svg = svg.replace(/<title>[\s\S]*?<\/title>/g, '');
  // Deja que el color lo herede del contenedor.
  svg = svg.replace(/\sfill="[^"]*"/g, '');
  // Sin degradados: el sprite es monocromo por diseño.
  svg = svg.replace(/<defs>[\s\S]*?<\/defs>/g, '');

  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? fallbackViewBox ?? '0 0 24 24';
  const inner = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>[\s\S]*$/, '')
    .trim();

  return `  <symbol id="tech-${slug}" viewBox="${viewBox}">${inner}</symbol>`;
}

for (const slug of ICONS) {
  try {
    const res = await fetch(`https://cdn.simpleicons.org/${slug}`);
    if (!res.ok) throw new Error(String(res.status));
    symbols.push(toSymbol(slug, await res.text()));
    console.log(`ok  ${slug}`);
  } catch {
    failed.push(slug);
    console.warn(`--  ${slug} (no disponible)`);
  }
}

for (const item of FALLBACKS) {
  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(String(res.status));
    symbols.push(toSymbol(item.id, await res.text(), item.viewBox));
    console.log(`ok  ${item.id} (fuente alternativa)`);
  } catch {
    failed.push(item.id);
    console.warn(`--  ${item.id} (no disponible)`);
  }
}

for (const item of CUSTOM) {
  symbols.push(`  <symbol id="tech-${item.id}" viewBox="${item.viewBox}">${item.inner}</symbol>`);
  console.log(`ok  ${item.id} (local)`);
}

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
${symbols.join('\n')}
</svg>
`;

await mkdir(new URL('../public/icons/', import.meta.url), { recursive: true });
await writeFile(OUT, sprite, 'utf8');

console.log(`\n${symbols.length} iconos escritos en public/icons/tech-sprite.svg`);
if (failed.length) console.log(`Omitidos: ${failed.join(', ')}`);
