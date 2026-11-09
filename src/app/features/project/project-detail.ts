import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { KIND_LABEL } from '../../data/project.model';
import { nextProject, projectBySlug } from '../../data/projects';
import { techInfo } from '../../data/tech';
import { Arrow } from '../../shared/arrow/arrow';
import { ProjectMedia } from '../../shared/project-media/project-media';
import { RevealDirective } from '../../shared/reveal.directive';
import { TechIcon } from '../../shared/tech-icon/tech-icon';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Arrow, ProjectMedia, RevealDirective, TechIcon],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  protected readonly profile = PROFILE;

  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly project = computed(() => projectBySlug(this.slug()));
  protected readonly next = computed(() => {
    const project = this.project();
    return project ? nextProject(project.slug) : undefined;
  });

  constructor() {
    effect(() => {
      const project = this.project();
      if (!project) return;

      this.seo.set({
        title: project.title,
        description: project.summary,
        path: `/proyectos/${project.slug}`,
        image: project.cover,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.summary,
          dateCreated: String(project.year),
          url: `${PROFILE.siteUrl}/proyectos/${project.slug}`,
          image: project.cover ? `${PROFILE.siteUrl}${project.cover}` : undefined,
          author: { '@type': 'Person', name: PROFILE.name },
          keywords: project.stack.map((tech) => techInfo(tech).name).join(', '),
        },
      });
    });
  }

  protected techName(id: string): string {
    return techInfo(id).name;
  }

  protected techKind(id: string): string {
    return techInfo(id).kind;
  }

  protected kindLabel(): string {
    const project = this.project();
    return project ? KIND_LABEL[project.kind] : '';
  }
}
