import { Component, inject } from '@angular/core';

import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      type="button"
      class="theme"
      (click)="theme.toggle()"
      [attr.aria-label]="theme.isDark() ? 'Activar tema claro' : 'Activar tema oscuro'"
      [attr.aria-pressed]="theme.isDark()"
      [title]="theme.isDark() ? 'Tema claro' : 'Tema oscuro'"
    >
      <span class="theme__track" aria-hidden="true">
        <span class="theme__dot"></span>
      </span>
      <span class="theme__label" aria-hidden="true">
        {{ theme.isDark() ? 'Oscuro' : 'Claro' }}
      </span>
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
      }

      .theme {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        padding: 0.35rem 0;
        color: var(--ink-2);
      }

      .theme__track {
        position: relative;
        display: block;
        width: 30px;
        height: 16px;
        border: 1px solid var(--line-2);
        border-radius: 1px;
        transition: border-color 0.25s var(--ease);
      }

      .theme__dot {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 8px;
        height: 8px;
        background: var(--ink);
        transition:
          transform 0.3s var(--ease),
          background-color 0.3s var(--ease);
      }

      :host([data-dark='true']) .theme__dot {
        transform: translateX(14px);
        background: var(--accent);
      }

      .theme:hover .theme__track {
        border-color: var(--ink);
      }

      .theme__label {
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        width: 3.4em;
        text-align: left;
      }

      .theme:hover .theme__label {
        color: var(--ink);
      }
    `,
  ],
  host: {
    '[attr.data-dark]': 'theme.isDark()',
  },
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
}
