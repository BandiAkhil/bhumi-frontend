import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sections = [
    {
      name: 'Manage posts',
      icon: 'view_compact',
      linkTo: 'posts',
    },
    {
      name: 'Manage comments',
      icon: 'school',
      linkTo: 'comments',
    },
    {
      name: 'Manage users',
      icon: 'supervisor_account',
      linkTo: 'users',
    },
    {
      name: 'Manage forums',
      icon: 'event_note',
      linkTo: 'forums',
    },
    {
      name: 'Manage forum-answers',
      icon: 'monetization_on',
      linkTo: 'forum-answers',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
