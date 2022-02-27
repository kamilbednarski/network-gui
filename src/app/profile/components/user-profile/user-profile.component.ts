import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';
import { SubSink } from 'subsink';
import { UserPrivateDetails } from '../../models/user-private-details.model';
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

  userId: number | undefined;
  username: string | undefined;
  email: string | undefined;
  roles: string[] | undefined;
  subscriptions: SubSink = new SubSink();
  loggedUserDetails: UserPrivateDetails | undefined;

  ngOnInit(): void {
    if (this.tokenStorageService.isUserAuthenticated()) {
      const authPrincipal =
        this.tokenStorageService.readAuthPrincipalIfPresent();
      this.userId = authPrincipal.id;
      this.username = authPrincipal.username;
      this.email = authPrincipal.email;
      this.readLoggedUserDetails();
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  readLoggedUserDetails(): void {
    this.subscriptions.add(
      this.userDetailsService.readLoggedUserDetails()
        .subscribe(
          response => this.loggedUserDetails = response,
          error => console.log(error)
        )
    );
  }
}
