import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './services/login.service';
import { RegistrationService } from './services/registration.service';
import { TokenStorageService } from './services/token-storage.service';
import { AuthFormLogoComponent } from './components/auth-form-logo/auth-form-logo.component';
import { RegistrationToConfirmComponent } from './components/registration-to-confirm/registration-to-confirm.component';
import { RegistrationNotConfirmedComponent } from './components/registration-not-confirmed/registration-not-confirmed.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthFormLogoComponent,
    RegistrationToConfirmComponent,
    RegistrationNotConfirmedComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    RegistrationToConfirmComponent,
    RegistrationNotConfirmedComponent
  ]
})
export class AuthenticationModule {
  static forRoot(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [
        LoginService,
        RegistrationService,
        TokenStorageService
      ]
    }
  }
}
