import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  sections = [
    {
      name: 'Manage home',
      icon: 'home',
      linkTo: 'home',
    },
    {
      name: 'Manage articles',
      icon: 'article',
      linkTo: 'posts',
    },
    {
      name: 'Manage comments',
      icon: 'comment',
      linkTo: 'comments',
    },
    {
      name: 'Manage forums',
      icon: 'forum',
      linkTo: 'forums',
    },
    {
      name: 'Manage forum-answers',
      icon: 'question_answer',
      linkTo: 'forum-answers',
    },
    {
      name: 'Manage isha',
      icon: 'self_improvement',
      linkTo: 'isha',
    },
    {
      name: 'Manage users',
      icon: 'supervisor_account',
      linkTo: 'users',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
