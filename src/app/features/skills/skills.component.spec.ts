import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should group all existing skills into three readable categories', () => {
    const page = fixture.nativeElement as HTMLElement;
    expect(Array.from(page.querySelectorAll('h3'), heading => heading.textContent)).toEqual([
      'Frontend', 'Backend & data', 'Cloud & workflow'
    ]);
    const names = Array.from(page.querySelectorAll('li'), item => item.textContent?.trim()).sort();
    expect(names).toEqual([
      '.NET', 'Hono', 'C#', 'Angular', 'SQL Server', 'MongoDB', 'JavaScript', 'TypeScript',
      'HTML', 'CSS', 'Git', 'Azure', 'Visual Studio', 'Visual Studio Code', 'Cloudflare'
    ].sort());
  });
});
