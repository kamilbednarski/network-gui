import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { PostListComponent } from './post-list/post-list.component';
import { FooterComponent } from './footer/footer.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostService } from './post.service';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:postId', component: PostDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    FooterComponent,
    PostDetailsComponent,
    CommentListComponent,
    CommentAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
