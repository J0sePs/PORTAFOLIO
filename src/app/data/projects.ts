import { Project } from './project.model';

/**
 * ─────────────────────────────────────────────────────────────
 *  PROYECTOS
 * ─────────────────────────────────────────────────────────────
 *  Solo se publican sistemas construidos por ti. Para añadir uno:
 *
 *  1. Crea la carpeta `public/proyectos/<slug>/` y guarda ahí las
 *     capturas (1600×900, .webp o .jpg, menos de 400 kB).
 *  2. Copia la plantilla de `docs/PROYECTOS.md` al final de esta lista.
 *  3. Completa los campos. `stack` usa los ids de `tech.ts`.
 *
 *  El orden de la lista es el orden en que aparecen en la web.
 *  El primero con `featured: true` ocupa la portada.
 */
export const PROJECTS: Project[] = [];

/** Proyecto de portada: el destacado o, en su defecto, el primero. */
export function featuredProject(): Project | undefined {
  return PROJECTS.find((project) => project.featured) ?? PROJECTS[0];
}

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

/** Proyecto siguiente en el archivo (circular). */
export function nextProject(slug: string): Project | undefined {
  if (PROJECTS.length < 2) return undefined;
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return PROJECTS[(index + 1) % PROJECTS.length];
}

/** Cantidad de proyectos por tipo, para los filtros del archivo. */
export function projectKinds(): { kind: Project['kind']; count: number }[] {
  const counts = new Map<Project['kind'], number>();
  for (const project of PROJECTS) {
    counts.set(project.kind, (counts.get(project.kind) ?? 0) + 1);
  }
  return [...counts.entries()].map(([kind, count]) => ({ kind, count }));
}
