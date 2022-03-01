import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './app-frame/top-bar/top-bar.component';
import { FooterComponent } from './app-frame/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDateDetailsComponent } from './components/post-date-details/post-date-details.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { PostCommentIconComponent } from './components/post-comment-icon/post-comment-icon.component';
import { PostLikeIconComponent } from './components/post-like-icon/post-like-icon.component';
import { PostShareIconComponent } from './components/post-share-icon/post-share-icon.component';
import { PostIconsComponent } from './components/post-icons/post-icons.component';
import { PostComponent } from './components/post/post.component';
import { UserFullNameComponent } from './components/user-full-name/user-full-name.component';


@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    PostDateDetailsComponent,
    PostContentComponent,
    PostCommentIconComponent,
    PostLikeIconComponent,
    PostShareIconComponent,
    PostIconsComponent,
    PostComponent,
    UserFullNameComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TopBarComponent,
    FooterComponent,
    PostDateDetailsComponent,
    UserFullNameComponent,
    PostComponent
  ]
})
export class SharedModule { }
