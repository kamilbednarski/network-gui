import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-registration-to-confirm',
  templateUrl: './registration-to-confirm.component.html',
  styleUrls: ['./registration-to-confirm.component.sass']
})
export class RegistrationToConfirmComponent implements OnInit {

  constructor(
    private readonly tokenStorageService: TokenStorageService,
    private readonly router: Router) { }

  ngOnInit(): void {
    if (this.isUserLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  public isUserLoggedIn(): boolean {
    return this.tokenStorageService.isUserAuthenticated();
  }
}
