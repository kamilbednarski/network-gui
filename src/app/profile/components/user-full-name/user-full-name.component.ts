import { Component, Input, OnInit } from '@angular/core';
import { UserPublicDetails } from '../../models/user-public-details.model';

@Component({
  selector: 'app-user-full-name',
  templateUrl: './user-full-name.component.html',
  styleUrls: ['./user-full-name.component.sass']
})
export class UserFullNameComponent implements OnInit {

  @Input() userData: UserPublicDetails | any;

  constructor() { }

  ngOnInit(): void {
  }
}
