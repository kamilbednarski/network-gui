import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from '../../services/comment/comment.service';
import { Comment } from "../../models/Comment";
import { SubSink } from 'subsink';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.comments = [];
    // Get the post id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = Number(routeParams.get('postId'));
    // Find comments that corespond with the post id provided in route.
    this.loadCommentAllByPostId(postIdFromRoute);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  checkComment(comment: Comment) {
    console.log("comment", comment);
    return comment != undefined;
  }

  loadCommentAllByPostId(id: number): void {
    this.subscriptions.add(
      this.commentService.fetchCommentAllByPostId(id)
        .subscribe(
          response => this.comments = response,
          error => console.log(error)));
  }

  displayCommentCreationDateForToday(comment: Comment): string {
    return this.commentService.displayCommentCreationDateForToday(comment);
  }

  displayCommentCreationDateForYesterday(comment: Comment): string {
    return this.commentService.displayCommentCreationDateForYesterday(comment);
  }

  formatNumber(number: number) {
    return this.commentService.formatNumber(number);
  }
}
