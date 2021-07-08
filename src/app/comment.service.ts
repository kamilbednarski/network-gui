import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as Utils from "./utils";
import { PostComment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: PostComment[] = [];

  constructor(
    private http: HttpClient
  ) { }

  loadAllCommentByPostId(id: number): PostComment[] {
    this.fetchAllCommentByPostId(id)
      .subscribe((response) => this.saveAllCommentFromResponse(response));
    return this.comments;
  }

  private saveAllCommentFromResponse(response: any): void {
    response.forEach((comment: PostComment) => this.comments.push(comment));
  }

  private fetchAllCommentByPostId(id: number): Observable<any> {
    return this.http
      .get(`http://localhost:8080/api/comment/get/all/post/${id}`);
  }

  displayCommentCreationDateForToday(comment: PostComment) {
    return Utils.displayObjectCreationDateForToday(comment);
  }

  displayCommentCreationDateForYesterday(comment: PostComment) {
    return Utils.displayObjectCreationDateForYesterday(comment);
  }

  formatNumber(number: number) {
     return Utils.formatNumber(number);
  }
}
