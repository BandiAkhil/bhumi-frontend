import { Component, OnInit } from '@angular/core';
import { PostService } from '@src/app/core/services/post.service';
import { IshaEventService } from '@src/app/core/services/isha-event.service';
import { Post } from '@src/app/core/models/post';
import { IshaEvent } from '@src/app/core/models/ishaEvent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  ishaEvents: IshaEvent[] = [];

  constructor(private postService: PostService, private ishaEventService: IshaEventService) { }

  ngOnInit(): void {
    this.postService.getPosts(5).subscribe(posts => this.posts = posts);
    this.ishaEventService.getIshaEvents(4).subscribe(ishaEvents => this.ishaEvents = ishaEvents);
  }

}
