import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SubSink } from "subsink";
import { RegistrationService } from "../../services/registration.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.sass"]
})
export class RegistrationComponent implements OnInit {

  private subscriptions: SubSink = new SubSink();
  registrationForm: FormGroup = new FormGroup({});

  constructor(
    private readonly registrationService: RegistrationService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstName:
          [
            "",
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50)
            ]
          ],
        lastName:
          [
            "",
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50)
            ]
          ],
        email:
          [
            "",
            [
              Validators.required,
              Validators.minLength(7),
              Validators.maxLength(255)
            ]
          ],
        username:
          [
            "",
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30)
            ]
          ],
        password:
          [
            "",
            [
              Validators.required,
              Validators.minLength(12),
              Validators.maxLength(128)
            ]
          ],
        passwordConfirmation:
          [
            "",
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
    let firstName: string = registrationForm.get("firstName")?.value;
    let lastName: string = registrationForm.get("lastName")?.value;
    let email: string = registrationForm.get("email")?.value;
    let username: string = registrationForm.get("username")?.value;
    let password: string = registrationForm.get("password")?.value;
    let passwordConfirmation: string = registrationForm.get("passwordConfirmation")?.value;

    this.subscriptions.add(
      this.registrationService.registerUser({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "username": username,
        "password": password,
        "passwordConfirmation": passwordConfirmation
      }).subscribe(response => {
        console.log(response);
        //TODO: implement reaction to errors during server side validation
        if (response.status === 201) {
          this.router.navigate(["/register/confirm"]);
        }
      })
    );
  }

  get firstNameInput() { return this.registrationForm.get("firstName"); }
  get lastNameInput() { return this.registrationForm.get("lastName"); }
  get emailInput() { return this.registrationForm.get("email"); }
  get usernameInput() { return this.registrationForm.get("username"); }
  get passwordInput() { return this.registrationForm.get("password"); }
  get passwordConfirmationInput() { return this.registrationForm.get("passwordConfirmation"); }
}
