/**
 * ─────────────────────────────────────────────────────────────
 *  DATOS DEL PORTAFOLIO — edita solo este archivo para cambiar
 *  tu identidad en toda la web.
 * ─────────────────────────────────────────────────────────────
 */
export const PROFILE = {
  /** Nombre o marca. Aparece en el logo, el pie y los metadatos. */
  name: 'TU NOMBRE',
  /** Dos iniciales para el monograma de la cabecera. */
  initials: 'TN',
  /** Especialidad o cargo. */
  role: 'Ingeniería de Sistemas',
  /** Línea corta que aparece en la cabecera y el pie. */
  focus: 'Infraestructura · Software · Cloud',
  location: 'Tingo María, Perú',
  timezone: 'America/Lima',
  email: 'hola@tudominio.com',
  phone: '+51 000 000 000',
  /** Mientras esté en true se muestra el punto verde de disponibilidad. */
  available: true,
  availabilityLabel: 'Disponible para proyectos',
  /** Dominio final. Se usa para canonical, Open Graph y sitemap. */
  siteUrl: 'https://portafolio-seven-ruby-81.vercel.app',
  /** Año que aparece en el pie. */
  startYear: 2023,

  socials: [
    { label: 'GitHub', handle: '@tu-usuario', href: 'https://github.com/tu-usuario' },
    { label: 'LinkedIn', handle: '/in/tu-usuario', href: 'https://www.linkedin.com/in/tu-usuario' },
    { label: 'Instagram', handle: '@tu-usuario', href: 'https://instagram.com/tu-usuario' },
  ],
} as const;

export type SocialLink = (typeof PROFILE.socials)[number];
