import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostFormComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
