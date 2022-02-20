import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/authentication/services/login.service';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  constructor(
    private readonly loginService: LoginService,
    private readonly tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.loginService.logOut();
  }

  isUserLoggedIn(): boolean {
    return this.tokenStorageService.isUserAuthenticated();
  }

  toggleNavbarButton(): void {
    document.getElementById('navbar-toggler-button')?.click();
  }
}
