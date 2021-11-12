import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    this.tokenStorageService.signOut();
  }

  public isUserLoggedIn(): boolean {
    return this.tokenStorageService.isUserLoggedIn();
  }
}
