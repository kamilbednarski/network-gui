import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();
  loginForm: FormGroup = new FormGroup({});
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private readonly loginService: LoginService,
    private readonly tokenStorageService: TokenStorageService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
    this.checkIfUserAuthenticated();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private checkIfUserAuthenticated(): void {
    if (this.tokenStorageService.readToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.readAuthPrincipalIfPresent().roles;
    }
  }

  loginUser(): void {
    const username: string = this.username?.value;
    const password: string = this.password?.value;
    this.subscriptions.add(
      this.loginService
        .login(username, password)
        .subscribe(
          response => this.saveAuthDataAndRedirectToUserPage(response),
          error => this.handleLoginError(error)
        )
    );
  }

  private saveAuthDataAndRedirectToUserPage(response: any): void {
    this.tokenStorageService.saveAuthToken(response.token);
    this.tokenStorageService.saveAuthPrincipal(response);
    this.roles = this.tokenStorageService.readAuthPrincipalIfPresent().roles;
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.redirectToProfilePage();
  }

  private handleLoginError(error: any): void {
    this.errorMessage = error.error.message;
    this.isLoginFailed = true;
    if (this.isAccountRegistrationNotConfirmed()) {
      this.router.navigate(['/register/unconfirmed']);
    }
  }

  private isAccountRegistrationNotConfirmed() {
    return this.errorMessage ===
      "User registration for given account was not confirmed.";
  }

  private redirectToProfilePage(): void {
    this.router.navigate(['/profile']);
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
