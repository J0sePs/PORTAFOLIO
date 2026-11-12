import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { KIND_LABEL, Project } from '../../data/project.model';
import { Arrow } from '../arrow/arrow';
import { ProjectMedia } from '../project-media/project-media';
import { TechIcon } from '../tech-icon/tech-icon';

/**
 * Tarjeta de proyecto para listados y portada.
 * Toda la superficie es un enlace: no hay acciones anidadas.
 */
@Component({
  selector: 'app-project-card',
  imports: [RouterLink, Arrow, ProjectMedia, TechIcon],
  template: `
    <a
      class="card"
      [routerLink]="['/proyectos', project().slug]"
      [attr.aria-label]="'Ver el proyecto ' + project().title"
    >
      <div class="card__top">
        <span class="card__index">{{ index() }}</span>
        <span class="card__kind">{{ kindLabel() }}</span>
        @if (project().featured) {
          <span class="card__badge">Destacado</span>
        }
      </div>

      <div class="card__media">
        <app-project-media
          [src]="project().cover"
          [alt]="project().coverAlt ?? project().title"
          [index]="index()"
          [title]="project().title"
          [year]="project().year"
          ratio="16 / 9"
        />
      </div>

      <div class="card__body">
        <div class="card__meta">
          <span>{{ project().year }}</span>
          <span class="card__dot" aria-hidden="true"></span>
          <span>{{ project().status }}</span>
        </div>

        <h3 class="card__title">{{ project().title }}</h3>
        <p class="card__sub">{{ project().subtitle }}</p>

        <div class="card__foot">
          <div class="card__tech" aria-hidden="true">
            @for (tech of project().stack.slice(0, 4); track tech) {
              <app-tech-icon [tech]="tech" />
            }
            @if (project().stack.length > 4) {
              <span class="card__more">+{{ project().stack.length - 4 }}</span>
            }
          </div>

          <span class="card__cta">
            Ver ficha
            <app-arrow />
          </span>
        </div>
      </div>
    </a>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .card {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-top: 0.8rem;
        border-top: 1px solid var(--line);
        color: inherit;
        text-decoration: none;
      }

      .card__top {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding-bottom: 0.7rem;
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .card__index {
        color: var(--accent);
      }

      .card__kind {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .card__badge {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        margin-left: auto;
        color: var(--accent);
      }

      .card__badge::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: currentColor;
      }

      .card__media {
        display: block;
      }

      .card__body {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-top: 1rem;
      }

      .card__meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .card__dot {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: var(--line-2);
      }

      .card__title {
        margin: 0.55rem 0 0;
        font-family: var(--serif);
        font-size: clamp(1.5rem, 2.2vw, 2rem);
        font-weight: 400;
        line-height: 1.05;
        letter-spacing: -0.015em;
        transition: color 0.25s;
      }

      .card:hover .card__title {
        color: var(--accent);
      }

      .card__sub {
        margin: 0.45rem 0 0;
        font-size: 0.875rem;
        line-height: 1.5;
        color: var(--muted);
        max-width: 46ch;
      }

      .card__foot {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-top: auto;
        padding-top: 1.15rem;
      }

      .card__tech {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        font-size: 14px;
        color: var(--ink-2);
      }

      .card__more {
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.04em;
        color: var(--muted);
      }

      .card__cta {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 0.7rem;
        border: 1px solid var(--line-2);
        border-radius: 2px;
        font-family: var(--mono);
        font-size: 9px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--ink-2);
        white-space: nowrap;
        transition:
          border-color 0.25s,
          background-color 0.25s,
          color 0.25s;
      }

      /* El enlace de la ficha ocupa toda la tarjeta: el botón resalta la acción. */

      .card__cta app-arrow {
        transition: transform 0.35s var(--ease);
      }

      .card:hover .card__cta {
        border-color: var(--accent);
        background: var(--accent);
        color: var(--on-accent);
      }

      .card:hover .card__cta app-arrow {
        transform: translateX(4px);
      }

      .card:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 4px;
      }

      @media (max-width: 560px) {
        .card__sub {
          max-width: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .card__title,
        .card__cta,
        .card__cta app-arrow {
          transition: none;
        }
      }
    `,
  ],
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly index = input('00');

  protected kindLabel(): string {
    return KIND_LABEL[this.project().kind];
  }
}
