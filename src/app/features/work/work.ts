import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { KIND_LABEL, Project, ProjectKind } from '../../data/project.model';
import { PROJECTS, projectKinds } from '../../data/projects';
import { Arrow } from '../../shared/arrow/arrow';
import { ProjectRow } from '../../shared/project-row/project-row';
import { RevealDirective } from '../../shared/reveal.directive';

type Filter = 'todos' | ProjectKind;

@Component({
  selector: 'app-work',
  imports: [RouterLink, Arrow, ProjectRow, RevealDirective],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  protected readonly profile = PROFILE;
  protected readonly projects = PROJECTS;
  protected readonly total = PROJECTS.length;

  protected readonly filters: { value: Filter; label: string; count: number }[] = [
    { value: 'todos', label: 'Todos', count: PROJECTS.length },
    ...projectKinds().map((entry) => ({
      value: entry.kind as Filter,
      label: KIND_LABEL[entry.kind],
      count: entry.count,
    })),
  ];

  protected readonly active = signal<Filter>('todos');

  protected readonly visible = computed<Project[]>(() => {
    const filter = this.active();
    return filter === 'todos'
      ? this.projects
      : this.projects.filter((project) => project.kind === filter);
  });

  constructor() {
    inject(SeoService).set({
      title: 'Proyectos',
      description:
        'Archivo de sistemas construidos: desarrollo de software, infraestructura, redes, cloud y automatización. Cada proyecto con capturas, tecnologías y resultados.',
      path: '/proyectos',
    });
  }

  protected setFilter(filter: Filter): void {
    this.active.set(filter);
  }

  protected indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
