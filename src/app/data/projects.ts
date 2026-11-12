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
 *
 *  La ficha se escribe para un cliente, no para otro programador:
 *  qué hace la aplicación, qué problema resuelve y cómo se usa.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'themodularlab',
    title: 'The Modular Lab',
    subtitle: 'Laboratorios de Linux y cloud que se ejecutan en el navegador.',
    year: 2026,
    kind: 'desarrollo',
    status: 'En producción',
    featured: true,

    cover: '/proyectos/themodularlab/cover.webp',
    coverAlt: 'Portada de The Modular Lab con terminal interactiva en tema oscuro',

    stack: ['astro', 'fastapi', 'python', 'postgresql'],

    summary:
      'Una plataforma para aprender Linux y cloud practicando con comandos reales en el navegador. El estudiante elige un laboratorio, escribe comandos y recibe al instante la corrección; su avance queda guardado en su cuenta.',

    problem:
      'Empezar con Linux suele ser frustrante: antes de aprender hay que instalar una máquina virtual, configurar la red y resolver errores del entorno. Muchos estudiantes se quedan en ese primer paso. Del otro lado, el docente tiene que revisar a mano si cada ejercicio se hizo bien.',

    solution:
      'La plataforma lleva ese primer contacto al navegador: no hay nada que instalar. El estudiante practica en un terminal que responde como uno real, recibe la corrección al instante y continúa donde se quedó desde cualquier equipo. Los laboratorios están ordenados por nivel y el plan gratuito abre los primeros.',

    highlights: [
      'Practica sin instalar nada',
      'Corrección automática al instante',
      'El avance se guarda en la cuenta',
    ],

    metrics: [
      { value: '80+', label: 'laboratorios publicados' },
      { value: '15', label: 'labs abiertos en el plan gratuito' },
    ],

    gallery: [
      {
        src: '/proyectos/themodularlab/detalle-1.webp',
        alt: 'Tarjetas de características: terminal real, feedback instantáneo y progreso medible',
        caption: 'Terminal, corrección y progreso en una sola vista',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/themodularlab/detalle-2.webp',
        alt: 'Planes Gratis y Premium Pro con sus características y precios en soles',
        caption: 'Planes y acceso a los laboratorios',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/themodularlab/cuenta.webp',
        alt: 'Pantalla de registro para crear una cuenta gratuita en The Modular Lab',
        caption: 'Creación de cuenta en un solo paso',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/themodularlab/acceso.webp',
        alt: 'Pantalla de inicio de sesión con correo y acceso con Google',
        caption: 'Acceso con correo o con Google',
        ratio: '4 / 3',
      },
    ],

    links: [{ label: 'Ver sistema', href: 'https://www.themodularlab.com/', kind: 'demo' }],

    updated: '2026-11-09',
  },
  {
    slug: 'milagritos-demo',
    title: 'Milagritos — Pollería y Brostería',
    subtitle: 'Carta digital con pedidos para una pollería de Castillo Grande.',
    year: 2026,
    kind: 'desarrollo',
    status: 'Demo de diseño',

    cover: '/proyectos/milagritos-demo/cover.webp',
    coverAlt: 'Portada de Milagritos con pollo a la brasa, precio del combo y botones de pedido',

    stack: ['html5', 'css', 'javascript', 'vercel'],

    summary:
      'La carta digital de una pollería: el cliente ve los platos, arma su pedido, elige delivery o recojo y lo envía por WhatsApp con el detalle completo. Incluye un panel para revisar pedidos, clientes y ventas del día.',

    problem:
      'Los pedidos llegaban por WhatsApp y teléfono, y cada consulta de precios, promociones o zonas de reparto se respondía a mano. En hora punta eso hacía perder tiempo y provocaba errores al anotar el pedido.',

    solution:
      'Se armó una web pensada para el celular donde el cliente ve la carta actualizada, arma el pedido y lo envía listo por WhatsApp, sin repetir nada. La dueña entra a un panel simple para revisar pedidos, clientes y ventas. Es una demostración: los datos de prueba se guardan en el mismo navegador, sin depender de un servidor.',

    highlights: [
      'Pedidos armados sin errores',
      'Atención más rápida en hora punta',
      'Panel de control para el negocio',
    ],

    metrics: [
      { value: '8', label: 'platos en la carta' },
      { value: '5', label: 'categorías de menú' },
      { value: '4', label: 'zonas de delivery' },
    ],

    gallery: [
      {
        src: '/proyectos/milagritos-demo/detalle-1.webp',
        alt: 'Carta de platos con filtros por categoría, precios y botones para agregar al pedido',
        caption: 'Carta con filtros y precios en soles',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-2.webp',
        alt: 'Bloque oscuro de combos familiares con el Combo Familiar y sus acompañamientos',
        caption: 'Combos y promociones de la casa',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-3.webp',
        alt: 'Mapa de ubicación, horarios y zonas de delivery de Milagritos',
        caption: 'Ubicación, horarios y zonas de reparto',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/cuenta.webp',
        alt: 'Pantalla de inicio de sesión y creación de cuenta de Milagritos',
        caption: 'Cuenta de cliente y acceso de administrador',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/panel.webp',
        alt: 'Panel de administración con ventas del día, pedidos, clientes y gráficos',
        caption: 'Panel del negocio: ventas y pedidos del día',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/clientes.webp',
        alt: 'Lista de clientes registrados con sus permisos de contacto por WhatsApp y correo',
        caption: 'Base de clientes y permisos de contacto',
        ratio: '4 / 3',
      },
    ],

    links: [{ label: 'Ver demo', href: 'https://milagritos-demo-mvp.vercel.app/', kind: 'demo' }],

    updated: '2026-11-09',
  },
  {
    slug: 'pisco-rain-extractor',
    title: 'PISCOp Rain Extractor',
    subtitle: 'Extracción y análisis de lluvia diaria con los datos del SENAMHI.',
    year: 2025,
    kind: 'datos',
    status: 'Funcional, demo local',

    cover: '/proyectos/pisco-rain-extractor/point-annual.webp',
    coverAlt: 'Totales anuales y máximas de 24 h por año en gráficos de barras',

    stack: [
      'python',
      'fastapi',
      'jinja',
      'xarray',
      'netcdf4',
      'geopandas',
      'matplotlib',
      'pandas',
      'pytest',
      'ruff',
      'uv',
      'openspec',
    ],

    summary:
      'Una aplicación que extrae la lluvia diaria de un punto o de una cuenca completa a partir de los datos oficiales del SENAMHI. Entrega tablas, gráficos y archivos listos para Excel, R o Python.',

    problem:
      'Los datos de lluvia del SENAMHI vienen en archivos enormes que solo se abren con programas especializados. Sacar la serie de un punto o el promedio de una cuenca obligaba a escribir scripts nuevos cada vez, y era fácil equivocarse de celda o de periodo.',

    solution:
      'La aplicación convierte ese trabajo en tres pasos: elegir un punto en el mapa o subir el contorno de una cuenca, indicar los años y descargar el resultado. Entrega totales y máximas por año, promedios mensuales, mapas y archivos en CSV o Excel. Corre en la computadora del usuario porque los datos pertenecen al SENAMHI y no se pueden publicar.',

    highlights: [
      'Sin escribir código',
      'Resultados listos para Excel, R o Python',
      'Análisis por punto o por cuenca',
    ],

    metrics: [
      { value: '1981–2025', label: 'años de serie diaria' },
      { value: '287 MB', label: 'pico de memoria en una cuenca de 50×50 celdas' },
      { value: '0.001 mm', label: 'tolerancia frente a valores de referencia' },
    ],

    gallery: [
      {
        src: '/proyectos/pisco-rain-extractor/home.webp',
        alt: 'Pantalla de inicio con acceso a extracción por punto y por cuenca',
        caption: 'Inicio: extracción por punto o por cuenca',
      },
      {
        src: '/proyectos/pisco-rain-extractor/dataset.webp',
        alt: 'Catálogo que verifica los archivos PISCOp disponibles y su estructura',
        caption: 'Catálogo de archivos PISCOp verificados',
      },
      {
        src: '/proyectos/pisco-rain-extractor/point-form.webp',
        alt: 'Formulario de punto con entrada WGS84 y conversión desde UTM',
        caption: 'Punto por coordenadas o por UTM',
      },
      {
        src: '/proyectos/pisco-rain-extractor/point-summary.webp',
        alt: 'Resumen de la serie diaria de un punto con mapa de ubicación',
        caption: 'Resumen de la serie diaria de un punto',
      },
      {
        src: '/proyectos/pisco-rain-extractor/point-annual.webp',
        alt: 'Totales y máximas de 24 h por año con gráfico',
        caption: 'Totales y máximas de 24 h por año',
      },
      {
        src: '/proyectos/pisco-rain-extractor/basin-form.webp',
        alt: 'Formulario para subir una cuenca en GeoJSON o Shapefile',
        caption: 'Cuenca por GeoJSON o Shapefile comprimido',
      },
      {
        src: '/proyectos/pisco-rain-extractor/basin-cells.webp',
        alt: 'Mapa de la cuenca y de las celdas PISCOp usadas en el promedio areal',
        caption: 'Celdas usadas en el promedio areal',
      },
      {
        src: '/proyectos/pisco-rain-extractor/basin-summary.webp',
        alt: 'Resumen de la serie areal diaria de una cuenca de 2 332.9 km²',
        caption: 'Resumen de la serie areal de la cuenca',
      },
    ],

    links: [
      {
        label: 'Ver repositorio',
        href: 'https://github.com/J0sePs/pisco-rain-extractor',
        kind: 'repo',
      },
    ],

    updated: '2026-11-11',
  },
];

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
