import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';
import { PostService } from 'src/app/post/services/post.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-like-button-post-details',
  templateUrl: './like-button-post-details.component.html',
  styleUrls: ['./like-button-post-details.component.sass']
})
export class LikeButtonPostDetailsComponent implements OnInit {

  @Input()
  post: Post | any;
  private subscriptions: SubSink = new SubSink();

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addLike(): void {
    this.subscriptions.add(
      this.postService.addLike(this.post.postId)
        .subscribe(
          response => this.post.numberOfLikes++,
          error => console.log(error)
        )
    );
  }
}
