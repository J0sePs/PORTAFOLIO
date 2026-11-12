import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { KIND_LABEL, Project, ProjectLink } from '../../data/project.model';
import { Arrow } from '../arrow/arrow';
import { TechIcon } from '../tech-icon/tech-icon';

@Component({
  selector: 'app-project-row',
  imports: [RouterLink, TechIcon, Arrow],
  template: `
    <div class="row">
      <span class="row__index">{{ index() }}</span>

      <a class="row__body" [routerLink]="['/proyectos', project().slug]">
        <span class="row__title">{{ project().title }}</span>
        <span class="row__sub">{{ project().subtitle }}</span>
      </a>

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

      <span class="row__actions">
        @if (demoLink(); as link) {
          <a
            class="row__btn"
            [href]="link.href"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="link.label + ': ' + project().title"
          >
            {{ link.label }}
            <app-arrow direction="up-right" />
          </a>
        }

        <a
          class="row__go"
          [routerLink]="['/proyectos', project().slug]"
          [attr.aria-label]="'Ver la ficha de ' + project().title"
        >
          Ver ficha
          <app-arrow />
        </a>
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        border-bottom: 1px solid var(--line);
      }

      :host(:first-child) .row {
        border-top: 1px solid var(--line);
      }

      .row {
        display: grid;
        grid-template-columns: 3rem minmax(0, 1fr) 8rem auto 3.5rem auto;
        align-items: center;
        gap: clamp(0.75rem, 2vw, 2rem);
        padding: clamp(1.15rem, 2.2vw, 1.6rem) 0;
        transition: background-color 0.3s var(--ease);
      }

      :host(:hover) .row {
        background: var(--bg-2);
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

      .row__body:hover .row__title {
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

      .row__actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-self: end;
      }

      .row__btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.55rem 0.7rem;
        border: 1px solid var(--accent);
        border-radius: 2px;
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--accent);
        white-space: nowrap;
        transition:
          background-color 0.25s var(--ease),
          color 0.25s var(--ease);
      }

      .row__btn:hover {
        background: var(--accent);
        color: var(--on-accent);
      }

      .row__btn app-arrow {
        transition: transform 0.3s var(--ease);
      }

      .row__btn:hover app-arrow {
        transform: translate(2px, -2px);
      }

      .row__go {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.55rem 0.15rem;
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--muted);
        white-space: nowrap;
        transition: color 0.25s;
      }

      .row__go:hover {
        color: var(--ink);
      }

      .row__go app-arrow {
        transition: transform 0.3s var(--ease);
      }

      .row__go:hover app-arrow {
        transform: translateX(3px);
      }

      @media (max-width: 1180px) {
        .row {
          grid-template-columns: 2.5rem minmax(0, 1fr) auto 3rem auto;
        }

        .row__kind {
          display: none;
        }
      }

      @media (max-width: 900px) {
        .row {
          grid-template-columns: 2rem minmax(0, 1fr) auto;
          row-gap: 0.75rem;
        }

        .row__tech,
        .row__year {
          display: none;
        }

        .row__actions {
          grid-column: 2 / 4;
          justify-self: start;
          flex-wrap: wrap;
        }

        .row__btn {
          padding: 0.6rem 0.8rem;
        }
      }

      @media (max-width: 620px) {
        .row {
          grid-template-columns: 2rem minmax(0, 1fr);
        }

        .row__actions {
          grid-column: 2 / 3;
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

  protected demoLink(): ProjectLink | undefined {
    return this.project().links?.find((link) => link.kind === 'demo');
  }
}
