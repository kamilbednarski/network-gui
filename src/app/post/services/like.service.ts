import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LikeToggleState } from 'src/app/shared/enum/like-toggle-state';
import { HttpHeadersGenerator } from 'src/app/shared/utils/http-headers-generator';
import { environment } from 'src/environments/environment';
import { Like } from '../models/like.model';

const TOGGLE_POST_LIKE_URL = '/api/like/post/post/';
const CHECK_CURRENT_POST_LIKE_STATE = '/api/like/get/post/';
const GET_ALL_BY_USER = '/api/like/get/all/user/';
const EMPTY_POST_REQUEST_BODY = null;

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private readonly http: HttpClient) { }

  checkPostLikeState(postId: number): Observable<LikeToggleState> {
    return this.http.get<LikeToggleState>(
      environment.apiUrl + CHECK_CURRENT_POST_LIKE_STATE + postId,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  togglePostLike(postId: number): Observable<LikeToggleState> {
    return this.http.post<LikeToggleState>(
      environment.apiUrl + TOGGLE_POST_LIKE_URL + postId,
      EMPTY_POST_REQUEST_BODY,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  loadLikesByUser(username: string): Observable<Like[]> {
    return this.http.get<Like[]>(
      environment.apiUrl + GET_ALL_BY_USER + username,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }
}
