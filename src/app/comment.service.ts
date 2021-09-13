import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as Utils from "./utils";
import { CommentResponseObject } from './commentResponseObject';

@Injectable()
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  addComment(content: string, postId: number) {
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

  fetchCommentAllByPostId(id: number): Observable<CommentResponseObject[]> {
    return this.http
      .get<CommentResponseObject[]>(environment.apiUrl + `/api/comment/get/all/post/${id}`);
  }

  displayCommentCreationDateForToday(comment: CommentResponseObject): string {
    return Utils.displayObjectCreationDateForToday(comment);
  }

  displayCommentCreationDateForYesterday(comment: CommentResponseObject): string {
    return Utils.displayObjectCreationDateForYesterday(comment);
  }

  formatNumber(number: number): string | number {
     return Utils.formatNumber(number);
  }
}
