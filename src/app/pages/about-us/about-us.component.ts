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
        'Blessed Foundation is a non-profit organization committed to creating brighter futures through youth empowerment, education, and compassionate outreach.',
    },
    {
      icon: 'assets/what-we-do.svg',
      title: 'WHAT WE DO',
      description:
        'We implement impactful programs focused on combating child malnutrition, raising mental health awareness, and promoting sustainable community development.',
    },
    {
      icon: 'assets/clean.svg',
      title: 'OUR MISSION',
      description:
        'To transform lives by offering hope, education, and support—empowering individuals and communities to rise above challenges and thrive.',
    },
  ];
  

  reasonsToChoose: ReasonToChoose[] = [
    {
      icon: 'assets/one.svg',
      title: 'TRANSFORMING LIVES',
      description:
        'We are committed to uplifting communities by empowering youth, supporting vulnerable children, and sparking lasting change.',
    },
    {
      icon: 'assets/two.svg',
      title: 'INNOVATIVE APPROACHES',
      description:
        'We implement creative, sustainable solutions to tackle poverty, malnutrition, and health awareness challenges.',
    },
    {
      icon: 'assets/three.svg',
      title: 'IMPACTFUL PROGRAMS',
      description:
        'Our initiatives are rooted in research, driven by compassion, and focused on long-term results that improve lives.',
    },
    {
      icon: 'assets/four.svg',
      title: 'DEDICATED TEAM',
      description:
        'Our passionate team and volunteers work tirelessly with integrity and commitment to serve and inspire hope.',
    },
  ];
  
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Emmanuel Steven Kamara',
      position: 'CEO & Founder',
      image: 'assets/about-me.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Prince William’s ',
      position: 'Deputy Executive Director',
      image: 'assets/team-3.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Leo M. Harris ',
      position: 'Advisor to the Board Of Directors',
      image: 'assets/team-1.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Darius Padmore',
      position: 'Director Of International Affairs',
      image: 'assets/team-4.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Stephen kelvin kell Gaye',
      position: 'Marketing Director/ Manager',
      image: 'assets/team-2.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
   
   
    {
      name: 'Mr. George Knight Juwle ',
      position: 'Coordinator',
      image: 'assets/team-5.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Peter Thomas',
      position: 'Monitoring and Evaluation Director',
      image: 'assets/team-6.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Chris Neal',
      position: 'Human Resource Manager',
      image: 'assets/team-7.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Daniel D. Mombo',
      position: 'Project Manager',
      image: 'assets/team-8.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Leo Bropleh ',
      position: 'Program Director',
      image: 'assets/team-9.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Robert Flomo ',
      position: 'Regional Director',
      image: 'assets/team-10.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Daniel Mwah ',
      position: 'Finance Director',
      image: 'assets/team-11.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Jeremiah B. Joe ',
      position: 'Communication Director/ Ways And Means Director',
      image: 'assets/team-12.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Mr. Shadrach Wolloh ',
      position: 'Supervisor',
      image: 'assets/team-13.jpg',
      socialLinks: {
        twitter: '#',
        linkedin: '#',
      },
    },
  ];
}
