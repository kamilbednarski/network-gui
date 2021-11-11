import { environment } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<Object> {
    let loginRequest = new FormData();
    loginRequest.append("username", username);
    loginRequest.append("password", password);
    return this.http
      .post<Object>(environment.apiUrl + "/api/auth/login", loginRequest);
  }
}
