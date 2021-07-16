import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../post';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  private subscriptions = new SubSink();
  posts: Post[] = [];

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

  displayPostCreationDateForToday(post: Post): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  displayPostCreationDateForYesterday(post: Post): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  formatNumber(number: number) {
    return this.postService.formatNumber(number);
  }
}
