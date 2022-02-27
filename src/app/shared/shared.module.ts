import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './app-frame/top-bar/top-bar.component';
import { FooterComponent } from './app-frame/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDateDetailsComponent } from './post-date-details/post-date-details.component';


@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
    PostDateDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    TopBarComponent,
    FooterComponent,
    PostDateDetailsComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
