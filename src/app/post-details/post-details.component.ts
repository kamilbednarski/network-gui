import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

import { CommentService } from '../comment.service';
import { Post } from "../post";
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.sass'],
  providers: [CommentService]
})
export class PostDetailsComponent implements OnInit {

  private subscriptions = new SubSink();
  post: Post = {} as Post;
  uniquePostId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // Get the post id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('postId'));
    this.uniquePostId = postIdFromRoute;

    // Find the post that correspond with the id provided in route.
    this.loadPostById(postIdFromRoute);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadPostById(id: number): void {
    this.subscriptions.add(
      this.postService.fetchPostById(id)
        .subscribe(
          response => this.post = response,
          error => console.log('HTTP Error', error)));
  }

  displayPostCreationDateForToday(post: Post): string {
    return this.postService.displayPostCreationDateForToday(post);
  }

  displayPostCreationDateForYesterday(post: Post): string {
    return this.postService.displayPostCreationDateForYesterday(post);
  }

  formatNumber(number: number): string | number {
    return this.postService.formatNumber(number);
  }
}
