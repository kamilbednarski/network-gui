import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.sass']
})
export class UserActivityComponent implements OnInit {

  @Input()
  username = "";

  isPostTabActive = true;
  isFollowersTabActive = false;
  isFollowingTabActive = false;
  isLikesTabActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  activatePostsTab(): void {
    this.isPostTabActive = true;
    this.isFollowersTabActive = false;
    this.isFollowingTabActive = false;
    this.isLikesTabActive = false;
  }
  activateFollowersTab(): void {
    this.isPostTabActive = false;
    this.isFollowersTabActive = true;
    this.isFollowingTabActive = false;
    this.isLikesTabActive = false;
  }
  activateFollowingTab(): void {
    this.isPostTabActive = false;
    this.isFollowersTabActive = false;
    this.isFollowingTabActive = true;
    this.isLikesTabActive = false;
  }
  activateLikesTab(): void {
    this.isPostTabActive = false;
    this.isFollowersTabActive = false;
    this.isFollowingTabActive = false;
    this.isLikesTabActive = true;
  }
}
