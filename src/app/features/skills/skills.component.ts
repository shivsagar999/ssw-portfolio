import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills = [
    { name: '.NET', icon: 'https://img.icons8.com/color/48/net-framework.png' },
    { name: 'Hono', icon: 'https://img.icons8.com/fluency/48/code.png' },
    { name: 'C#', icon: 'https://img.icons8.com/color/48/c-sharp-logo.png' },
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/angularjs.png' },
    { name: 'SQL Server', icon: 'https://img.icons8.com/color/48/microsoft-sql-server.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript--v1.png' },  
    { name: 'Typescript', icon: 'https://img.icons8.com/color/48/typescript.png' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
    { name: 'Azure', icon: 'https://img.icons8.com/color/48/azure-1.png' },
    { name: 'Visual Studio', icon: 'https://img.icons8.com/color/48/visual-studio--v2.png' },
    { name: 'Visual Studio Code', icon: 'https://img.icons8.com/color/48/visual-studio-code-2019.png' },
    { name: 'Cloudflare', icon: 'https://img.icons8.com/color/50/cloudflare.png' }
  ];
}
