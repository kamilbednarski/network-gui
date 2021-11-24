import { environment } from '../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRegistrationRequest } from '../../models/UserRegistrationRequest';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(request: UserRegistrationRequest): Observable<Object> {
    return this.http
      .post<Object>(environment.apiUrl + '/api/registration', request);
  }

  isRegistrationFormValid(registrationForm: FormGroup): boolean {
    return true;
  }

  isUsernameValid(username: string): Observable<boolean> {
    return this.http
      .post<boolean>(environment.apiUrl + '/api/registration/validate/isUsernameValid', username);
  }

  isEmailFormatValid(email: string): Observable<boolean> {
    return this.http
      .post<boolean>(environment.apiUrl + '/api/registration/validate/isEmailValid', email);
  }

  isPasswordFormatValid(password: string): Observable<boolean> {
    return this.http
      .post<boolean>(environment.apiUrl + '/api/registration/validate/isPasswordValid', password);
  }
}