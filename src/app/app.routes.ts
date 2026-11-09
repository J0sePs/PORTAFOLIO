import { Routes } from '@angular/router';

import { projectExists } from './core/project.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./features/work/work').then((m) => m.Work),
  },
  {
    path: 'proyectos/:slug',
    canActivate: [projectExists],
    loadComponent: () => import('./features/project/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'estudio',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
