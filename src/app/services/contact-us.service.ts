import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUsType } from '../Types/app-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}

  public submitForm(formData: ContactUsType): Observable<any> {
    return this.http.post('https://formspree.io/f/xjgppypk', formData, {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
