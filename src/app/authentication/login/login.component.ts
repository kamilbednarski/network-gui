import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { LoginService } from '../../services/authentication/login.service';
import { TokenStorageService } from '../../services/authentication/token-storage.service';
import { Router } from '@angular/router';

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
    private loginService: LoginService,
    private tokenStorageService: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loginUser(loginForm: FormGroup): void {
    let username: string = loginForm.get('username')?.value;
    let password: string = loginForm.get('password')?.value;
    this.subscriptions.add(
      this.loginService
        .login(username, password)
        .subscribe(
          response => {
            this.tokenStorageService.saveToken(response.token);
            this.tokenStorageService.saveUser(response);
            this.roles = this.tokenStorageService.getUser().roles;
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.redirectToProfilePage(); // TODO: change to personalized feed
          },
          error => {
            this.errorMessage = error.error.message;
            this.isLoginFailed = true;
          }
        )
    );
  }

  redirectToProfilePage(): void {
    this.router.navigate(['/profile']);
  }

  // TODO: is it needed?
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
