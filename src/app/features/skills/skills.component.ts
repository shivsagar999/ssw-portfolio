import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillGroups = [
    { name: 'Frontend', symbol: '</>', description: 'Thoughtful interfaces, built for the web.', skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { name: 'Backend & data', symbol: '{ }', description: 'The services and data behind the experience.', skills: ['.NET', 'C#', 'Hono', 'SQL Server', 'MongoDB'] },
    { name: 'Cloud & workflow', symbol: '↗', description: 'From the first commit to the cloud.', skills: ['Azure', 'Cloudflare', 'Git', 'Visual Studio', 'Visual Studio Code'] }
  ];
}
