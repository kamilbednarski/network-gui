import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpHeadersGenerator } from 'src/app/shared/utils/http-headers-generator';

const LOGGED_USER_DETAILS_URL = '/api/user/get/current';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private readonly http: HttpClient) { }

  readLoggedUserDetails(): Observable<any> {
    return this.http.get(
      environment.apiUrl + LOGGED_USER_DETAILS_URL,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() });
  }
}
