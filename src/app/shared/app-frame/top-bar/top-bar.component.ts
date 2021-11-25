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

  public logOut(): void {
    this.loginService.logOut();
  }

  public isUserLoggedIn(): boolean {
    return this.tokenStorageService.isUserLoggedIn();
  }

  public toggleNavbarButton(): void {
    document.getElementById('navbar-toggler-button')?.click();
  }
}
