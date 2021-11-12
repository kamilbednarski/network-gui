import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  private _userId: any;
  private _username: any;
  private _email: any;
  private _roles: any;

  ngOnInit(): void {
    if (this.tokenStorageService.isUserLoggedIn()) {
      const userData = this.tokenStorageService.getUser();
      this._userId = userData.id;
      this._username = userData.username;
      this._email = userData.email;
      this._roles = userData.roles;
    } else {
      this.router.navigate(['/login']);
    }
  }

  public get userId(): number { return this._userId; }
  public get username(): string { return this._username; }
  public get email(): string { return this._email; }
  public get roles(): [] { return this._roles; }
}
