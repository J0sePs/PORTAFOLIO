import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-project-media',
  template: `
    <figure class="media" [style.aspect-ratio]="ratio()">
      @if (src() && !failed()) {
        <img
          class="media__img"
          [src]="src()"
          [alt]="alt()"
          [attr.loading]="eager() ? 'eager' : 'lazy'"
          [attr.fetchpriority]="eager() ? 'high' : 'auto'"
          decoding="async"
          (error)="failed.set(true)"
        />
      } @else {
        <span class="media__plate" aria-hidden="true">
          <span class="media__index">{{ index() }}</span>
          <span class="media__title">{{ title() }}</span>
          <span class="media__meta">{{ index() }} — {{ year() }}</span>
        </span>
      }
    </figure>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .media {
        position: relative;
        margin: 0;
        overflow: hidden;
        background: var(--bg-2);
        border: 1px solid var(--line);
      }

      .media__img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        transition: transform 0.9s var(--ease);
      }

      :host(:hover) .media__img {
        transform: scale(1.015);
      }

      .media__plate {
        position: absolute;
        inset: 0;
        display: block;
        background-image:
          linear-gradient(
            to right,
            color-mix(in srgb, var(--line) 72%, transparent) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            color-mix(in srgb, var(--line) 72%, transparent) 1px,
            transparent 1px
          );
        background-size: 52px 52px;
      }

      .media__index {
        position: absolute;
        top: 0.15em;
        right: 0.12em;
        font-family: var(--serif);
        font-size: clamp(4rem, 9vw, 7.5rem);
        line-height: 0.9;
        color: transparent;
        -webkit-text-stroke: 1px var(--line-2);
        opacity: 0.85;
      }

      .media__title {
        position: absolute;
        left: clamp(1rem, 2.5vw, 1.75rem);
        bottom: clamp(1rem, 2.5vw, 1.75rem);
        max-width: 70%;
        font-family: var(--serif);
        font-size: clamp(1.35rem, 2.6vw, 2.1rem);
        line-height: 1;
        letter-spacing: -0.01em;
      }

      .media__meta {
        position: absolute;
        right: clamp(1rem, 2.5vw, 1.75rem);
        bottom: clamp(1rem, 2.5vw, 1.75rem);
        font-family: var(--mono);
        font-size: 10px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted);
      }

      @media (max-width: 560px) {
        .media__index {
          font-size: 3.25rem;
        }

        .media__meta {
          display: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .media__img {
          transition: none;
        }
      }
    `,
  ],
})
export class ProjectMedia {
  readonly src = input<string | undefined>(undefined);
  readonly alt = input('');
  readonly index = input('00');
  readonly title = input('');
  readonly year = input<string | number>('');
  readonly ratio = input('16 / 9');
  readonly eager = input(false);

  protected readonly failed = signal(false);
}
