import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumItemComponent } from './forum-item/forum-item.component';
import { ForumsComponent } from './forums.component';

const routes: Routes = [
  {
    path: '',
    component: ForumsComponent
  },
  {
    path: ':id',
    component: ForumItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
