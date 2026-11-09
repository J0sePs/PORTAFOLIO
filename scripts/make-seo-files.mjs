/**
 * Genera public/robots.txt y public/sitemap.xml a partir de los datos
 * reales del sitio (profile.ts y projects.ts). Se ejecuta antes de cada build.
 *
 * Uso: node scripts/make-seo-files.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const write = (path, content) => writeFile(new URL(path, import.meta.url), content, 'utf8');

const profile = await read('../src/app/core/profile.ts');
const projects = await read('../src/app/data/projects.ts');

const siteUrl = profile.match(/siteUrl:\s*'([^']+)'/)?.[1]?.replace(/\/+$/, '');

if (!siteUrl) {
  throw new Error('No se encontró siteUrl en src/app/core/profile.ts');
}

const slugs = [...projects.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const today = new Date().toISOString().slice(0, 10);

const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/proyectos', priority: '0.9', changefreq: 'monthly' },
  ...slugs.map((slug) => ({
    path: `/proyectos/${slug}`,
    priority: '0.8',
    changefreq: 'yearly',
  })),
  { path: '/estudio', priority: '0.7', changefreq: 'yearly' },
  { path: '/contacto', priority: '0.6', changefreq: 'yearly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `# ${siteUrl.replace(/^https?:\/\//, '')}
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await write('../public/sitemap.xml', sitemap);
await write('../public/robots.txt', robots);

console.log(`SEO: ${routes.length} URLs en sitemap · ${siteUrl}`);
