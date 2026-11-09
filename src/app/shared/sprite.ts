/**
 * URL del sprite de iconos.
 *
 * IMPORTANTE: al regenerar `public/icons/tech-sprite.svg` con
 * `npm run icons`, sube `SPRITE_VERSION`. Eso cambia la URL y evita
 * que los navegadores sigan usando una copia antigua en caché.
 */
export const SPRITE_VERSION = '2';

export const SPRITE_URL = `/icons/tech-sprite.svg?v=${SPRITE_VERSION}`;

export function spriteHref(id: string): string {
  return `${SPRITE_URL}#tech-${id}`;
}
