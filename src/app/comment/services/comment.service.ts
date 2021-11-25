import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateFormatter } from 'src/app/shared/utils/date-formatter';
import { NumberFormatter } from 'src/app/shared/utils/number-formatter';
import { Comment } from '../../comment/models/comment.model';

@Injectable()
export class CommentService {

  constructor(private readonly http: HttpClient) { }

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

  fetchCommentAllByPostId(id: number): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(environment.apiUrl + `/api/comment/get/all/post/${id}`);
  }

  displayCommentCreationDateForToday(comment: Comment): string {
    return DateFormatter.displayObjectCreationDateForToday(comment);
  }

  displayCommentCreationDateForYesterday(comment: Comment): string {
    return DateFormatter.displayObjectCreationDateForYesterday(comment);
  }

  formatNumber(number: number): string | number {
     return NumberFormatter.formatNumber(number);
  }
}
