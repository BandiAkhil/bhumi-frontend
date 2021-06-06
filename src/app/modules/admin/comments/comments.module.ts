import { NgModule } from '@angular/core';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { SharedModule } from '@src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    SharedModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
