import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portafolio-theme';
const THEME_COLOR = { light: '#f1eee6', dark: '#0d0d0b' } as const;

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  private readonly current = signal<Theme>(this.readInitialTheme());

  /** Solo se persiste cuando la persona elige; si no, se sigue al sistema. */
  private userChose = this.readStoredPreference() !== null;

  readonly theme = this.current.asReadonly();
  readonly isDark = computed(() => this.current() === 'dark');

  constructor() {
    effect(() => {
      const theme = this.current();
      const root = this.document.documentElement;
      root.setAttribute('data-theme', theme);

      if (this.userChose) {
        try {
          localStorage.setItem(STORAGE_KEY, theme);
        } catch {
          /* modo privado: se ignora */
        }
      }

      this.document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', THEME_COLOR[theme]);
    });

    const media = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');

    if (media) {
      const onChange = (event: MediaQueryListEvent) => {
        if (!this.userChose) {
          this.current.set(event.matches ? 'dark' : 'light');
        }
      };

      media.addEventListener('change', onChange);
      this.destroyRef.onDestroy(() => media.removeEventListener('change', onChange));
    }
  }

  toggle(): void {
    this.userChose = true;
    this.current.update((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }

  set(theme: Theme): void {
    this.userChose = true;
    this.current.set(theme);
  }

  private readInitialTheme(): Theme {
    const attribute = this.document.documentElement.getAttribute('data-theme');
    if (attribute === 'dark' || attribute === 'light') {
      return attribute;
    }

    const prefersDark = this.document.defaultView?.matchMedia?.(
      '(prefers-color-scheme: dark)',
    ).matches;

    return prefersDark ? 'dark' : 'light';
  }

  private readStoredPreference(): Theme | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
      return null;
    }
  }
}
