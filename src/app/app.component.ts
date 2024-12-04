import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'iff-cleaning-solutions';
  navbarBackground = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 0) {
      this.navbarBackground = 'white';
    } else {
      this.navbarBackground = ''; 
    }
  }
}
