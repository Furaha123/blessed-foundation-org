// services.component.ts
import { Component } from '@angular/core';

// Define the ServiceLink interface
interface ServiceLink {
  name: string;
  images: string[];
  overview: string;
  guarantee: string;
  mission: {
    intro: string;
    points: string[];
  };
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  // Define the selected service variable
  selectedService: ServiceLink;

  // List of service links
  serviceLinks: ServiceLink[] = [
    {
      name: 'General  Cleaning',
      images: ['/assets/about.jpg', '/assets/bg-image-2.jpg'],
      overview:
        'Our professional house cleaning service ensures your home stays pristine and comfortable. We use eco-friendly products and follow a detailed cleaning checklist to maintain the highest standards of cleanliness.',
      guarantee:
        'We guarantee thorough cleaning of all living spaces, including kitchens, bathrooms, bedrooms, and common areas. Our team is trained to pay attention to details and ensure your complete satisfaction.',
      mission: {
        intro:
          'Our house cleaning mission is to provide exceptional cleaning services that make your home a healthier and more enjoyable space.',
        points: [
          'Deep clean all surfaces and spaces',
          'Use eco-friendly cleaning solutions',
          'Maintain consistent cleaning standards',
          'Respect your home and belongings',
          'Provide flexible scheduling options',
        ],
      },
    },
    {
      name: 'Deep Cleaning',
      images: ['/assets/renovation-1.jpg', '/assets/renovation2.jpg'],
      overview:
        'Our deep cleaning service provides a thorough and comprehensive cleaning solution for every corner of your space. From hidden areas to heavily used surfaces, we ensure your environment is spotless, sanitized, and refreshed.',
      guarantee:
        'We guarantee meticulous cleaning and sanitization of all areas, including hard-to-reach spaces. Our advanced cleaning techniques and eco-friendly products ensure a healthier, more welcoming environment.',
      mission: {
        intro:
          'Our mission is to deliver exceptional deep cleaning services that restore the beauty, hygiene, and comfort of your space.',
        points: [
          'Thoroughly clean and sanitize all surfaces',
          'Target hidden and hard-to-reach areas',
          'Remove built-up grime and stubborn stains',
          'Use eco-friendly, high-performance cleaning products',
          'Create a healthier and fresher living or working environment',
        ],
      },
    },
    {
      name: 'Restroom Cleaning',
      images: ['/assets/toilet.jpg', '/assets/toilet-3.jpg'],
      overview:
        'Our professional restroom cleaning service ensures hygienic and sanitized facilities. We specialize in deep cleaning and disinfecting restrooms for both residential and commercial properties, promoting health and comfort.',
      guarantee:
        'We guarantee thorough cleaning and disinfection of all restroom surfaces, including toilets, sinks, floors, and walls. Our team uses eco-friendly yet powerful cleaning solutions to eliminate bacteria and odors.',
      mission: {
        intro:
          'Our mission is to provide exceptional restroom cleaning services that ensure a safe, hygienic, and welcoming environment.',
        points: [
          'Thoroughly clean and disinfect all restroom surfaces',
          'Eliminate odors and harmful bacteria',
          'Use eco-friendly, high-quality cleaning products',
          'Ensure compliance with hygiene and safety standards',
          'Promote health and comfort in all facilities',
        ],
      },
    },

    {
      name: 'Floor Care',
      images: ['/assets/about-2.jpg', '/assets/deep.jpg'],
      overview:
        'Our floor care service ensures your floors remain clean, polished, and well-maintained. We handle a variety of flooring types, offering specialized care to preserve their beauty and extend their lifespan.',
      guarantee:
        'We guarantee professional cleaning, restoration, and maintenance of your floors. Whether hardwood, tile, carpet, or vinyl, our team ensures a flawless finish and long-lasting protection.',
      mission: {
        intro:
          'Our mission is to provide top-tier floor care solutions that enhance the appearance, safety, and durability of your flooring.',
        points: [
          'Deep clean and sanitize all flooring types',
          'Restore shine and remove stubborn stains',
          'Apply protective treatments for longevity',
          'Use eco-friendly and non-damaging products',
          'Enhance the overall aesthetic of your space',
        ],
      },
    },

    {
      name: 'Commercial Cleaning',
      images: ['/assets/commercial.jpg', '/assets/cleaning.jpg'],
      overview:
        'Our commercial cleaning services maintain professional environments at the highest standards. We serve offices, retail spaces, and commercial facilities with customized cleaning solutions.',
      guarantee:
        "We guarantee professional, reliable, and consistent cleaning services that maintain your commercial space's professional appearance and hygiene standards.",
      mission: {
        intro:
          'Our mission is to provide exceptional commercial cleaning services that enhance workplace environments.',
        points: [
          'Maintain professional appearances',
          'Ensure healthy work environments',
          'Provide consistent service quality',
          'Offer flexible scheduling options',
          'Support workplace productivity',
        ],
      },
    },
    {
      name: 'Window Cleaning',
      images: ['/assets/window-clean.jpg', '/assets/window-clean1.jpg'],
      overview:
        'Our professional window cleaning service ensures crystal-clear views and well-maintained windows for both residential and commercial properties.',
      guarantee:
        'We guarantee streak-free, thoroughly cleaned windows using professional-grade equipment and techniques for optimal results.',
      mission: {
        intro:
          'Our mission is to provide superior window cleaning services that enhance the appearance and maintenance of your property.',
        points: [
          'Deliver streak-free results',
          'Use professional cleaning techniques',
          'Ensure safety in all operations',
          'Maintain window integrity',
          'Provide regular maintenance options',
        ],
      },
    },
  ];

  constructor() {
    // Set default selected service
    this.selectedService = this.serviceLinks[0];
  }

  // Method to select a service
  selectService(service: ServiceLink): void {
    this.selectedService = service;
  }
}
