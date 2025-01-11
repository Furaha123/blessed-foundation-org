import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Booking } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly collectionPath = 'bookings';
  private readonly bookingsCollection: AngularFirestoreCollection<Booking>;

  constructor(private readonly firestore: AngularFirestore) {
    this.bookingsCollection = this.firestore.collection<Booking>(
      this.collectionPath
    );
  }

  createBooking(booking: Booking): Promise<void> {
    const id = this.firestore.createId();
    return this.bookingsCollection.doc(id).set({
      ...booking,
      createdAt: new Date(),
    });
  }

  getBookings(): Observable<Booking[]> {
    return this.firestore
      .collection<Booking>(this.collectionPath, (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .valueChanges({ idField: 'id' });
  }

  getBookingById(bookingId: string): Observable<Booking | undefined> {
    return this.bookingsCollection.doc(bookingId).valueChanges();
  }
}
