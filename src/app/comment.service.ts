import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as Utils from "./utils";
import { PostComment } from './comment';

@Injectable()
export class CommentService {
  private comments: PostComment[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addNewComment(content: string, postId: number) {
    console.log(content);
    console.log(postId);
    //TODO: implement create new comment for given Post
  }

  deleteCommentById(id: number) {
    console.log(id);
    //TODO: implement delete existing comment
  }

  editComment(commentId: number, content: string) {
    console.log(commentId);
    console.log(content);
    //TODO: implement edit existing comment
  }

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
      .get(environment.apiUrl + `/api/comment/get/all/post/${id}`);
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
