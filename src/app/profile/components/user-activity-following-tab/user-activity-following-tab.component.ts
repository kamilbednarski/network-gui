import { Component, Input, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { UserPublicDetails } from '../../models/user-public-details.model';
import { UserRelationshipService } from '../../services/user-relationship.service';

@Component({
  selector: 'app-user-activity-following-tab',
  templateUrl: './user-activity-following-tab.component.html',
  styleUrls: ['./user-activity-following-tab.component.sass']
})
export class UserActivityFollowingTabComponent implements OnInit {

  @Input()
  username = "";
  followedList: UserPublicDetails[] = [];
  private subscriptions: SubSink = new SubSink();

  constructor(private readonly relationshipService: UserRelationshipService) { }

  ngOnInit(): void {
    this.loadFollowerList();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadFollowerList() {
    this.subscriptions.add(
      this.relationshipService.loadFollowedListBy(this.username)
        .subscribe(
          response => this.followedList = response,
          error => console.log(error)
        )
    );
  }
}
