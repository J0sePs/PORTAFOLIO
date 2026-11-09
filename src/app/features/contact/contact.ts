import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { Arrow } from '../../shared/arrow/arrow';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Arrow, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly copied = signal(false);
  private timer: ReturnType<typeof setTimeout> | undefined;

  protected readonly reasons = [
    'Un sistema nuevo o una mejora sobre algo que ya existe.',
    'Infraestructura, redes, cloud o automatización de procesos.',
    'Una colaboración, una práctica o una consulta técnica concreta.',
  ];

  constructor() {
    inject(SeoService).set({
      title: 'Contacto',
      description:
        'Contacto directo para proyectos de software, infraestructura, redes, cloud y automatización.',
      path: '/contacto',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
          '@type': 'Person',
          name: PROFILE.name,
          email: PROFILE.email,
          url: `${PROFILE.siteUrl}/contacto`,
        },
      },
    });

    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }
}
