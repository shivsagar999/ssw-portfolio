import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { createApplication } from '@angular/platform-browser';
import { filter, firstValueFrom } from 'rxjs';
import { AppComponent } from '../../app.component';
import { appConfig } from '../../app.config';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent], providers: [provideRouter([])] }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('should toggle the mobile menu and close it after navigation', () => {
    const page = fixture.nativeElement as HTMLElement;
    const toggle = page.querySelector<HTMLButtonElement>('.menu-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(page.querySelector('.navigation-links')?.classList.contains('is-open')).toBeTrue();
    page.querySelector<HTMLAnchorElement>('a[fragment="projects"]')!.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('should close the menu with Escape', () => {
    fixture.componentInstance.menuOpen = true;
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('header') as HTMLElement;
    header.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.menuOpen).toBeFalse();
  });
});

describe('Section navigation', () => {
  it('should scroll About and Toolkit below the sticky header, including repeat clicks', async () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const application = await createApplication({ providers: [...appConfig.providers, provideLocationMocks()] });
    try {
      spyOn(window, 'scrollTo');
      const scroll = spyOn(application.injector.get(ViewportScroller), 'scrollToAnchor').and.callThrough();
      application.bootstrap(AppComponent, host);
      await application.whenStable();
      const router = application.injector.get(Router);
      for (const fragment of ['about', 'skills', 'skills']) {
        const scrolled = firstValueFrom(router.events.pipe(filter(event => event instanceof Scroll && event.anchor === fragment)));
        const target = host.querySelector<HTMLElement>(`#${fragment}`)!;
        const header = host.querySelector<HTMLElement>('app-header')!;
        const top = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight - 16;
        host.querySelector<HTMLAnchorElement>(`app-header a[fragment="${fragment}"]`)!.click();
        await scrolled;
        expect(router.url).toBe(`/#${fragment}`);
        expect(scroll).toHaveBeenCalledWith(fragment);
        expect(window.scrollTo).toHaveBeenCalledWith(target.getBoundingClientRect().left + window.pageXOffset, top);
      }
    } finally {
      application.destroy();
      host.remove();
    }
  });
});
