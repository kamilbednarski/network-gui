import { Component, Input, OnInit } from '@angular/core';
import { LikeService } from 'src/app/post/services/like.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user-activity-likes-tab',
  templateUrl: './user-activity-likes-tab.component.html',
  styleUrls: ['./user-activity-likes-tab.component.sass']
})
export class UserActivityLikesTabComponent implements OnInit {

  @Input()
  username = "";
  private subscriptions: SubSink = new SubSink();

  constructor(private readonly likeService: LikeService) { }

  ngOnInit(): void {
    this.loadLikesByUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadLikesByUser(): void {
    this.subscriptions.add(
      this.likeService.loadLikesByUser(this.username)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )
    );
  }
}
