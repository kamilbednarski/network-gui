import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateFormatter } from 'src/app/shared/utils/date-formatter';
import { NumberFormatter } from 'src/app/shared/utils/number-formatter';
import { Post } from '../../post/models/post.model';

const POST_BY_ID_URL = '/api/post/get/id/';
const POST_ALL_SORT_BY_DATE = '/api/post/get/all/sort/date';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly http: HttpClient) { }

  public fetchPostAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(environment.apiUrl + POST_ALL_SORT_BY_DATE);
  }

  public fetchPostById(id: number): Observable<Post> {
    return this.http
      .get<Post>(environment.apiUrl + `${POST_BY_ID_URL}${id}`);
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
