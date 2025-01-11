export interface ContactUs {
  id?: string;
  name: string;
  email: string;
  message: string;
  phone: string;
  createdAt?: Date;
}
export interface Booking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  city: string;
  zipCode: string;
  preferredDate: string;
  preferredTime: string;
  specialInstructions: string;
  createdAt?: Date;
}
