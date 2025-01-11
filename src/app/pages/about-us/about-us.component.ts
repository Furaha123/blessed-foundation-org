import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface ReasonToChoose {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  sections = [
    {
      icon: 'assets/who-we-are.svg',
      title: 'WHO WE ARE',
      description:
        'Excellent team and demonstration of the leading providers of residential and commercial cleaning services',
    },
    {
      icon: 'assets/what-we-do.svg',
      title: 'WHAT WE DO',
      description:
        'We provide professional cleaning services designed to keep your home spotless and beautiful so that you can focus on things that matter to you',
    },
    {
      icon: 'assets/clean.svg',
      title: 'OUR MISSION',
      description:
        'Our focus is to listen to our clients, understanding their needs and provide the exceptional service making them smile',
    },
  ];

  reasonsToChoose: ReasonToChoose[] = [
    {
      icon: 'assets/one.svg',
      title: 'SPARKLING CLEAN',
      description:
        'We help you have sparkling clean and green free. Our detailing process also gets rid of unwanted bacteria and viruses.',
    },
    {
      icon: 'assets/two.svg',
      title: 'LEADING TECHNOLOGIES',
      description:
        'We use safe hospital-grade disinfectants, HEPA filtration and Germicidal cleaning cloths.',
    },
    {
      icon: 'assets/three.svg',
      title: 'LEADING TECHNOLOGIES',
      description:
        'We use safe hospital-grade disinfectants, HEPA filtration and Germicidal cleaning cloths.',
    },
    {
      icon: 'assets/four.svg',
      title: 'RELIABLE CREWS',
      description:
        'Our reliable and trained crews understand your specific cleaning service needs.',
    },
  ];

  teamMembers: TeamMember[] = [
    {
      name: 'DAVON IFILL',
      position: 'Coordinator Office Manager',
      image: 'assets/ifill-profile.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'FURAHA MOSES',
      position: 'Cleaning Technician',
      image: 'assets/profile-2.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'NATETE SANDRA',
      position: 'Cleaning Technical Team Lead',
      image: 'assets/profile-one.jpg',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
      },
    },
  ];
}
