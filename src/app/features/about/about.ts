import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { groupTech, techInfo } from '../../data/tech';
import { Arrow } from '../../shared/arrow/arrow';
import { RevealDirective } from '../../shared/reveal.directive';
import { TechIcon } from '../../shared/tech-icon/tech-icon';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Arrow, RevealDirective, TechIcon],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = PROFILE;

  protected readonly ficha = [
    { label: 'Nombre', value: PROFILE.name },
    { label: 'Rol', value: PROFILE.role },
    { label: 'Universidad', value: PROFILE.university },
    { label: 'Base', value: PROFILE.location },
    { label: 'Enfoque', value: PROFILE.focus },
    { label: 'Estado', value: PROFILE.availabilityLabel },
    { label: 'Correo', value: PROFILE.email },
  ];

  protected readonly tools = [
    'angular',
    'typescript',
    'javascript',
    'python',
    'java',
    'php',
    'csharp',
    'nodedotjs',
    'spring',
    'django',
    'laravel',
    'mysql',
    'postgresql',
    'mongodb',
    'redis',
    'sqlite',
    'linux',
    'ubuntu',
    'docker',
    'kubernetes',
    'amazonwebservices',
    'microsoftazure',
    'googlecloud',
    'nginx',
    'git',
    'github',
    'cisco',
    'wireshark',
    'gnubash',
    'powershell',
    'figma',
    'pytorch',
    'tensorflow',
    'openai',
    'pandas',
    'notion',
  ];

  protected readonly stackGroups = groupTech(this.tools);

  constructor() {
    inject(SeoService).set({
      title: 'Estudio',
      description:
        'Perfil profesional: formación en ingeniería de sistemas, enfoque de trabajo y herramientas para construir software, infraestructura y automatización.',
      path: '/estudio',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: PROFILE.name,
          jobTitle: PROFILE.role,
          email: PROFILE.email,
          url: `${PROFILE.siteUrl}/estudio`,
          address: { '@type': 'PostalAddress', addressLocality: PROFILE.location },
          alumniOf: { '@type': 'CollegeOrUniversity', name: PROFILE.university },
        },
      },
    });
  }

  protected techName(id: string): string {
    return techInfo(id).name;
  }
}
