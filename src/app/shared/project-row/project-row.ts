import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { KIND_LABEL, Project } from '../../data/project.model';
import { Arrow } from '../arrow/arrow';
import { TechIcon } from '../tech-icon/tech-icon';

@Component({
  selector: 'app-project-row',
  imports: [RouterLink, TechIcon, Arrow],
  template: `
    <a class="row" [routerLink]="['/proyectos', project().slug]">
      <span class="row__index">{{ index() }}</span>

      <span class="row__body">
        <span class="row__title">{{ project().title }}</span>
        <span class="row__sub">{{ project().subtitle }}</span>
      </span>

      <span class="row__kind">{{ kindLabel() }}</span>

      <span class="row__tech" aria-hidden="true">
        @for (tech of project().stack.slice(0, 4); track tech) {
          <app-tech-icon [tech]="tech" />
        }
        @if (project().stack.length > 4) {
          <span class="row__more">+{{ project().stack.length - 4 }}</span>
        }
      </span>

      <span class="row__year">{{ project().year }}</span>

      <span class="row__arrow" aria-hidden="true">
        <app-arrow />
      </span>
    </a>
  `,
  styles: [
    `
      :host {
        display: block;
        border-bottom: 1px solid var(--line);
      }

      .row {
        display: grid;
        grid-template-columns: 3rem minmax(0, 1fr) 8.5rem auto 3.5rem 1.5rem;
        align-items: center;
        gap: clamp(0.75rem, 2vw, 2rem);
        padding: clamp(1.15rem, 2.2vw, 1.6rem) 0;
        transition:
          background-color 0.3s var(--ease),
          padding 0.35s var(--ease);
      }

      :host(:first-child) .row {
        border-top: 1px solid var(--line);
      }

      :host(:hover) .row {
        background: var(--bg-2);
        padding-inline: clamp(0.75rem, 1.6vw, 1.25rem);
      }

      .row__index {
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.1em;
        color: var(--muted);
        align-self: start;
        padding-top: 0.45rem;
      }

      .row__body {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        min-width: 0;
      }

      .row__title {
        font-family: var(--serif);
        font-size: clamp(1.5rem, 2.6vw, 2.15rem);
        line-height: 1.05;
        letter-spacing: -0.015em;
        transition: color 0.25s;
      }

      :host(:hover) .row__title {
        color: var(--accent);
      }

      .row__sub {
        font-size: 0.875rem;
        color: var(--muted);
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .row__kind {
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .row__tech {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--ink-2);
        font-size: 15px;
      }

      .row__more {
        font-family: var(--mono);
        font-size: 10px;
        color: var(--muted);
        letter-spacing: 0.04em;
      }

      .row__year {
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.08em;
        color: var(--muted);
        text-align: right;
      }

      .row__arrow {
        justify-self: end;
        color: var(--ink-2);
        transition:
          transform 0.35s var(--ease),
          color 0.25s;
      }

      :host(:hover) .row__arrow {
        transform: translateX(4px);
        color: var(--accent);
      }

      @media (max-width: 1080px) {
        .row {
          grid-template-columns: 2.5rem minmax(0, 1fr) auto 3rem 1.25rem;
        }

        .row__kind {
          display: none;
        }
      }

      @media (max-width: 760px) {
        .row {
          grid-template-columns: 2rem minmax(0, 1fr) 1.25rem;
          row-gap: 0.6rem;
        }

        .row__tech {
          grid-column: 2 / 3;
          font-size: 14px;
        }

        .row__year {
          display: none;
        }

        .row__arrow {
          grid-column: 3 / 4;
          grid-row: 1 / 3;
        }

        .row__sub {
          white-space: normal;
        }
      }
    `,
  ],
})
export class ProjectRow {
  readonly project = input.required<Project>();
  readonly index = input('00');

  protected kindLabel(): string {
    return KIND_LABEL[this.project().kind];
  }
}
