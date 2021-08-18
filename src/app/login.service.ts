import { environment } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(loginForm: Object): Observable<Object> {
    return this.http
      .post<Object>(environment.apiUrl + "/login", loginForm);
  }
}
