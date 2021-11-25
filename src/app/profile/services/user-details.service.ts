import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private readonly http: HttpClient) { }

  readUserDetails(userId: number) {
    // TODO: implement fetching user details for logged user
  }
}
