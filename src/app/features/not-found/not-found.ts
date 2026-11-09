import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../core/seo.service';
import { Arrow } from '../../shared/arrow/arrow';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, Arrow],
  template: `
    <section class="nf">
      <div class="shell">
        <p class="eyebrow">Error 404</p>
        <h1 class="nf__title display">Esta ruta <em>no existe</em>.</h1>
        <p class="nf__text lede">
          Puede que el proyecto haya cambiado de nombre o que el enlace esté incompleto. Desde el
          archivo puedes encontrar lo que buscas.
        </p>
        <div class="nf__links">
          <a class="btn btn--solid" routerLink="/">
            Ir al inicio
            <app-arrow />
          </a>
          <a class="link" routerLink="/proyectos">
            Ver proyectos
            <app-arrow />
          </a>
        </div>
        <span class="nf__code" aria-hidden="true">404</span>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .nf {
        position: relative;
        padding-block: clamp(4rem, 12vw, 9rem);
        overflow: hidden;
      }

      .nf__title {
        margin-top: 1rem;
        font-size: var(--t-2xl);
        max-width: 16ch;
      }

      .nf__text {
        margin-top: 1.25rem;
        max-width: 52ch;
      }

      .nf__links {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .nf__code {
        position: absolute;
        right: 0;
        bottom: -0.15em;
        font-family: var(--serif);
        font-size: clamp(10rem, 28vw, 24rem);
        line-height: 0.8;
        color: transparent;
        -webkit-text-stroke: 1px var(--line);
        pointer-events: none;
        z-index: -1;
      }
    `,
  ],
})
export class NotFound {
  constructor() {
    inject(SeoService).set({
      title: 'Página no encontrada',
      description: 'La página solicitada no existe en este portafolio.',
      path: '/404',
    });
  }
}
