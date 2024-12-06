// footer.component.ts
import { Component } from '@angular/core';

interface ServiceLink {
  name: string;
  route: string;
}

interface BlogPost {
  title: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  services: ServiceLink[] = [
    { name: 'Commercial Cleaning', route: '/commercial-cleaning' },
    { name: 'House Cleaning', route: '/house-cleaning' },
    { name: 'Move In Out Service', route: '/move-in-out' },
    { name: 'Post Renovation', route: '/post-renovation' },
    { name: 'Window Cleaning', route: '/window-cleaning' },
    { name: 'Green Spaces Maintenance', route: '/green-spaces' },
    { name: 'Novum Elementum', route: '/novum-elementum' },
    { name: 'Sicilium Polon', route: '/sicilium-polon' },
  ];

  latestPosts: BlogPost[] = [
    {
      title: 'How to deep clean your kitchen',
      date: 'October 11, 2017',
      link: '/blog/deep-clean-kitchen',
    },
    {
      title: '10 ways to save more & waste less',
      date: 'October 5, 2017',
      link: '/blog/save-more-waste-less',
    },
    {
      title: 'Before move-in cleaning checklist',
      date: 'September 28, 2017',
      link: '/blog/move-in-cleaning-checklist',
    },
  ];

  currentYear = new Date().getFullYear();
  email = 'paulionifill@gmail.com';
}
