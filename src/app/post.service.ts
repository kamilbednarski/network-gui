import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private commentCounter: number | any = 56;

  constructor(
    private http: HttpClient
  ) { }


  loadAllPost() {
    this.fetchAllPost()
        .subscribe((response) => this.saveAllPostFromResponse(response));
    return this.posts;
  }

  private saveAllPostFromResponse(response: any): void {
    response.forEach((post: Post) => this.posts.push(post));
  }

  private fetchAllPost(): Observable<any> {
    return this.http
        .get('http://localhost:8080/api/post/get/all/sort/date');
  }

  displayPostCreationDateForToday(post: Post) {
    return "today at " + post.timeOfCreation;
  }

  displayPostCreationDateForYesterday(post: Post) {
    return "yesterday at " + post.timeOfCreation;
  }

  formatNumber(number: number) {
    return Math.abs(number) > 999
          ? Math.sign(number)*(Math.round(Math.abs(number)/100)/10) + 'k'
          : Math.sign(number)*Math.abs(number);
  }

}
