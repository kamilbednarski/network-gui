import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateFormatter } from 'src/app/shared/utils/date-formatter';
import { NumberFormatter } from 'src/app/shared/utils/number-formatter';
import { Post } from '../../post/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly http: HttpClient) { }

  public fetchPostAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(environment.apiUrl + '/api/post/get/all/sort/date');
  }

  public fetchPostById(id: number): Observable<Post> {
    return this.http
      .get<Post>(environment.apiUrl + `/api/post/get/id/${id}`);
  }

  public displayPostCreationDateForToday(post: Post): string {
    return DateFormatter.displayObjectCreationDateForToday(post);
  }

  public displayPostCreationDateForYesterday(post: Post): string {
    return DateFormatter.displayObjectCreationDateForYesterday(post);
  }

  public formatNumber(number: number): string | number {
    return NumberFormatter.formatNumber(number);
  }
}
