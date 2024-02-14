import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  
  navigateToAbout() {
    const aboutSection = document.getElementById('aboutSection');
    const ProjectSection = document.getElementById('ProjectSection');
    const ContactSection = document.getElementById('contactSection');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (ProjectSection) {
      ProjectSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (ContactSection) {
      ContactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
