import { environment } from '../../../environments/environment';
import { HttpHeadersGenerator } from 'src/app/shared/utils/http-headers-generator';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

const LOGIN_PATH = "/api/auth/login"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly tokenStorageService: TokenStorageService) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(
      environment.apiUrl + LOGIN_PATH,
      { username, password },
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired()}
    );
  }

  public logOut(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
