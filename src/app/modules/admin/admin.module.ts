import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { ForumsComponent } from './forums/forums.component';


@NgModule({
  declarations: [
    CommentsComponent,
    ForumsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
