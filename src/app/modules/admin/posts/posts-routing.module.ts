import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'add',
    component: AddPostComponent
  },
  {
    path: ':id/edit',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
