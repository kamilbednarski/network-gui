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

  displayPostAgeDetails(post: Post): string {
    return this.postService.displayPostAgeDetails(post);
  }

  displayPostCreationDateForToday(post: Post): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  displayPostCreationDateForYesterday(post: Post): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  ngOnInit(): void {
    this.posts = this.postService.showAllPost();
  }
}
