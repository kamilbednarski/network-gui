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

  registerUser(registrationForm: FormGroup): void {
    let username: string = registrationForm.get('username')?.value;
    this.isUsernameValid(username);
  }

  isUsernameValid(username: string) {
    let isUsernameValid: boolean = false;
    this.subscriptions.add(
      this.registrationService
        .isUsernameValid(username)
        .subscribe(
          response => console.log(response),
          error => console.log(error)));
  }
}
