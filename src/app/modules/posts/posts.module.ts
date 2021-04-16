import { NgModule } from '@angular/core';
import { SharedModule } from '@src/app/shared/shared.module';
import { PostsRoutingModule } from '@src/app/modules/posts/posts-routing.module';
import { PostsComponent } from '@src/app/modules/posts/posts.component';
import { PostItemComponent } from '@src/app/modules/posts/post-item/post-item.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PostsComponent, PostItemComponent],
  imports: [
    SharedModule,
    PostsRoutingModule,
    NgbPaginationModule
  ]
})
export class PostsModule { }
