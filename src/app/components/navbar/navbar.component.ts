import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  navbarBackground = 'transparent';
  isScrolled = false;
  showFullNavbar = true; // Track if full navbar (with logo and buttons) should be shown

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 0;
    this.navbarBackground = this.isScrolled ? 'white' : 'transparent';
    this.showFullNavbar = scrollTop === 0; // Show full navbar only when at the top
  }
}