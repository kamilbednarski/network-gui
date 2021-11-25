import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentAddComponent } from './components/comment-add/comment-add.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CommentAddComponent,
    CommentListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CommentAddComponent,
    CommentListComponent
  ]
})
export class CommentModule {
  static forRoot(): ModuleWithProviders<CommentModule> {
    return {
      ngModule: CommentModule,
      providers: [] // shared services here
    }
  }
}
