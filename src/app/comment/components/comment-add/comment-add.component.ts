import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.sass']
})
export class CommentAddComponent implements OnInit, OnDestroy {

  @Input()
  uniquePostId: any;
  private subscriptions: SubSink = new SubSink();

  constructor(
    private readonly commentService: CommentService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addComment(content: string, postId: number) {
    this.subscriptions.add(
      this.commentService.addComment(content, postId)
        .subscribe(
          response => this.reloadComponent(),
          error => console.log(error)
        )
    );
  }

  private reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deleteComment(commentId: number) {
    this.commentService.deleteCommentById(commentId);
  }

  editComment(commentId: number, content: string) {
    this.commentService.editComment(commentId, content);
  }
}
