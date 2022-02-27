import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserFullNameComponent } from './components/user-full-name/user-full-name.component';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { UserDetailsService } from './services/user-details.service';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserFullNameComponent,
    UserActivityComponent
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
      providers: [
        UserDetailsService
      ]
    }
  }
}
