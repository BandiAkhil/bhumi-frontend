import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumAnswersComponent } from './forum-answers.component';

const routes: Routes = [{
  path: '',
  component: ForumAnswersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumAnswersRoutingModule { }
