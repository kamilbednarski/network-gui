import { ModuleWithProviders, NgModule } from '@angular/core';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './services/post.service';
import { CommentModule } from '../comment/comment.module';
import { PostDateDetailsComponent } from './components/post-date-details/post-date-details.component';
import { LikeButtonPostDetailsComponent } from './components/buttons/like-button-post-details/like-button-post-details.component';
import { ProfileModule } from '../profile/profile.module';



@NgModule({
  declarations: [
    PostDetailsComponent,
    PostListComponent,
    PostDateDetailsComponent,
    LikeButtonPostDetailsComponent
  ],
  imports: [
    SharedModule,
    CommentModule,
    ProfileModule
  ],
  exports: [
    PostDetailsComponent,
    PostListComponent
  ]
})
export class PostModule {

  static forRoot(): ModuleWithProviders<PostModule> {
    return {
      ngModule: PostModule,
      providers: [
        PostService
      ]
    }
  }
}
