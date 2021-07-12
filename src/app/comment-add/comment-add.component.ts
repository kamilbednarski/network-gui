import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';

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
    console.log(content);
    console.log(postId);
    //TODO: POST create new comment for given Post
    //this.commentService.addNewComment(content);
  }
}
