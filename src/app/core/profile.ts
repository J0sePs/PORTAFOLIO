/**
 * ─────────────────────────────────────────────────────────────
 *  DATOS DEL PORTAFOLIO — edita solo este archivo para cambiar
 *  tu identidad en toda la web.
 * ─────────────────────────────────────────────────────────────
 */
export const PROFILE = {
  /** Nombre o marca. Aparece en el logo, el pie y los metadatos. */
  name: 'JOSE PIZARRO',
  /** Dos iniciales para el monograma de la cabecera. */
  initials: 'JP',
  /** Especialidad o cargo. */
  role: 'Ingeniería de Sistemas',
  /** Línea corta que aparece en la cabecera y el pie. */
  focus: 'Infraestructura · Software · Cloud',
  location: 'Tingo María, Perú',
  timezone: 'America/Lima',
  /** Correo electrónico. */
  email: '123fernando159@gmail.com',
  phone: '+51 969 456 449',
  /** Mientras esté en true se muestra el punto verde de disponibilidad. */
  available: true,
  availabilityLabel: 'Disponible para proyectos',
  /** Dominio final. Se usa para canonical, Open Graph y sitemap. */
  siteUrl: 'https://portafolio-seven-ruby-81.vercel.app',
  /** Año que aparece en el pie. */
  startYear: 2023,

  socials: [
    { label: 'GitHub', icon: 'github', handle: '@J0sePs', href: 'https://github.com/J0sePs' },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      handle: 'in/jose-fernando-pizarro-salome-249547434',
      href: 'https://www.linkedin.com/in/jose-fernando-pizarro-salome-249547434/',
    },
    {
      label: 'YouTube',
      icon: 'youtube',
      handle: '@PrimeNote365',
      href: 'https://www.youtube.com/@PrimeNote365',
    },
  ],
} as const;

export type SocialLink = (typeof PROFILE.socials)[number];
