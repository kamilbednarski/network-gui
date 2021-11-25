import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();
  registrationForm: FormGroup = new FormGroup({});

  constructor(
    private readonly registrationService: RegistrationService,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstName:
          [
            '',
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50)
            ]
          ],
        lastName:
          [
            '',
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50)
            ]
          ],
        email:
          [
            '',
            [
              Validators.required,
              Validators.minLength(7),
              Validators.maxLength(255)
            ]
          ],
        username:
          [
            '',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30)
            ]
          ],
        password:
          [
            '',
            [
              Validators.required,
              Validators.minLength(12),
              Validators.maxLength(128)
            ]
          ],
        passwordConfirmation:
          [
            '',
            [
              Validators.required,
              Validators.minLength(12),
              Validators.maxLength(128)
            ]
          ]
      }
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  registerUser(registrationForm: FormGroup): void {
    let firstName: string = registrationForm.get('firstName')?.value;
    let lastName: string = registrationForm.get('lastName')?.value;
    let email: string = registrationForm.get('email')?.value;
    let username: string = registrationForm.get('username')?.value;
    let password: string = registrationForm.get('password')?.value;
    let passwordConfirmation: string = registrationForm.get('passwordConfirmation')?.value;

    //TODO: implement form validation
    console.log(firstName);
    console.log(lastName);
    this.isEmailFormatValid(email);
    this.isUsernameValid(username);
    this.isPasswordFormatValid(password);
    console.log(passwordConfirmation);

    this.subscriptions.add(
      this.registrationService.registerUser(
        {
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "username": username,
          "password": password
        })
        .subscribe(
          response => console.log(response),
          error => console.error(error)));
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

  get firstName() { return this.registrationForm.get('firstName'); }
  get lastName() { return this.registrationForm.get('lastName'); }
  get email() { return this.registrationForm.get('email'); }
  get username() { return this.registrationForm.get('username'); }
  get password() { return this.registrationForm.get('password'); }
  get passwordConfirmation() { return this.registrationForm.get('passwordConfirmation'); }
}
