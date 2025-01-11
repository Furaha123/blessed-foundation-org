import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../../models/contact.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  bookingForm: FormGroup;
  isSubmitting = false;

  services = [
    'General Cleaning',
    'Deep Cleaning',
    'Restroom Cleaning',
    'Floor Care',
    'Commercial Cleaning',
    'Window Cleaning',
  ];

  timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly bookingService: BookingService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      service: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      specialInstructions: [''],
    });
  }

  ngOnInit() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];

    const dateInput = document.getElementById(
      'preferredDate'
    ) as HTMLInputElement;
    if (dateInput) {
      dateInput.min = minDate;
    }
  }

  onSubmit() {
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      const booking: Booking = this.bookingForm.value;

      this.bookingService
        .createBooking(booking)
        .then(() => {
          console.log('Booking submitted successfully:', booking);
          this.bookingForm.reset();
        })
        .catch((error) => {
          console.error('Error submitting booking:', error);
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    }
  }
}
