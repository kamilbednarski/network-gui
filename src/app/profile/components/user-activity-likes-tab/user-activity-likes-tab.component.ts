import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
}
