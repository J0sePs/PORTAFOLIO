import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE } from '../../core/profile';
import { Arrow } from '../arrow/arrow';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Arrow],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  protected readonly nav = [
    { label: 'Inicio', path: '/' },
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Estudio', path: '/estudio' },
    { label: 'Contacto', path: '/contacto' },
  ];

  private readonly now = signal(new Date());
  protected readonly clock = computed(() =>
    new Intl.DateTimeFormat('es-PE', {
      timeZone: PROFILE.timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(this.now()),
  );

  constructor() {
    const id = setInterval(() => this.now.set(new Date()), 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }

  protected toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
