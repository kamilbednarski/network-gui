import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeadersGenerator } from 'src/app/shared/utils/http-headers-generator';
import { environment } from 'src/environments/environment';
import { UserPublicDetails } from '../models/user-public-details.model';

const GET_FOLLOWER_LIST_URL = '/api/relationship/get/follower/all/username/';
const GET_FOLLOWED_LIST_URL = '/api/relationship/get/followed/all/username/';

@Injectable({
  providedIn: 'root'
})
export class UserRelationshipService {

  constructor(private readonly http: HttpClient) { }

  loadFollowerListBy(username: string): Observable<UserPublicDetails[]> {
    return this.http.get<UserPublicDetails[]>(
      environment.apiUrl + GET_FOLLOWER_LIST_URL + username,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() });
  }

  loadFollowedListBy(username: string): Observable<UserPublicDetails[]> {
    return this.http.get<UserPublicDetails[]>(
      environment.apiUrl + GET_FOLLOWED_LIST_URL + username,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() });
  }
}
