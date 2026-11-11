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
export const PROJECTS: Project[] = [
  {
    slug: 'themodularlab',
    title: 'The Modular Lab',
    subtitle: 'Laboratorios de Linux y cloud que se ejecutan en el navegador.',
    year: 2026,
    kind: 'desarrollo',
    role: 'Arquitectura, desarrollo y despliegue',
    scope: 'Interfaz, API, base de datos y dominio en producción',
    status: 'En producción',
    featured: true,

    cover: '/proyectos/themodularlab/cover.webp',
    coverAlt: 'Portada de The Modular Lab con terminal interactiva en tema oscuro',

    stack: ['astro', 'fastapi', 'python', 'postgresql'],

    summary:
      'Una plataforma de laboratorios interactivos para aprender Linux y cloud escribiendo comandos reales en el navegador. El avance, los cursos y la validación quedan guardados en la base de datos.',

    context:
      'Quien empieza con Linux suele chocar con la misma barrera: instalar una máquina virtual, configurar la red y aprender a la par que pelea con el entorno.\n\nLa propuesta fue mover ese primer contacto al navegador. Un terminal simulado, laboratorios guiados y una cuenta que conserva el progreso entre sesiones.',

    challenge:
      'Había que validar comandos sin ejecutar un sistema real, mantener la sensación de una terminal y sostener el avance del estudiante en el tiempo. Todo desde el navegador y bajo un solo dominio en producción.',

    solution:
      'Separé el sistema en dos capas: Astro entrega las páginas y el terminal; FastAPI expone autenticación, catálogo y progreso; PostgreSQL guarda usuarios, cursos y resultados. La validación compara el comando con patrones definidos por laboratorio, sin levantar una máquina virtual por estudiante.',

    stages: [
      {
        title: 'Interfaz en Astro',
        detail:
          'Páginas pre-renderizadas y una isla para la terminal. El contenido carga sin esperar a la API.',
      },
      {
        title: 'API en FastAPI',
        detail:
          'Autenticación, catálogo de laboratorios, validación de comandos y progreso del estudiante.',
      },
      {
        title: 'PostgreSQL',
        detail: 'Usuarios, cursos, intentos y resultados en un esquema relacional.',
      },
      {
        title: 'Operación',
        detail: 'Despliegue con dominio propio y acceso gratuito desde el primer día.',
      },
    ],

    metrics: [
      { value: '80+', label: 'laboratorios publicados' },
      { value: '15', label: 'labs abiertos en el plan gratuito' },
    ],

    gallery: [
      {
        src: '/proyectos/themodularlab/detalle-1.webp',
        alt: 'Tarjetas de características: terminal real, feedback instantáneo y progreso medible',
        caption: 'Terminal, validación y progreso en una sola vista',
      },
      {
        src: '/proyectos/themodularlab/detalle-2.webp',
        alt: 'Planes Gratis y Premium Pro con sus características y precios en soles',
        caption: 'Planes y acceso a los laboratorios',
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
    role: 'Diseño y desarrollo frontend',
    scope: 'Identidad visual, maquetación y flujos de pedido simulados',
    status: 'Demo de diseño',

    cover: '/proyectos/milagritos-demo/cover.webp',
    coverAlt: 'Portada de Milagritos con pollo a la brasa, precio del combo y botones de pedido',

    stack: ['html5', 'css', 'javascript', 'vercel'],

    summary:
      'Una carta digital con carrito, delivery y libro de reclamaciones para una pollería de Tingo María. Todo el estado del pedido vive en el navegador.',

    context:
      'El local ya tenía carta, promociones y clientes; le faltaba una presencia que resolviera el pedido sin depender de una app o de un backend propio.\n\nLa demo se construyó para validar la identidad visual y el flujo completo antes de invertir en integraciones reales.',

    challenge:
      'El sitio debía sentirse como una brasa, no como una plantilla: fotografía cálida, tipografía de cartel y contraste suficiente para leer precios al sol. Sin servidor, el carrito, los filtros y el cierre del pedido tenían que funcionar igual.',

    solution:
      'Maqueté el sitio en HTML, CSS y JavaScript puro. El carrito, los filtros de la carta y el libro de reclamaciones se resuelven en el cliente; el pedido se arma y se deriva a WhatsApp con el detalle completo. La estructura queda lista para conectar pagos o un panel real.',

    stages: [
      {
        title: 'Sistema visual',
        detail:
          'Paleta de brasa, tipografía editorial y bloques claros y oscuros para separar carta, promos y ubicación.',
      },
      {
        title: 'Carta y carrito',
        detail:
          'Filtros por categoría, cantidades y resumen del pedido con estado en el navegador.',
      },
      {
        title: 'Flujos de demo',
        detail: 'Checkout por WhatsApp, acceso de administrador y libro de reclamaciones.',
      },
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
      },
      {
        src: '/proyectos/milagritos-demo/detalle-2.webp',
        alt: 'Bloque oscuro de combos familiares con el Combo Familiar y sus acompañamientos',
        caption: 'Combos y promociones de la casa',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-3.webp',
        alt: 'Mapa de ubicación, horarios y zonas de delivery de Milagritos',
        caption: 'Ubicación, horarios y zonas de reparto',
      },
    ],

    links: [{ label: 'Ver demo', href: 'https://milagritos-demo-mvp.vercel.app/', kind: 'demo' }],

    updated: '2026-11-09',
  },
  {
    slug: 'pisco-rain-extractor',
    title: 'PISCOp Rain Extractor',
    subtitle: 'Extracción y análisis de lluvia diaria del dataset PISCOp v3.0 (SENAMHI, Perú).',
    year: 2025,
    kind: 'datos',
    role: 'Arquitectura, desarrollo y validación',
    scope: 'Datos geoespaciales, hidrología, backend y visualización de series',
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
      'App web local que extrae la serie diaria de lluvia de un punto o de una cuenca completa a partir de los NetCDF de PISCOp v3.0, y la convierte en estadísticos, gráficos y archivos listos para R, Python o Excel.',

    context:
      'PISCOp v3.0 es el dataset grillado de precipitación diaria del SENAMHI (Perú, rejilla de 0.1°, 1981–2025). Consultarlo suele significar abrir NetCDF de varios GB con scripts sueltos.\n\nLos archivos son propiedad del SENAMHI y no se redistribuyen, así que la app no tiene demo pública: corre en local, sobre una copia propia del dataset.',

    challenge:
      'Había que resolver tres cosas a la vez: elegir la celda correcta para un punto, promediar una cuenca sin contar celdas que no corresponden y no cargar la rejilla diaria completa en memoria. Todo sin JavaScript ni CDN, y con resultados de punto que se puedan marcar y compartir.',

    solution:
      'La app convierte el dataset en un flujo de tres pasos: eliges un punto (WGS84 o UTM 17/18/19) o subes una cuenca (GeoJSON o Shapefile comprimido hasta 10 MB), defines el rango de años y obtienes una página de análisis con resumen, tabla diaria paginada, totales y máximas de 24 h por año, climatología mensual con desviación estándar, mapas y descargas en CSV y Excel.\n\nLas rutas FastAPI quedan delgadas, los servicios no conocen FastAPI y un único repositorio abre los NetCDF. Los resultados de punto son URLs sin estado; los de cuenca viven 24 h en un almacén temporal. El desarrollo siguió OpenSpec (propuesta, specs, diseño y tareas por cambio) y Architecture Decision Records para cada decisión estructural.',

    stages: [
      {
        title: 'Rutas FastAPI',
        detail: 'Formularios, validación de entrada y páginas de resultado, sin lógica de datos.',
      },
      {
        title: 'Servicios',
        detail:
          'Selección de la celda más cercana, media areal, regla de completitud del 95 %, estadísticos y gráficos.',
      },
      {
        title: 'Repositorio NetCDF',
        detail:
          'Un único punto de acceso a los archivos: lectura perezosa y por bloques, sin cargar la rejilla completa.',
      },
      {
        title: 'Plantillas Jinja2',
        detail: 'HTML renderizado en servidor y CSS plano, sin JavaScript ni CDN.',
      },
      {
        title: 'Pruebas y calidad',
        detail: 'Suite de pytest sobre NetCDF sintéticos y ruff en CI local.',
      },
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
        label: 'Repositorio',
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
