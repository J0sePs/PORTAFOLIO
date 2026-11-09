import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PROFILE } from './profile';

export interface SeoData {
  title: string;
  description: string;
  /** Ruta canónica, por ejemplo `/proyectos/mi-sistema`. */
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  /** Datos estructurados schema.org opcionales. */
  jsonLd?: Record<string, unknown>;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  set(data: SeoData): void {
    const fullTitle = data.title
      ? `${data.title} — ${PROFILE.name}`
      : `${PROFILE.name} — ${PROFILE.role}`;
    const url = this.absoluteUrl(data.path ?? '/');
    const image = this.absoluteUrl(data.image ?? '/og.png');
    const type = data.type ?? 'website';

    this.title.setTitle(fullTitle);

    this.update({ name: 'description', content: data.description });
    this.update({ property: 'og:title', content: fullTitle });
    this.update({ property: 'og:description', content: data.description });
    this.update({ property: 'og:url', content: url });
    this.update({ property: 'og:type', content: type });
    this.update({ property: 'og:image', content: image });
    this.update({ name: 'twitter:title', content: fullTitle });
    this.update({ name: 'twitter:description', content: data.description });
    this.update({ name: 'twitter:image', content: image });

    this.setCanonical(url);
    this.setJsonLd(data.jsonLd);
  }

  private update(tag: { name?: string; property?: string; content: string }): void {
    if (tag.name) {
      this.meta.updateTag({ name: tag.name, content: tag.content });
    } else if (tag.property) {
      this.meta.updateTag({ property: tag.property, content: tag.content });
    }
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private setJsonLd(jsonLd?: Record<string, unknown>): void {
    const existing = this.document.getElementById('structured-data');

    if (!jsonLd) {
      existing?.remove();
      return;
    }

    const script = existing ?? this.document.createElement('script');
    script.id = 'structured-data';
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(jsonLd);

    if (!existing) {
      this.document.head.appendChild(script);
    }
  }

  private absoluteUrl(path: string): string {
    const base = PROFILE.siteUrl.replace(/\/$/, '');
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
  }
}
