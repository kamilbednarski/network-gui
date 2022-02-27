import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateFormatter } from 'src/app/shared/utils/date-formatter';
import { NumberFormatter } from 'src/app/shared/utils/number-formatter';
import { Post } from '../../post/models/post.model';
import { HttpHeadersGenerator } from 'src/app/shared/utils/http-headers-generator';

const GET_BY_ID_URL = '/api/post/get/id/';
const GET_ALL_SORT_BY_DATE_URL = '/api/post/get/all/sort/date';
const GET_ALL_BY_USERNAME_URL = '/api/post/get/all/username/';
const POST_ADD_POST = '/api/post/post/new';
const POST_ADD_LIKE_URL = '/api/post/post/like/id/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly http: HttpClient) { }

  addPost(content: string): Observable<Object> {
    return this.http.post(
      environment.apiUrl + POST_ADD_POST,
      { content: content },
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  fetchPostAllByUsername(username: string): Observable<Post[]> {
    return this.http.get<Post[]>(
      environment.apiUrl + GET_ALL_BY_USERNAME_URL + username);
  }

  addLike(postId: any) {
    return this.http.post(
      environment.apiUrl + POST_ADD_LIKE_URL + postId,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  fetchPostAll(): Observable<Post[]> {
    return this.http.get<Post[]>(
      environment.apiUrl + GET_ALL_SORT_BY_DATE_URL);
  }

  fetchPostById(id: number): Observable<Post> {
    return this.http.get<Post>(
      environment.apiUrl + GET_BY_ID_URL + id);
  }

  displayPostCreationDateForToday(post: Post): string {
    return DateFormatter.displayObjectCreationDateForToday(post);
  }

  displayPostCreationDateForYesterday(post: Post): string {
    return DateFormatter.displayObjectCreationDateForYesterday(post);
  }

  formatNumber(number: number): string | number {
    return NumberFormatter.formatNumber(number);
  }
}
