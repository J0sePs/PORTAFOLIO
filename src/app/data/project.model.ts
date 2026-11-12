export type ProjectKind = 'desarrollo' | 'infraestructura' | 'redes' | 'datos' | 'automatizacion';

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'demo' | 'repo' | 'doc';
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
  /** Proporción de la captura. Por defecto 16:9. */
  ratio?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  /** Identificador para la URL: /proyectos/<slug>. Solo minúsculas y guiones. */
  slug: string;
  title: string;
  /** Una línea que resume el sistema. */
  subtitle: string;
  year: number;
  kind: ProjectKind;
  /** Estado real del sistema. */
  status: string;
  /** El proyecto que se muestra primero en la portada. */
  featured?: boolean;
  /** Ruta de la captura principal (og:image). 1600×900 recomendado. */
  cover?: string;
  coverAlt?: string;
  /** Tecnologías y lenguajes, en orden de importancia. */
  stack: string[];
  /** Descripción corta: qué hace la aplicación. */
  summary: string;
  /** Qué problema resuelve, en lenguaje cotidiano. */
  problem: string;
  /** Cómo lo resuelve, en lenguaje cotidiano. */
  solution: string;
  /** Tres beneficios concretos, sin tecnicismos. */
  highlights?: string[];
  /** Resultados medibles o entregables concretos. */
  metrics?: ProjectMetric[];
  gallery?: ProjectGalleryItem[];
  links?: ProjectLink[];
  /** Fecha de última actualización de la ficha. */
  updated?: string;
}

export const KIND_LABEL: Record<ProjectKind, string> = {
  desarrollo: 'Desarrollo',
  infraestructura: 'Infraestructura',
  redes: 'Redes',
  datos: 'Datos e IA',
  automatizacion: 'Automatización',
};
