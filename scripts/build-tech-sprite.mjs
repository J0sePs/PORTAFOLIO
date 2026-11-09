/**
 * Genera el sprite SVG de tecnologías a partir de Simple Icons (CC0).
 *
 * Uso:  node scripts/build-tech-sprite.mjs
 *
 * - Descarga cada icono desde cdn.simpleicons.org
 * - Elimina colores propios para que hereden `currentColor`
 * - Escribe public/icons/tech-sprite.svg
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
  'fastapi',
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

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
${symbols.join('\n')}
</svg>
`;

await mkdir(new URL('../public/icons/', import.meta.url), { recursive: true });
await writeFile(OUT, sprite, 'utf8');

console.log(`\n${symbols.length} iconos escritos en public/icons/tech-sprite.svg`);
if (failed.length) console.log(`Omitidos: ${failed.join(', ')}`);
