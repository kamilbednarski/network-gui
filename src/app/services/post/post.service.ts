import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DateFormatter } from 'src/app/utils/DateFormatter';
import { NumberFormatter } from 'src/app/utils/NumberFormatter';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

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
