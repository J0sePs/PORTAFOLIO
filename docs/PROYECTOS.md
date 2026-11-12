# Cómo agregar un proyecto

Cada sistema es un objeto dentro de `PROJECTS`, en `src/app/data/projects.ts`. No hay que tocar componentes: la portada, el archivo, la ficha, el sitemap y los metadatos se generan solos.

---

## 1. Prepara las capturas

```
public/proyectos/<slug>/
├── cover.webp          # captura principal, 1600×900 (16:9)
├── detalle-1.webp      # galería, 1600×1200 (4:3) o 16:9
└── detalle-2.webp
```

- Formato `.webp` (o `.jpg`). Menos de 400 kB por imagen.
- La captura principal debe mostrar **el sistema funcionando**, no un mockup decorativo.
- Sin marcos de navegador, sin sombras, sin fondos de escritorio.
- Texto legible: si la captura es muy amplia, recorta a la zona que importa.
- Escribe siempre un `alt` que describa qué se ve, no "captura del sistema".
- La ficha se lee mejor con **cuatro capturas o más**: portada, flujo principal, panel y algún detalle.

El `slug` va en minúsculas, sin tildes y con guiones: `monitoreo-de-red`.

---

## 2. Copia la plantilla

```ts
{
  slug: 'monitoreo-de-red',
  title: 'Monitoreo de red del campus',
  subtitle: 'Telemetría en tiempo real para ocho switches y tres sedes.',

  year: 2025,
  kind: 'redes',                       // desarrollo | infraestructura | redes | datos | automatizacion
  status: 'En producción',
  featured: true,                      // solo uno; ocupa la portada

  cover: '/proyectos/monitoreo-de-red/cover.webp',
  coverAlt: 'Tablero con estado de enlaces, latencia y alertas por sede',

  stack: ['cisco', 'linux', 'python', 'grafana', 'docker', 'mysql'],

  summary:
    'Un sistema que muestra el estado de los enlaces, la latencia y el tráfico de la red del campus en un solo tablero, para que el equipo de soporte detecte fallas sin revisar equipo por equipo.',

  problem:
    'La red crecía sin una vista común. Cada incidencia se diagnosticaba a ciegas, consultando equipos por separado, y nadie sabía qué había pasado después de una caída.',

  solution:
    'El sistema consulta los switches cada pocos minutos y guarda el histórico en una base local. El equipo entra a un tablero, ve el estado por sede y recibe alertas cuando un enlace se cae o la latencia sube.',

  highlights: [
    'Una sola vista para toda la red',
    'Avisos antes de que el usuario reclame',
    'Histórico para explicar cada caída',
  ],

  metrics: [
    { value: '8', label: 'switches monitoreados' },
    { value: '−70 %', label: 'tiempo de diagnóstico' },
  ],

  gallery: [
    {
      src: '/proyectos/monitoreo-de-red/detalle-1.webp',
      alt: 'Vista de topología por sede',
      caption: 'Topología y estado por enlace',
      ratio: '16 / 9',                 // opcional; por defecto 16:9
    },
  ],

  links: [
    { label: 'Ver sistema', href: 'https://…', kind: 'demo' },
    { label: 'Repositorio', href: 'https://github.com/…', kind: 'repo' },
  ],

  updated: '2025-11-01',
}
```

### Campos obligatorios

`slug`, `title`, `subtitle`, `year`, `kind`, `status`, `stack`, `summary`, `problem`, `solution`.

Los demás son opcionales y su sección desaparece si no existen (`highlights`, `metrics`, `gallery`, `links`).

### Ids de `stack`

Deben existir en `src/app/data/tech.ts`. Ejemplos:

`angular`, `astro`, `typescript`, `javascript`, `python`, `java`, `php`, `csharp`, `nodedotjs`,
`mysql`, `postgresql`, `mongodb`, `redis`, `linux`, `ubuntu`, `docker`, `kubernetes`,
`amazonwebservices`, `microsoftazure`, `googlecloud`, `nginx`, `git`, `github`, `cisco`,
`wireshark`, `gnubash`, `powershell`, `tensorflow`, `pytorch`, `openai`, `figma`.

Si falta una tecnología, añádela al sprite (ver README) y al catálogo.

---

## 3. Cómo escribir la ficha

La ficha la lee un cliente, no otro programador. Debe entenderse en un minuto y sin conocer las herramientas.

**subtitle** — una línea que diga qué es, sin tecnicismos.

**summary** — qué hace la aplicación, en dos o tres frases. Es lo primero que se ve.

**problem** — el problema real: qué se hacía antes, qué dolía, qué tiempo o dinero se perdía. Sin nombres de tecnologías.

**solution** — cómo lo resuelve, en pasos que cualquiera entienda: qué hace el usuario y qué obtiene.

**highlights** — tres beneficios concretos y cortos. Si no aportan, déjalos fuera.

**metrics** — solo datos verificables: equipos, tiempos, porcentajes, volúmenes. Si no puedes medirlo, no lo inventes; deja el campo fuera.

**stack** — los logos hablan por sí solos. No expliques qué es cada tecnología en el texto.

**links** — demo, repositorio o documentación. El enlace de la demo se muestra como botón destacado al inicio y al final de la ficha.

### Tono

- Primera persona, frases cortas.
- Beneficios y resultados, no listas de herramientas.
- Nada de "apasionado por la tecnología" ni "soluciones innovadoras".
- Si el proyecto fue académico, dilo: `status: 'Proyecto académico'`.

---

## 4. Revisión final

- [ ] El `slug` coincide con la carpeta de imágenes.
- [ ] La portada se ve bien en 16:9 y en móvil.
- [ ] Hay al menos cuatro capturas y todas se entienden sin explicación.
- [ ] Todos los ids de `stack` existen en `tech.ts`.
- [ ] `featured: true` está en un solo proyecto.
- [ ] La ficha se entiende sin haber visto el sistema y sin saber programar.
- [ ] No hay datos inventados ni capturas de otros autores.
- [ ] `npm run build` y `npm run seo` terminan sin errores.
