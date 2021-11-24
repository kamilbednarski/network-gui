import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/authentication/login.service';
import { TokenStorageService } from '../../services/authentication/token-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public isUserLoggedIn(): boolean {
    return this.tokenStorageService.isUserLoggedIn();
  }
}
