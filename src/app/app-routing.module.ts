import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'post/:postId', component: PostDetailsComponent },
  { path: 'profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
