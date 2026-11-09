import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { PROFILE } from '../../core/profile';
import { SeoService } from '../../core/seo.service';
import { Arrow } from '../../shared/arrow/arrow';
import { RevealDirective } from '../../shared/reveal.directive';
import { SocialIcon } from '../../shared/social-icon/social-icon';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [Arrow, ReactiveFormsModule, RevealDirective, SocialIcon],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly copied = signal(false);
  protected readonly status = signal<FormStatus>('idle');
  protected readonly lastSender = signal('');

  private timer: ReturnType<typeof setTimeout> | undefined;

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // Campo trampa: los humanos no lo ven, los bots lo rellenan.
    company: [''],
  });

  protected readonly reasons = [
    'Un sistema nuevo o una mejora sobre algo que ya existe.',
    'Infraestructura, redes, cloud o automatización de procesos.',
    'Una colaboración, una práctica o una consulta técnica concreta.',
  ];

  constructor() {
    inject(SeoService).set({
      title: 'Contacto',
      description:
        'Contacto directo para proyectos de software, infraestructura, redes, cloud y automatización.',
      path: '/contacto',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
          '@type': 'Person',
          name: PROFILE.name,
          email: PROFILE.email,
          url: `${PROFILE.siteUrl}/contacto`,
        },
      },
    });

    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      this.copied.set(true);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  protected showError(control: 'name' | 'email' | 'message'): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.dirty || field.touched);
  }

  protected mailtoHref(): string {
    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Contacto desde el portafolio${name ? ` — ${name}` : ''}`);
    const body = encodeURIComponent(`${message}\n\n— ${name || 'Sin nombre'}\n${email || ''}`);
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  }

  protected async submit(): Promise<void> {
    if (this.status() === 'sending') return;

    // Bot: campo oculto relleno.
    if (this.form.controls.company.value) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const { name, email, message } = this.form.getRawValue();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Nuevo mensaje desde el portafolio — ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };
      const delivered = result.success === true || result.success === 'true';

      if (!response.ok || !delivered) {
        throw new Error(result.message ?? 'No se pudo enviar');
      }

      this.lastSender.set(name.trim().split(/\s+/)[0]);
      this.status.set('sent');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }

  protected resetForm(): void {
    this.form.reset();
    this.status.set('idle');
  }
}
