import { Component, Input } from '@angular/core';
import { Post } from '@src/app/core/models/post'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  @Input() postsList: Post[];
}
