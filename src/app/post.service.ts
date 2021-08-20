import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as Utils from "./utils";
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  fetchPostAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(environment.apiUrl + '/api/post/get/all/sort/date');
  }

  fetchPostById(id: number): Observable<Post> {
    return this.http
      .get<Post>(environment.apiUrl + `/api/post/get/id/${id}`);
  }

  displayPostCreationDateForToday(post: Post): string {
    return Utils.displayObjectCreationDateForToday(post);
  }

  displayPostCreationDateForYesterday(post: Post): string {
    return Utils.displayObjectCreationDateForYesterday(post);
  }

  formatNumber(number: number): string | number {
    return Utils.formatNumber(number);
  }
}
