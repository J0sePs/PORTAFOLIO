import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { projectBySlug } from '../data/projects';

export const projectExists: CanActivateFn = (route) => {
  const slug = route.paramMap.get('slug') ?? '';
  return projectBySlug(slug) ? true : inject(Router).createUrlTree(['/404']);
};
