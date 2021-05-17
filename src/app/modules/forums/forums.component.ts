import { Component, OnInit } from '@angular/core';
import { Forum } from '@src/app/core/models/forum';
import { ForumService } from '@src/app/core/services/forum.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

  forums: Forum[] = [];
  paginationPage = 0;
  paginationSize = 6;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.getForums();
  }

  getForums() {
    this.forumService.getForums()
      .subscribe(forums => this.forums = forums);
  }

}
