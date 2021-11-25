import { ModuleWithProviders, NgModule } from '@angular/core';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './services/post.service';
import { CommentModule } from '../comment/comment.module';



@NgModule({
  declarations: [
    PostDetailsComponent,
    PostListComponent
  ],
  imports: [
    SharedModule,
    CommentModule
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
