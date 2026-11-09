import { Component, input } from '@angular/core';

type Direction = 'right' | 'left' | 'up-right' | 'down';

@Component({
  selector: 'app-arrow',
  template: `
    <svg class="arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      @switch (direction()) {
        @case ('up-right') {
          <path d="M4 12 12 4" />
          <path d="M5.5 4H12v6.5" />
        }
        @case ('down') {
          <path d="M8 2.5v11" />
          <path d="M4 9.5 8 13.5 12 9.5" />
        }
        @case ('left') {
          <path d="M13.5 8h-11" />
          <path d="M6.5 4 2.5 8l4 4" />
        }
        @default {
          <path d="M2.5 8h11" />
          <path d="M9.5 4l4 4-4 4" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex: none;
      }

      svg {
        width: 1em;
        height: 1em;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.4;
        stroke-linecap: square;
        stroke-linejoin: miter;
      }
    `,
  ],
})
export class Arrow {
  readonly direction = input<Direction>('right');
}
