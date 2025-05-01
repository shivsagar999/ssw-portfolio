import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./features/header/header.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutComponent } from "./features/about/about.component";
import { FooterComponent } from "./features/footer/footer.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ContactComponent } from "./features/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutComponent, FooterComponent, ProjectsComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shivsagar S. Wagle';
}
