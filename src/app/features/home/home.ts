import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { PROJECTS } from '../../data/projects';
import { Arrow } from '../../shared/arrow/arrow';
import { ProjectCard } from '../../shared/project-card/project-card';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Arrow, ProjectCard, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  /** En la portada se muestran como máximo cuatro fichas; el archivo tiene el resto. */
  protected readonly projects = PROJECTS.slice(0, 4);
  protected readonly total = PROJECTS.length;

  /** Numeración consecutiva de las secciones que realmente se muestran. */
  protected readonly nums = (() => {
    let count = 0;
    const next = () => String(++count).padStart(2, '0');
    return {
      projects: this.total ? next() : '',
      method: next(),
      about: next(),
    };
  })();

  protected readonly areas = [
    { label: 'Desarrollo de software', note: 'Angular · Node · Python' },
    { label: 'Infraestructura y redes', note: 'Linux · Cisco · Docker' },
    { label: 'Cloud y automatización', note: 'AWS · CI/CD · IaC' },
    { label: 'Datos e inteligencia artificial', note: 'Python · RAG · modelos' },
  ];

  protected readonly method = [
    {
      title: 'Diagnóstico',
      text: 'Entiendo el problema, quién lo usa y qué restricciones existen antes de proponer una solución.',
    },
    {
      title: 'Arquitectura',
      text: 'Defino datos, servicios, red y despliegue. Cada decisión queda justificada y documentada.',
    },
    {
      title: 'Implementación',
      text: 'Construyo por iteraciones verificables: cada entrega funciona y se puede probar.',
    },
    {
      title: 'Operación',
      text: 'Automatizo el despliegue, documento la operación y dejo el sistema mantenible.',
    },
  ];

  protected readonly facts = [
    { label: 'Base', value: PROFILE.location },
    { label: 'Enfoque', value: PROFILE.focus },
    { label: 'Estado', value: PROFILE.availabilityLabel },
  ];

  constructor() {
    inject(SeoService).set({
      title: '',
      description:
        'Portafolio de ingeniería de sistemas: infraestructura, desarrollo de software, cloud y automatización. Cada proyecto documentado con su arquitectura y resultado.',
      path: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: PROFILE.name,
        jobTitle: PROFILE.role,
        url: PROFILE.siteUrl,
        email: PROFILE.email,
        address: { '@type': 'PostalAddress', addressLocality: PROFILE.location },
        alumniOf: { '@type': 'CollegeOrUniversity', name: PROFILE.university },
        sameAs: PROFILE.socials.map((social) => social.href),
        knowsAbout: this.areas.map((area) => area.label),
      },
    });
  }

  protected indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
