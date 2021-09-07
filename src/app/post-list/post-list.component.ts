import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { PostResponseObject } from '../postResponseObject';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  private subscriptions = new SubSink();
  posts: PostResponseObject[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadAllPost();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadAllPost() {
    this.subscriptions.add(
      this.postService.fetchPostAll()
        .subscribe(
          response => this.posts = response,
          error => console.log('HTTP Error', error)));
  }

  displayPostCreationDateForToday(post: PostResponseObject): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  displayPostCreationDateForYesterday(post: PostResponseObject): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  formatNumber(number: number) {
    return this.postService.formatNumber(number);
  }
}
