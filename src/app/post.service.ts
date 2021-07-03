import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Post } from './post';

const GET_ALL_POST_ENDPOINT = 'http://localhost:8080/api/post/get/all/sort/date';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  constructor(
    private http: HttpClient
  ) { }


  showAllPost() {
    this.loadAllPost().subscribe((response) => this.saveAllPostFromResponse(response));
    return this.posts;
  }

  private saveAllPostFromResponse(response: any): void {
    response.forEach((post: Post) => this.posts.push(post));
  }

  private loadAllPost(): Observable<any> {
    return this.http.get(GET_ALL_POST_ENDPOINT);
  }
}
