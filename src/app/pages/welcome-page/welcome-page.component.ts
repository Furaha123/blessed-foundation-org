import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  state,
} from '@angular/animations';

interface SlideContent {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
  animations: [
    trigger('slideAnimation', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'scale(0.9)',
        })
      ),
      state(
        '*',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition(':enter', [animate('600ms ease-out')]),
      transition(':leave', [animate('600ms ease-in')]),
    ]),
    trigger('titleAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate(
          '800ms 300ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('descriptionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        animate(
          '800ms 600ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('buttonAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-60px)' }),
        animate(
          '600ms 900ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate(
          '400ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms ease-in',
          style({ opacity: 0, transform: 'translateX(20px)' })
        ),
      ]),
    ]),
    trigger('indicatorAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '400ms 1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;
  animationState = true;

  slides: SlideContent[] = [
    {
      image: 'assets/bg-image.jpeg',
      title: 'Welcome to Rizeal Cleaning LLC Services',
      description:
        'Providing top-notch cleaning services for your home and business needs.',
      buttonText: 'Learn More',
      buttonLink: '#',
    },
    {
      image: 'assets/bg-image-1.jpeg',
      title: 'Professional Cleaning Services',
      description: 'Experience the difference with our expert cleaning team.',
      buttonText: 'Our Services',
      buttonLink: '#services',
    },
    {
      image: 'assets/bg-image-3.jpg',
      title: 'Custom Cleaning Solutions',
      description:
        'Tailored cleaning plans to meet your specific requirements.',
      buttonText: 'Get Started',
      buttonLink: '#contact',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.animationState = false;
    setTimeout(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.animationState = true;
    }, 200);
  }

  previousSlide() {
    this.animationState = false;
    setTimeout(() => {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.animationState = true;
    }, 200);
  }

  onManualSlideChange(direction: 'next' | 'prev') {
    this.stopAutoSlide();
    if (direction === 'next') {
      this.nextSlide();
    } else {
      this.previousSlide();
    }
    this.startAutoSlide();
  }
}
