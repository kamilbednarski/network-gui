import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const LOGIN_PATH = "/api/auth/login"
const HTTP_HEADERS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> { // TODO: migrate to specific object
    return this.http.post(
      environment.apiUrl + LOGIN_PATH,
      { username, password },
      HTTP_HEADERS);
  }
}
