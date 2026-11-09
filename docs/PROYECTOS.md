# Cómo agregar un proyecto

Cada sistema es un objeto dentro de `PROJECTS`, en `src/app/data/projects.ts`. No hay que tocar componentes: la portada, el archivo, la ficha, el sitemap y los metadatos se generan solos.

---

## 1. Prepara las capturas

```
public/proyectos/<slug>/
├── cover.webp          # captura principal, 1600×900 (16:9)
├── detalle-1.webp      # galería, 1600×1200 (4:3)
└── detalle-2.webp
```

- Formato `.webp` (o `.jpg`). Menos de 400 kB por imagen.
- La captura principal debe mostrar **el sistema funcionando**, no un mockup decorativo.
- Sin marcos de navegador, sin sombras, sin fondos de escritorio.
- Texto legible: si la captura es muy amplia, recorta a la zona que importa.
- Escribe siempre un `alt` que describa qué se ve, no "captura del sistema".

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
  role: 'Arquitectura y desarrollo',
  scope: 'Diseño de red, colector de métricas y tablero',
  status: 'En producción',
  featured: true,                      // solo uno; ocupa la portada

  cover: '/proyectos/monitoreo-de-red/cover.webp',
  coverAlt: 'Tablero con estado de enlaces, latencia y alertas por sede',

  stack: ['cisco', 'linux', 'python', 'grafana', 'docker', 'mysql'],

  summary:
    'Un sistema que recolecta estado de enlaces, latencia y tráfico de la red del campus y lo expone en un tablero único para el equipo de soporte.',

  context:
    'La red crecía sin una fuente única de verdad. Cada incidencia se diagnosticaba a ciegas, consultando equipos por separado.\n\nEl objetivo era tener una vista operativa común, con histórico suficiente para explicar qué pasó después de una caída.',

  challenge:
    'Los equipos no exponían métricas de forma homogénea y la red no podía detenerse para instrumentarla. Había que colectar datos sin afectar el tráfico y con un presupuesto mínimo de hardware.',

  solution:
    'Se desplegó un colector en un servidor Linux que consulta los switches por SNMP y guarda series de tiempo en una base local. Un tablero consume esos datos y genera alertas por umbral.',

  stages: [
    {
      title: 'Descubrimiento y topología',
      detail: 'Levantamiento de la red, identificadores de cada equipo y definición de las métricas que importan.',
    },
    {
      title: 'Colector de métricas',
      detail: 'Servicio en Python con sondeo SNMP programado y almacenamiento en series de tiempo.',
    },
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
    },
  ],

  links: [
    { label: 'Ver tablero', href: 'https://…', kind: 'demo' },
    { label: 'Repositorio', href: 'https://github.com/…', kind: 'repo' },
  ],

  updated: '2025-11-01',
}
```

### Campos obligatorios

`slug`, `title`, `subtitle`, `year`, `kind`, `role`, `scope`, `status`, `stack`, `summary`, `context`, `challenge`, `solution`.

Los demás son opcionales y su sección desaparece si no existen (`stages`, `metrics`, `gallery`, `links`).

### Ids de `stack`

Deben existir en `src/app/data/tech.ts`. Ejemplos:

`angular`, `astro`, `typescript`, `javascript`, `python`, `java`, `php`, `csharp`, `nodedotjs`,
`mysql`, `postgresql`, `mongodb`, `redis`, `linux`, `ubuntu`, `docker`, `kubernetes`,
`amazonwebservices`, `microsoftazure`, `googlecloud`, `nginx`, `git`, `github`, `cisco`,
`wireshark`, `gnubash`, `powershell`, `tensorflow`, `pytorch`, `openai`, `figma`.

Si falta una tecnología, añádela al sprite (ver README) y al catálogo.

---

## 3. Cómo escribir la ficha

La ficha se lee como un caso técnico, no como una landing page.

**summary** — qué hace el sistema, en una o dos frases. Sin adjetivos vacíos.

**context** — el punto de partida: quién lo usa, qué había antes, qué dolía. Dos párrafos cortos separados por `\n\n`.

**challenge** — la restricción real: presupuesto, red inestable, datos sucios, plazo, hardware limitado. Es lo que demuestra criterio.

**solution** — qué construiste y por qué esa forma. Menciona la decisión técnica, no la lista de herramientas (para eso está `stack`).

**stages** — las capas del sistema, de arriba a abajo. Cuatro o cinco como máximo. Cada una con una frase concreta.

**metrics** — solo datos verificables: equipos, tiempos, porcentajes, volúmenes. Si no puedes medirlo, no lo inventes; deja el campo fuera.

**links** — demo, repositorio o documentación. Si el código es privado, no pongas el enlace.

### Tono

- Primera persona, frases cortas.
- Decisiones y restricciones, no virtudes.
- Nada de "apasionado por la tecnología" ni "soluciones innovadoras".
- Si el proyecto fue académico, dilo: `status: 'Proyecto académico'`.

---

## 4. Revisión final

- [ ] El `slug` coincide con la carpeta de imágenes.
- [ ] La portada se ve bien en 16:9 y en móvil.
- [ ] Todos los ids de `stack` existen en `tech.ts`.
- [ ] `featured: true` está en un solo proyecto.
- [ ] La ficha se entiende sin haber visto el sistema.
- [ ] No hay datos inventados ni capturas de otros autores.
- [ ] `npm run build` y `npm run seo` terminan sin errores.
