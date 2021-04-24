import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumAnswersRoutingModule } from './forum-answers-routing.module';
import { ForumAnswersComponent } from './forum-answers.component';


@NgModule({
  declarations: [
    ForumAnswersComponent
  ],
  imports: [
    CommonModule,
    ForumAnswersRoutingModule
  ]
})
export class ForumAnswersModule { }
