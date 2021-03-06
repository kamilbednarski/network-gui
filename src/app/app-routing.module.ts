import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { PostDetailsComponent } from './post/components/post-details/post-details.component';
import { RegistrationComponent } from './authentication/components/registration/registration.component';
import { UserProfileComponent } from './profile/components/user-profile/user-profile.component';
import { PostListComponent } from './post/components/post-list/post-list.component';
import { RegistrationToConfirmComponent } from './authentication/components/registration-to-confirm/registration-to-confirm.component';
import { RegistrationNotConfirmedComponent } from './authentication/components/registration-not-confirmed/registration-not-confirmed.component';

const ROUTES: Routes = [
  { path: '', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'post/:postId', component: PostDetailsComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'register/confirm', component: RegistrationToConfirmComponent },
  { path: 'register/unconfirmed', component: RegistrationNotConfirmedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
