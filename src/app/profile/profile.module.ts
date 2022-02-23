import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserFullNameComponent } from './components/user-full-name/user-full-name.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserFullNameComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserProfileComponent,
    UserFullNameComponent
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
