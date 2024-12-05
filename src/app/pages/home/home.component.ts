import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  features = [
    {
      icon: 'assets/diamond.svg',
      title: 'SPARKLING CLEAN',
      description:
        'Your space will shine like a diamond! We ensure every corner is spotless and germ-free, leaving your home sparkling.',
    },
    {
      icon: 'assets/home.svg',
      title: 'LEADING TECHNOLOGIES',
      description:
        'We treat your home with the care it deserves, using advanced tools and safe disinfectants for a healthier environment.',
    },
    {
      icon: 'assets/umbrella.svg',
      title: 'INSURED AND BONDED',
      description:
        'We’ve got you covered! Our insured and bonded team ensures your peace of mind while we care for your space.',
    },
    {
      icon: 'assets/clean.svg',
      title: 'RELIABLE CREWS',
      description:
        'Leave it to us! Our trusted crews work with care and consistency to meet all your cleaning needs.',
    },
  ];
  services = [
    {
      image: 'assets/commercial.jpg',
      title: 'COMMERCIAL CLEANING',
      description:
        'Only the most skilled professionals for commercial office cleaning.',
    },
    {
      image: 'assets/window-clean.jpg',
      title: 'WINDOW CLEANING',
      description:
        'The highest quality window cleaning service at a competitive price.',
    },
    {
      image: 'assets/resendential.jpg',
      title: 'RESIDENTIAL CLEANING',
      description:
        'Professional home cleaning services tailored to your needs.',
    },
    {
      image: 'assets/deep-cleaning.jpg',
      title: 'DEEP CLEANING',
      description:
        'Thorough deep cleaning services for a completely refreshed smelling fresh space.',
    },
  ];

  currentSlide = 0;
  onLearnMore() {
    // Add your navigation or action logic here
  }
}
