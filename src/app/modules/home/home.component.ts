import { Component, OnInit } from '@angular/core';
import { PostService } from '@src/app/core/services/post.service';
import { Post } from '@src/app/core/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(-1).subscribe(posts => this.posts = posts);
  }

}
