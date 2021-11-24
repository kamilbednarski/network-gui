import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.sass']
})
export class CommentAddComponent implements OnInit {
  @Input() uniquePostId: any;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
  }

  addComment(content: string, postId: number) {
    this.commentService.addComment(content, postId);
  }

  deleteComment(commentId: number) {
    this.commentService.deleteCommentById(commentId);
  }

  editComment(commentId: number, content: string) {
    this.commentService.editComment(commentId, content);
  }
}
