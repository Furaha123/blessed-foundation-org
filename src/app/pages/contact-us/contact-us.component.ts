import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../../services/contact-us.service';
import { ContactUs } from '../../models/contact.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly contactUsService: ContactUsService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const contact: ContactUs = this.contactForm.value;

      this.contactUsService
        .createContact(contact)
        .then(() => {
          console.log('Message sent successfully:', contact);
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    }
  }
}
