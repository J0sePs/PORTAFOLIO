# PORTAFOLIO

Portafolio personal de ingeniería de sistemas. Sitio estático construido con **Angular 22**, tipografía editorial, tema claro/oscuro y fichas de proyecto documentadas.

> Sistema de diseño: papel cálido, tinta profunda, una sola retícula técnica y un acento óxido. Sin gradientes, sin tarjetas flotantes, sin plantillas genéricas.

---

## Requisitos

- Node.js 22 o superior
- npm 11+
- (Opcional) Vercel CLI para desplegar desde la terminal

## Empezar

```bash
npm install
npm start          # http://localhost:4200
npm run build      # dist/portafolio/browser
```

---

## Personalizar

### 1. Identidad

Todo lo que aparece en la cabecera, el pie y los metadatos vive en un solo archivo:

```
src/app/core/profile.ts
```

Cambia nombre, iniciales, rol, ubicación, correo, redes y el dominio final (`siteUrl`). El monograma de la cabecera usa `initials` (dos letras).

### 2. Proyectos

Los proyectos son datos, no componentes. Se declaran en:

```
src/app/data/projects.ts
```

Cada objeto de `PROJECTS` genera automáticamente:

- una fila en `/proyectos`,
- una ficha completa en `/proyectos/<slug>`,
- metadatos y JSON-LD para buscadores,
- el bloque destacado de la portada (el primero con `featured: true`).

La guía completa, la plantilla y las medidas de imagen están en **[docs/PROYECTOS.md](docs/PROYECTOS.md)**.

### 3. Tecnologías e iconos

El catálogo de nombres y categorías está en `src/app/data/tech.ts`. Los iconos son SVG monocromos servidos desde un sprite:

```
public/icons/tech-sprite.svg
```

Para regenerarlo (descarga desde Simple Icons + Devicon):

```bash
npm run icons
```

Para añadir una tecnología, agrega el id al arreglo `ICONS` de `scripts/build-tech-sprite.mjs`, regenera el sprite y declárala en `tech.ts`.

### 4. Tema claro / oscuro

- Tokens en `src/styles.css` (`:root` y `:root[data-theme='dark']`).
- El tema se aplica antes del primer pintado con un script inline en `src/index.html` (sin destello).
- Preferencia guardada en `localStorage`; si no existe, respeta `prefers-color-scheme`.
- El interruptor está en la cabecera y funciona también con teclado.

### 5. Tipografía

Fuentes self-hosted en `public/fonts` (subset latin):

| Uso                | Fuente           | Licencia |
| ------------------ | ---------------- | -------- |
| Titulares          | Instrument Serif | SIL OFL  |
| Texto              | Inter Tight      | SIL OFL  |
| Etiquetas técnicas | JetBrains Mono   | SIL OFL  |

Se descargan con `npm run fonts` y se declaran con `@font-face` en `src/styles.css`.

---

## Estructura

```
src/
├── app/
│   ├── core/
│   │   ├── profile.ts          # identidad y configuración global
│   │   ├── theme.service.ts    # claro / oscuro
│   │   ├── seo.service.ts      # title, meta, canonical, JSON-LD
│   │   └── project.guard.ts    # 404 para slugs inexistentes
│   ├── data/
│   │   ├── projects.ts         # tus sistemas (vacío por defecto)
│   │   ├── project.model.ts    # contrato de un proyecto
│   │   └── tech.ts             # catálogo de tecnologías
│   ├── features/
│   │   ├── home/               # portada
│   │   ├── work/               # archivo con filtros
│   │   ├── project/            # ficha /proyectos/:slug
│   │   ├── about/              # perfil
│   │   ├── contact/            # contacto
│   │   └── not-found/          # 404
│   └── shared/                 # cabecera, pie, fila, media, iconos…
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── proyectos/<slug>/       # capturas de cada sistema
│   └── og.png
└── styles.css                  # tokens + base + utilidades
```

**Carga diferida**: cada página es un chunk independiente (16–50 kB). El bundle inicial ronda los 72 kB comprimidos.

---

## Editorial

- **Retícula** de 12 columnas con reglas de 1 px en lugar de cajas.
- **Numeración** de secciones y proyectos (01, 02…) como índice de archivo.
- **Tipografía** serif de alto contraste para titulares; sans para lectura; mono para datos.
- **Movimiento** medido: revelado al hacer scroll, transición entre rutas y hover de filas. Todo respeta `prefers-reduced-motion`.
- **Accesibilidad**: enlace para saltar al contenido, foco visible, `aria-current`, contraste AA, iconos decorativos ocultos a lectores de pantalla.

---

## SEO y metadatos

`SeoService` actualiza por ruta:

- `<title>` y `<meta name="description">`
- Open Graph y Twitter Card
- `<link rel="canonical">`
- JSON-LD (`Person`, `ProfilePage`, `ContactPage`, `CreativeWork`)

`npm run seo` regenera `public/robots.txt` y `public/sitemap.xml` a partir de `profile.ts` y `projects.ts`. Se ejecuta automáticamente antes de cada build (`prebuild`).

La imagen social es `public/og.png` (1200×630). Se regenera con:

```bash
npm run og
```

---

## Desplegar en Vercel

### Desde GitHub (recomendado)

1. Sube el repositorio a GitHub.
2. En Vercel: **Add New → Project → Import** y elige el repositorio.
3. Vercel detecta Angular. Configuración usada:
   - Build command: `npm run build`
   - Output directory: `dist/portafolio/browser`
   - Framework preset: Angular
4. Deploy.

### Desde la terminal

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # producción
```

`vercel.json` ya incluye la reescritura SPA, cabeceras de seguridad y URLs limpias.

> Después del primer despliegue, actualiza `siteUrl` en `src/app/core/profile.ts` con el dominio real y vuelve a desplegar. Eso corrige canonical, Open Graph y sitemap.

---

## Scripts

| Comando          | Qué hace                                             |
| ---------------- | ---------------------------------------------------- |
| `npm start`      | Servidor de desarrollo                               |
| `npm run build`  | Build de producción                                  |
| `npm test`       | Pruebas unitarias (Vitest)                           |
| `npm run seo`    | Regenera robots.txt y sitemap.xml                    |
| `npm run icons`  | Regenera el sprite de tecnologías                    |
| `npm run fonts`  | Descarga las fuentes self-hosted                     |
| `npm run og`     | Regenera la imagen Open Graph (Windows / PowerShell) |
| `npm run format` | Formatea con Prettier                                |

---

## Créditos

- Iconos de tecnologías: [Simple Icons](https://simpleicons.org) (CC0) y [Devicon](https://devicon.dev) (MIT). Son marcas de sus respectivos propietarios y se usan solo para identificar las herramientas de cada proyecto.
- Fuentes: Google Fonts, SIL Open Font License.
- Diseño y desarrollo: el autor del portafolio.
