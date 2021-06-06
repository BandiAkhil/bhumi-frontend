import { NgModule } from '@angular/core';

import { ForumAnswersRoutingModule } from './forum-answers-routing.module';
import { ForumAnswersComponent } from './forum-answers.component';
import { SharedModule } from '@src/app/shared/shared.module';


@NgModule({
  declarations: [
    ForumAnswersComponent
  ],
  imports: [
    SharedModule,
    ForumAnswersRoutingModule
  ]
})
export class ForumAnswersModule { }
