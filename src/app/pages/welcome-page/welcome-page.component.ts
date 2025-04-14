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
      image: 'assets/together.jpg',
      title: 'Together We Build Hope',
      description: 'Empowering communities through love, care, and support.',
      buttonText: 'Join Us',
      buttonLink: '#get-involved',
    },
    {
      image: 'assets/slide-1.jpg',
      title: 'Changing Lives Every Day',
      description: 'From education to health, we’re making a lasting impact.',
      buttonText: 'Our Programs',
      buttonLink: '#programs',
    },
    {
      image: 'assets/slide-2.jpg',
      title: 'Be the Light for Someone',
      description: 'Your support helps us reach more families in need.',
      buttonText: 'Donate Now',
      buttonLink: '#donate',
    },
    {
      image: 'assets/slide-4.jpg',
      title: 'Empower Through Education',
      description: 'With your support, we provide hope, learning, and opportunity to students who need it most.',
      buttonText: 'Support Now',
      buttonLink: '#donate',
    },
    
    {
      image: 'assets/slide-5.jpg',
      title: 'Together, We Rise Through Education',
      description: 'This is the impact of your support—smiling faces, empowered minds, and brighter futures.',
      buttonText: 'Become a Volunteer',
      buttonLink: '#donate',
    }    
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
    }, 2000);
  }

  previousSlide() {
    this.animationState = false;
    setTimeout(() => {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.animationState = true;
    }, 2000);
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
