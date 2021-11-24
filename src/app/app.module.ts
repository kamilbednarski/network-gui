import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './core/top-bar/top-bar.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { FooterComponent } from './core/footer/footer.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostService } from './services/post/post.service';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentAddComponent } from './comment/comment-add/comment-add.component';
import { CommentService } from './services/comment/comment.service';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    FooterComponent,
    PostDetailsComponent,
    CommentListComponent,
    CommentAddComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
