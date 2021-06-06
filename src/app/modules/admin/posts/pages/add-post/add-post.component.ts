import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@src/app/core/models/post';
import { PostService } from '@src/app/core/services/post.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(
    private postService: PostService,
    private router: Router,) {}
    //private notifierService: NotifierService) { }

  ngOnInit() {
  }

  onSave(data: Post) {
    this.postService.createPost(data).subscribe(() => {
      this.router.navigate(['/admin/posts']).then(() => {
        //this.notifierService.notify('success', 'News item successfully created.');
      });
    });
  }

  onCancel() {
    this.router.navigate(['/admin/posts']);
  }

}
