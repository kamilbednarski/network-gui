import { environment } from '../../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

const LOGIN_PATH = "/api/auth/login"
const HTTP_HEADERS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly tokenStorageService: TokenStorageService) { }

  public login(username: string, password: string): Observable<any> { // TODO: migrate to specific object
    return this.http.post(
      environment.apiUrl + LOGIN_PATH,
      { username, password },
      HTTP_HEADERS);
  }

  public logOut(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
