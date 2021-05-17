import { Component, Input, OnInit } from '@angular/core';
import { Forum } from '@src/app/core/models/forum';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.scss']
})
export class ForumsListComponent {
  @Input() forumList: Forum[];
}
