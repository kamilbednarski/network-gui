import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];

  constructor(
    private http: HttpClient
  ) { }

  loadAllCommentByPostId(id: number): Comment[] {
    this.fetchAllCommentByPostId(id)
      .subscribe((response) => this.saveAllCommentFromResponse(response));
    return this.comments;
  }

  private saveAllCommentFromResponse(response: any): void {
    response.forEach((comment: Comment) => this.comments.push(comment));
  }

  private fetchAllCommentByPostId(id: number): Observable<any> {
    return this.http
      .get(`http://localhost:8080/api/comment/get/all/post/${id}`);
  }
}
