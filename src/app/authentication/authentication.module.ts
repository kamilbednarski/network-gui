import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './services/login.service';
import { RegistrationService } from './services/registration.service';
import { TokenStorageService } from './services/token-storage.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
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
