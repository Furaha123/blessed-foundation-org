import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ceoInfo = {
    name: ' Dr. Emmanuel Steven Kamara',
    title: 'Our Ceo',
    image: 'assets/about-me.jpg'
  };

  features = [
    {
      icon: 'assets/empowerment.jpg',
      title: 'Youth Empowerment',
      description:
        'We equip young people with skills, tools, and support systems to elevate their daily lives and unlock their full potential.',
    },
    {
      icon: 'assets/health.png',
      title: 'Health & Wellness',
      description:
        'We address malnutrition, promote mental health, and run HIV/AIDS awareness campaigns through community outreach.',
    },
    {
      icon: 'assets/environment.jpg',
      title: 'Environmental Impact',
      description:
        'We foster sustainable living practices and lead behavior-change campaigns to protect our environment.',
    },
    {
      icon: 'assets/community.jpg',
      title: 'Community Engagement',
      description:
        'Through collaboration and compassion, we uplift vulnerable populations and build stronger, more inclusive communities.',
    },
  ];

  services = [
    {
      image: 'assets/education.jpg',
      title: 'Education Enhancement',
      description:
        'Scholarships, literacy programs, and teacher development to ensure learning opportunities for all.',
    },
    {
      image: 'assets/healthcare.jpg',
      title: 'Healthcare Services',
      description:
        'Mobile clinics, preventive care, and infrastructure support to ensure healthier communities.',
    },
    {
      image: 'assets/livelihood.jpg',
      title: 'Livelihood Development',
      description:
        'Skills training, entrepreneurship support, and microfinance programs to foster self-reliance.',
    },
    {
      image: 'assets/inclusion.jpg',
      title: 'Community Integration',
      description:
        'Inclusive support for children, women, the elderly, and people with disabilities in underserved areas.',
    },
  ];

  currentSlide = 0;

  onLearnMore() {
    // Navigate to 'About Us' or 'Programs' page
  }
  
  // Method to navigate to CEO's profile page if needed
  viewCEOProfile() {
    // Navigate to CEO profile page or show more information
    console.log('Viewing CEO profile');
    // Implementation depends on your routing setup
  }
}