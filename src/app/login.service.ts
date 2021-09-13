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
    let loginFormData = new FormData();
    loginFormData.append("username", username);
    loginFormData.append("password", password);
    return this.http
      .post<Object>(environment.apiUrl + "/login", loginFormData);
  }
}
