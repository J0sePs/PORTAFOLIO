import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Revela un bloque cuando entra en el viewport.
 * Uso: <div [appReveal]="120">…</div>  (el valor son ms de retraso)
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[style.--reveal-delay]': 'delay()',
  },
})
export class RevealDirective {
  readonly appReveal = input<number | string>(0);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected delay(): string | null {
    const value = Number(this.appReveal());
    return Number.isFinite(value) && value > 0 ? `${value}ms` : null;
  }

  constructor() {
    afterNextRender(() => {
      const element = this.host.nativeElement;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduceMotion || !('IntersectionObserver' in window)) {
        element.classList.add('is-visible');
        return;
      }

      // Lo que ya está en pantalla se muestra de inmediato: sin destellos
      // ni contenido invisible si el observador no llega a dispararse.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.95) {
        element.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              element.classList.add('is-visible');
              observer.disconnect();
            }
          }
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
      );

      observer.observe(element);
    });
  }
}
