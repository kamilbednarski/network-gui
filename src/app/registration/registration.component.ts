import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();
  registrationForm: FormGroup = new FormGroup({});

  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  registerUser(registrationForm: FormGroup): void {
    let username: string = registrationForm.get('username')?.value;
    let email: string = registrationForm.get('email')?.value;
    let password: string = registrationForm.get('password')?.value;
    this.isUsernameValid(username);
    this.isEmailFormatValid(email);
    this.isPasswordFormatValid(password);
  }

  isUsernameValid(username: string) {
    let isValid: boolean = false;
    this.subscriptions.add(
      this.registrationService
        .isUsernameValid(username)
        .subscribe(
          response => console.log(response),
          error => console.log(error)));
  }

  isEmailFormatValid(email: string) {
    let isValid: boolean = false;
    this.subscriptions.add(
      this.registrationService
        .isEmailFormatValid(email)
        .subscribe(
          response => console.log(response),
          error => console.log(error)));
  }

  isPasswordFormatValid(password: string) {
    let isValid: boolean = false;
    this.subscriptions.add(
      this.registrationService
        .isPasswordFormatValid(password)
        .subscribe(
          response => console.log(response),
          error => console.log(error)));
  }
}
