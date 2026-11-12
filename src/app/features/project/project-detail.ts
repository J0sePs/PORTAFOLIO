import { Component, computed, effect, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { KIND_LABEL, ProjectGalleryItem, ProjectLink } from '../../data/project.model';
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
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  protected readonly project = computed(() => projectBySlug(this.slug()));
  protected readonly next = computed(() => {
    const project = this.project();
    return project ? nextProject(project.slug) : undefined;
  });

  /** Enlace principal: primero la demo pública, luego el repositorio. */
  protected readonly primaryLink = computed<ProjectLink | undefined>(() => {
    const links = this.project()?.links ?? [];
    return links.find((link) => link.kind === 'demo') ?? links[0];
  });

  protected readonly otherLinks = computed<ProjectLink[]>(() => {
    const primary = this.primaryLink();
    return (this.project()?.links ?? []).filter((link) => link !== primary);
  });

  /** Imagen ampliada en el visor. */
  protected readonly zoomed = signal<ProjectGalleryItem | undefined>(undefined);

  /** Portada como elemento ampliable, con el mismo visor de la galería. */
  protected readonly coverItem = computed<ProjectGalleryItem | undefined>(() => {
    const project = this.project();
    if (!project?.cover) return undefined;
    return {
      src: project.cover,
      alt: project.coverAlt ?? project.title,
      caption: 'Vista principal',
    };
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

  protected kindLabel(): string {
    const project = this.project();
    return project ? KIND_LABEL[project.kind] : '';
  }

  /** Dominio visible del enlace, para que el cliente sepa a dónde va. */
  protected linkHost(href: string): string {
    try {
      return new URL(href).hostname.replace(/^www\./, '');
    } catch {
      return href;
    }
  }

  protected openCover(): void {
    const item = this.coverItem();
    if (item) this.zoomed.set(item);
  }

  protected openZoom(item: ProjectGalleryItem): void {
    this.zoomed.set(item);
  }

  protected closeZoom(): void {
    this.zoomed.set(undefined);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.zoomed()) this.closeZoom();
  }
}
