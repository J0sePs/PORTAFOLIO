import { DOCUMENT } from '@angular/common';
import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

import { PROFILE } from '../../core/profile';
import { Arrow } from '../arrow/arrow';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ThemeToggle, Arrow],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly profile = PROFILE;
  protected readonly nav = [
    { label: 'Proyectos', path: '/proyectos' },
    { label: 'Estudio', path: '/estudio' },
    { label: 'Contacto', path: '/contacto' },
  ];

  protected readonly scrolled = signal(false);
  protected readonly hidden = signal(false);
  protected readonly menuOpen = signal(false);

  private readonly document = inject(DOCUMENT);
  private lastY = 0;

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeMenu());

    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    const y = window.scrollY;
    const delta = y - this.lastY;

    this.scrolled.set(y > 8);

    if (!this.menuOpen()) {
      if (y > 280 && delta > 3) {
        this.hidden.set(true);
      } else if (delta < -3 || y < 120) {
        this.hidden.set(false);
      }
    }

    this.lastY = y;
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  protected toggleMenu(): void {
    const next = !this.menuOpen();
    this.menuOpen.set(next);

    if (next) {
      this.hidden.set(false);
      setTimeout(() => {
        this.document.querySelector<HTMLElement>('#menu-movil a')?.focus();
      });
    }
  }

  protected closeMenu(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
  }
}
