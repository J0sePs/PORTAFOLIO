import { Component, computed, input } from '@angular/core';

/**
 * Icono de red social. Reutiliza el sprite de `/icons/tech-sprite.svg`
 * (GitHub, LinkedIn y YouTube están incluidos).
 */
@Component({
  selector: 'app-social-icon',
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <use [attr.href]="href()"></use>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        width: 1em;
        height: 1em;
        flex: none;
      }

      svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
      }
    `,
  ],
  host: {
    'aria-hidden': 'true',
  },
})
export class SocialIcon {
  readonly network = input.required<string>();

  protected readonly href = computed(() => `/icons/tech-sprite.svg#tech-${this.network()}`);
}
