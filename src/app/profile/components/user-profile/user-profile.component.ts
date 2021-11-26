import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/authentication/models/user.model';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';
import { SubSink } from 'subsink';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  constructor(
    private readonly tokenStorageService: TokenStorageService,
    private readonly userDetailsService: UserDetailsService,
    private readonly router: Router) { }

  private _userId: number | undefined;
  private _username: string | undefined;
  private _email: string | undefined;
  private _roles: string[] | undefined;
  private subscriptions: SubSink = new SubSink();
  loggedUserDetails: User | undefined;

  ngOnInit(): void {
    if (this.tokenStorageService.isUserAuthenticated()) {
      const authPrincipal = this.tokenStorageService.readAuthPrincipalIfPresent();
      this._userId = authPrincipal.id;
      this._username = authPrincipal.username;
      this._email = authPrincipal.email;
      this._roles = authPrincipal.roles;
      this.readLoggedUserDetails();
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  readLoggedUserDetails() {
    this.subscriptions.add(
      this.userDetailsService.readLoggedUserDetails()
      .subscribe(
        response => this.loggedUserDetails = response,
        error => console.log(error)));
  }

  public get userId(): number | undefined { return this._userId; }
  public get username(): string | undefined { return this._username; }
  public get email(): string | undefined { return this._email; }
  public get roles(): string[] | undefined { return this._roles; }
}
