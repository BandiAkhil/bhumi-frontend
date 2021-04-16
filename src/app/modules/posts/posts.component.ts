import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  paginationPage = 0;
  paginationSize = 6;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
}
