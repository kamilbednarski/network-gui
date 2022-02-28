import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';
import { LikeService } from 'src/app/post/services/like.service';
import { LikeToggleState } from 'src/app/shared/enum/like-toggle-state';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-like-button-post-details',
  templateUrl: './like-button-post-details.component.html',
  styleUrls: ['./like-button-post-details.component.sass']
})
export class LikeButtonPostDetailsComponent implements OnInit {

  @Input()
  post: Post | any;
  isPostLikedByLoggedUser = false;
  private subscriptions: SubSink = new SubSink();

  constructor(private readonly likeService: LikeService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.post && this.post.postId) {
      this.checkCurrentState();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  checkCurrentState(): void {
    this.subscriptions.add(
      this.likeService.checkPostLikeState(this.post.postId)
        .subscribe(
          response => this.saveLikeState(response),
          error => console.log(error)
        )
    );
  }

  private saveLikeState(currentState: LikeToggleState): void {
    switch (currentState) {
      case LikeToggleState.LIKED:
        this.isPostLikedByLoggedUser = true;
        break;
      case LikeToggleState.UNLIKED:
        this.isPostLikedByLoggedUser = false;
        break;
    }
  }

  toggleLikeState(): void {
    this.subscriptions.add(
      this.likeService.togglePostLike(this.post.postId)
        .subscribe(
          response => {
            this.saveLikeState(response);
            this.updatePostLikeCounter(response);
          },
          error => console.log(error)
        )
    );
  }

  private updatePostLikeCounter(currentState: LikeToggleState): void {
    switch (currentState) {
      case LikeToggleState.LIKED:
        this.post.numberOfLikes++;
        break;
      case LikeToggleState.UNLIKED:
        this.post.numberOfLikes--;
        break;
    }
  }
}
