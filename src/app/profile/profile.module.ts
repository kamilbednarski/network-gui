import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserActivityComponent } from './components/user-activity/user-activity.component';
import { UserDetailsService } from './services/user-details.service';
import { UserActivityPostsTabComponent } from './components/user-activity-posts-tab/user-activity-posts-tab.component';
import { UserActivityFollowersTabComponent } from './components/user-activity-followers-tab/user-activity-followers-tab.component';
import { UserActivityFollowingTabComponent } from './components/user-activity-following-tab/user-activity-following-tab.component';
import { UserActivityLikesTabComponent } from './components/user-activity-likes-tab/user-activity-likes-tab.component';
import { UserRelationshipService } from './services/user-relationship.service';


@NgModule({
  declarations: [
    UserProfileComponent,
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
    UserProfileComponent
  ]
})
export class ProfileModule {

  static forRoot(): ModuleWithProviders<ProfileModule> {
    return {
      ngModule: ProfileModule,
      providers: [
        UserDetailsService,
        UserRelationshipService
      ]
    }
  }
}
