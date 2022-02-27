import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserFullNameComponent } from './components/user-full-name/user-full-name.component';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { UserDetailsService } from './services/user-details.service';
import { UserActivityPostsTabComponent } from './components/user-activity-posts-tab/user-activity-posts-tab.component';
import { UserActivityFollowersTabComponent } from './components/user-activity-followers-tab/user-activity-followers-tab.component';
import { UserActivityFollowingTabComponent } from './components/user-activity-following-tab/user-activity-following-tab.component';
import { UserActivityLikesTabComponent } from './components/user-activity-likes-tab/user-activity-likes-tab.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserFullNameComponent,
    UserActivityComponent,
    UserActivityPostsTabComponent,
    UserActivityFollowersTabComponent,
    UserActivityFollowingTabComponent,
    UserActivityLikesTabComponent
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
