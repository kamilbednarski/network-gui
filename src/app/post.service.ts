import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as Utils from "./utils";
import { PostResponseObject } from './postResponseObject';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public fetchPostAll(): Observable<PostResponseObject[]> {
    return this.http
      .get<PostResponseObject[]>(environment.apiUrl + '/api/post/get/all/sort/date');
  }

  public fetchPostById(id: number): Observable<PostResponseObject> {
    return this.http
      .get<PostResponseObject>(environment.apiUrl + `/api/post/get/id/${id}`);
  }

  public displayPostCreationDateForToday(post: PostResponseObject): string {
    return Utils.displayObjectCreationDateForToday(post);
  }

  public displayPostCreationDateForYesterday(post: PostResponseObject): string {
    return Utils.displayObjectCreationDateForYesterday(post);
  }

  public formatNumber(number: number): string | number {
    return Utils.formatNumber(number);
  }
}
