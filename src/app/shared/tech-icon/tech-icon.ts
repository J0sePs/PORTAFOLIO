import { Component, computed, input } from '@angular/core';

import { techInfo } from '../../data/tech';
import { spriteHref } from '../sprite';

@Component({
  selector: 'app-tech-icon',
  template: `
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
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
    '[attr.title]': 'label()',
  },
})
export class TechIcon {
  readonly tech = input.required<string>();

  protected readonly href = computed(() => spriteHref(this.tech()));
  protected readonly label = computed(() => techInfo(this.tech()).name);
}
