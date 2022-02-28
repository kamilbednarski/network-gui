import { Component, Input, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { UserPublicDetails } from '../../models/user-public-details.model';
import { UserRelationshipService } from '../../services/user-relationship.service';

@Component({
  selector: 'app-user-activity-followers-tab',
  templateUrl: './user-activity-followers-tab.component.html',
  styleUrls: ['./user-activity-followers-tab.component.sass']
})
export class UserActivityFollowersTabComponent implements OnInit {

  @Input()
  username = "";
  followerList: UserPublicDetails[] = [];
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
      this.relationshipService.loadFollowerListBy(this.username)
        .subscribe(
          response => this.followerList = response,
          error => console.log(error)
        )
    );
  }
}
