import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder) { }
  //  [disabled]="!loginForm.valid"
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loginUser(loginForm: FormGroup): void {
    let username: string = loginForm.get('username')?.value;
    console.log(username);
    let password: string = loginForm.get('password')?.value;
    console.log(password);
    this.subscriptions.add(
      this.loginService
        .loginUser(
          {
            username: username,
            password: password
          })
        .subscribe(
          response => console.log(response),
          error => console.error(error)));
  }

  get firstName() { return this.loginForm.get('username'); }
  get lastName() { return this.loginForm.get('password'); }
}
