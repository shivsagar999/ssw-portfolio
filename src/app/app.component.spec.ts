import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('should create the app', () => {
    expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy();
  });

  it('should have the portfolio owner’s title', () => {
    expect(TestBed.createComponent(AppComponent).componentInstance.title).toBe('Shivsagar S. Wagle');
  });

  it('should render one main heading and valid section navigation', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelectorAll('h1').length).toBe(1);
    expect(page.querySelector('h1')?.textContent).toContain('Good software.');
    for (const link of page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      const target = link.getAttribute('href')!.slice(1);
      expect(target).not.toBe('');
      expect(page.querySelector(`[id="${target}"]`)).withContext(link.textContent ?? '').not.toBeNull();
    }
  });
});
