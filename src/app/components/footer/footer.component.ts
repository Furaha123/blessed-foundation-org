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
    { name: 'Youth Empowerment Programs', route: '/youth-empowerment' },
    { name: 'Child Nutrition Support', route: '/child-nutrition' },
    { name: 'Poverty Alleviation Initiatives', route: '/poverty-alleviation' },
    { name: 'HIV/AIDS Awareness Campaigns', route: '/hiv-awareness' },
    { name: 'Mental Health Education', route: '/mental-health' },
    { name: 'Community Outreach Projects', route: '/community-outreach' },
    { name: 'Sustainable Development Goals (SDGs)', route: '/sustainable-development' },
    { name: 'Volunteer & Internship Opportunities', route: '/volunteer-opportunities' },
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
  email = 'blessedfoundation45@gmail.com';
}
