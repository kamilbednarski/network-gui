import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.loadAllPost();
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