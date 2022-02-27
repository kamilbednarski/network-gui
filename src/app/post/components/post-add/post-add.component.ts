import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.sass']
})
export class PostAddComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();

  constructor(
    private readonly postService: PostService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  addPost(content: string) {
    this.subscriptions.add(
      this.postService.addPost(content)
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
}
