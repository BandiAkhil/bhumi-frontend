import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '@src/app/modules/posts/posts.component';
import { PostItemComponent } from '@src/app/modules/posts/post-item/post-item.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: ':id',
    component: PostItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
