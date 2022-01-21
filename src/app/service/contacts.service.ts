import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ContactInterface } from '../model/contact.inteface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  // private urlClient = 'http://localhost:52860/';
  headers = new HttpHeaders({'Accept': '*/*'});
  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<ContactInterface[]>("./assets/json_data/contacts.json").toPromise();
  }

}
