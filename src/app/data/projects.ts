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
    title: 'Milagrito — Pollería y Brostería',
    subtitle: 'Carta digital, pedidos y reservas para una pollería de Tingo María.',
    year: 2026,
    kind: 'desarrollo',
    status: 'Demo funcional',

    cover: '/proyectos/milagritos-demo/cover.webp',
    coverAlt: 'Portada de Milagrito con el pollo a la brasa, el precio y el botón de pedido',

    stack: ['angular', 'typescript', 'css', 'vercel'],

    summary:
      'La web de una pollería: carta con precios y promociones, pedido que se arma y se envía por WhatsApp, reserva de mesas, horarios, zonas de delivery y libro de reclamaciones.',

    problem:
      'Los pedidos y las reservas llegaban por WhatsApp y teléfono. Cada consulta de precios, horarios o zonas de reparto se respondía a mano, y en hora punta se perdían mensajes o se anotaban mal los pedidos.',

    solution:
      'Se construyó una web pensada para el celular: el cliente elige sus platos, decide si quiere delivery o recojo y envía el pedido por WhatsApp con el detalle y el total. También reserva mesa con los horarios disponibles y revisa dirección, horarios, zonas de reparto y métodos de pago. La carta y los horarios se actualizan desde un solo lugar.',

    highlights: [
      'Pedido con detalle y total en WhatsApp',
      'Reservas sin llamadas ni idas y vueltas',
      'Horarios y zonas de reparto siempre a la vista',
    ],

    metrics: [
      { value: '9', label: 'platos en la carta' },
      { value: '6', label: 'categorías del menú' },
      { value: '5', label: 'zonas de delivery' },
    ],

    gallery: [
      {
        src: '/proyectos/milagritos-demo/detalle-1.webp',
        alt: 'Carta de Milagrito con buscador, filtros por categoría, precios en soles y botones para agregar al pedido',
        caption: 'Carta con buscador, filtros y precios',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-2.webp',
        alt: 'Pedido abierto con siete platos, delivery gratis desbloqueado, subtotal y botón para enviar por WhatsApp',
        caption: 'Pedido armado y enviado por WhatsApp',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-3.webp',
        alt: 'Formulario de reserva con fecha, número de personas, horarios disponibles y motivo de la visita',
        caption: 'Reserva de mesa con horarios disponibles',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-4.webp',
        alt: 'Dirección, horario semanal, zonas de delivery y mapa de ubicación de Milagrito en Tingo María',
        caption: 'Ubicación, horarios y zonas de reparto',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/milagritos-demo/detalle-5.webp',
        alt: 'Libro de reclamaciones con formulario de tres pasos y datos del proveedor',
        caption: 'Libro de reclamaciones conforme a ley',
        ratio: '4 / 3',
      },
    ],

    links: [{ label: 'Ver sitio', href: 'https://milagritos-demo-mvp.vercel.app/', kind: 'demo' }],

    updated: '2026-11-12',
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
  {
    slug: 'hotel-mirador',
    title: 'Hotel Mirador del Pacífico — PMS + Web de reservas',
    subtitle: 'Sistema hotelero para el mercado peruano: web de reservas y panel de administración.',
    year: 2026,
    kind: 'desarrollo',
    status: 'Demo funcional',

    cover: '/proyectos/hotel-mirador/cover.jpg',
    coverAlt: 'Hotel Mirador del Pacífico: buscador de disponibilidad y tarjetas de habitación en la web pública',

    stack: ['angular', 'primeng', 'typescript', 'chartjs', 'vercel'],

    summary:
      'Aplicación hotelera que une la web pública del hotel con un panel de administración PMS para el personal. El huésped busca disponibilidad, reserva por pasos y paga con Yape. El equipo gestiona el rack de habitaciones, reservas, recepción check-in y check-out, huéspedes, housekeeping, caja, reportes, habitaciones, tarifas, usuarios y configuración. Los datos son simulados y están listos para conectar a una API real.',

    problem:
      'El hotel necesita recibir reservas online y gestionar la operación diaria asignar habitaciones, check-in y check-out, limpieza, pagos y reportes, pero no cuenta con un sistema integrado. El personal coordina todo a mano y el huésped no puede reservar desde la web.',

    solution:
      'Se construyó una sola aplicación Angular con PrimeNG que combina la web pública del hotel buscador de disponibilidad, flujo de reserva por pasos y pago con Yape con un panel PMS para recepción, housekeeping, caja y administración. Los datos se generan simulados alrededor de la fecha actual y se guardan en localStorage, por lo que el rack y el dashboard siempre muestran movimiento. Al conectar una API real solo se reemplazan los servicios mock.',

    highlights: [
      'Reserva por pasos con código de confirmación HMP-AAAA-NNNN',
      'Panel PMS: rack, recepción, housekeeping, caja y reportes',
      'Datos simulados listos para conectar a un backend real',
    ],

    metrics: [
      { value: '5', label: 'tipos de habitación' },
      { value: '30', label: 'habitaciones en 3 pisos' },
      { value: '300', label: 'reservas sin solapamiento' },
      { value: '18 %', label: 'IGV configurable' },
    ],

    gallery: [
      {
        src: '/proyectos/hotel-mirador/detalle-1.jpg',
        alt: 'Flujo de reserva: paso dos, selección de habitación y tarifas del hotel',
        caption: 'Paso 2 del flujo de reserva: elige habitación y tarifa',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/hotel-mirador/detalle-2.jpg',
        alt: 'Confirmación de reserva con código HMP-AAAA-NNNN y resumen del pago',
        caption: 'Confirmación con código de reserva',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/hotel-mirador/detalle-3.jpg',
        alt: 'Rack de habitaciones del panel PMS con estados por piso y número de habitación',
        caption: 'Rack de habitaciones del panel de administración',
        ratio: '16 / 9',
      },
      {
        src: '/proyectos/hotel-mirador/detalle-4.jpg',
        alt: 'Registro de Huéspedes en recepción para el check-in de una llegada del día',
        caption: 'Registro de Huéspedes check-in en recepción',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/hotel-mirador/detalle-5.jpg',
        alt: 'Check-out con comprobante de pago y boleta impresa del huésped',
        caption: 'Check-out con comprobante de pago',
        ratio: '4 / 3',
      },
      {
        src: '/proyectos/hotel-mirador/detalle-6.jpg',
        alt: 'Housekeeping en celular: la habitación pasa de sucia a limpia tras la limpieza',
        caption: 'Housekeeping en el celular',
        ratio: '3 / 4',
      },
      {
        src: '/proyectos/hotel-mirador/detalle-7.jpg',
        alt: 'Reportes del hotel con gráficos de ocupación, ingresos y reservas por mes',
        caption: 'Reportes con gráficos de ocupación e ingresos',
        ratio: '16 / 9',
      },
    ],

    links: [{ label: 'Ver sistema', href: 'https://hotel-mirador-del-pacifico.vercel.app/', kind: 'demo' }],

    updated: '2026-11-12',
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
