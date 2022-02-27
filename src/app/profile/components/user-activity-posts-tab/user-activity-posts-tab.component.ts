import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';
import { PostService } from 'src/app/post/services/post.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user-activity-posts-tab',
  templateUrl: './user-activity-posts-tab.component.html',
  styleUrls: ['./user-activity-posts-tab.component.sass']
})
export class UserActivityPostsTabComponent implements OnInit {

  @Input()
  username = "";
  private subscriptions: SubSink = new SubSink();
  posts: Post[] = [];

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
    this.loadAllPostByUsername(this.username);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadAllPostByUsername(username: string): void {
    this.subscriptions.add(
      this.postService.fetchPostAllByUsername(username)
        .subscribe(
          response => this.posts = response,
          error => console.log('HTTP Error', error)
        )
    );
  }

  formatNumber(number: number) {
    return this.postService.formatNumber(number);
  }
}
