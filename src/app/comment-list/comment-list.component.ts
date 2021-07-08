import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from '../comment.service';
import { PostComment } from "../comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {
  comments: PostComment[] = [];

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    // Get the post id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('postId'));

    // Find comments that correspond with the post id provided in route.
    this.commentService.loadAllCommentByPostId(postIdFromRoute)
      .forEach((comment) => this.comments.push(comment));
  }

}
