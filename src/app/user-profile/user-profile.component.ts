import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

   data: any;
   id: any;
   username: any;
   email: any;
   token: any;
   roles: any;

  ngOnInit(): void {
    this.data = this.tokenStorageService.getUser();
    this.id = this.data.id;
    this.username = this.data.username;
    this.email = this.data.email;
    this.token = this.data.token;
    this.roles = this.data.roles;
  }

  readData() {
    return JSON.stringify(this.data);
  }
}
