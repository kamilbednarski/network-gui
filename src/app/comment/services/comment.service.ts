import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateFormatter } from 'src/app/shared/utils/date-formatter';
import { NumberFormatter } from 'src/app/shared/utils/number-formatter';
import { Comment } from '../../comment/models/comment.model';
import { HttpHeadersGenerator } from 'src/app/shared/utils/http-headers-generator';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private readonly http: HttpClient) { }

  addComment(content: string, postId: number) {
    return this.http.post(
      `${environment.apiUrl}/api/comment/post/new/${postId}`,
      content,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  deleteCommentById(id: number) {
    return this.http.delete(
      `${environment.apiUrl}/api/comment/delete/${id}`,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  editComment(id: number, content: string) {
    return this.http.put(
      `${environment.apiUrl}/api/comment/post/new/${id}`,
      content,
      { headers: HttpHeadersGenerator.generateHttpHeadersWithAuthRequired() }
    );
  }

  fetchCommentAllByPostId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      environment.apiUrl +
      `/api/comment/get/all/post/${id}`
    );
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
