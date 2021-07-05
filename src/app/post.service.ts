import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Post } from './post';

const datepipe: DatePipe = new DatePipe('en-US');
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

  displayPostCreationDateForToday(post: Post) {
    return "today at " + post.timeOfCreation;
  }

  displayPostCreationDateForYesterday(post: Post) {
    return "yesterday at " + post.timeOfCreation;
  }

  displayPostAgeDetails(post: Post): string {
    if (post.ageOfPostInYears == 1) {
      return post.ageOfPostInYears + " year ago."
    }
    else if (post.ageOfPostInYears > 1) {
      return post.ageOfPostInYears + " years ago."
    }
    else if (post.ageOfPostInDays == 0) {
      return "today at " + post.timeOfCreation;
    }
    else if (post.ageOfPostInDays == 1) {
      return "yesterday at " + post.timeOfCreation;
    }
    else {
      return post.dateOfCreation + " " + post.timeOfCreation;
    }
  }
}
