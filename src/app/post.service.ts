import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as Utils from "./utils";
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor(
    private http: HttpClient
  ) { }

  loadPostById(id: number) {
    return this.http.get(environment.apiUrl + `/api/post/get/id/${id}`);
  }

  loadAllPost(): Post[] {
    this.fetchAllPost()
      .subscribe((response) => this.saveAllPostFromResponse(response));
    return this.posts;
  }

  private saveAllPostFromResponse(response: any): void {
    response.forEach((post: Post) => this.posts.push(post));
  }

  private fetchAllPost(): Observable<any> {
    return this.http
      .get(environment.apiUrl + '/api/post/get/all/sort/date');
  }

  displayPostCreationDateForToday(post: Post) {
    return Utils.displayObjectCreationDateForToday(post);
  }

  displayPostCreationDateForYesterday(post: Post) {
    return Utils.displayObjectCreationDateForYesterday(post);
  }

  formatNumber(number: number) {
     return Utils.formatNumber(number);
  }

}
