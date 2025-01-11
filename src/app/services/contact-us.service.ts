import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ContactUs } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  private readonly collectionPath = 'contacts';
  private readonly contactsCollection: AngularFirestoreCollection<ContactUs>;

  constructor(private readonly firestore: AngularFirestore) {
    this.contactsCollection = this.firestore.collection<ContactUs>(
      this.collectionPath
    );
  }

  createContact(contact: ContactUs): Promise<void> {
    const id = this.firestore.createId();
    return this.contactsCollection.doc(id).set({
      ...contact,
      createdAt: new Date(),
    });
  }

  getContacts(): Observable<ContactUs[]> {
    return this.firestore
      .collection<ContactUs>(this.collectionPath, (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .valueChanges({ idField: 'id' });
  }

  getContactById(contactId: string): Observable<ContactUs | undefined> {
    return this.contactsCollection.doc(contactId).valueChanges();
  }
}
