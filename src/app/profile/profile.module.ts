import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class ProfileModule {
  static forRoot(): ModuleWithProviders<ProfileModule> {
    return {
      ngModule: ProfileModule,
      providers: []
    }
  }
}
