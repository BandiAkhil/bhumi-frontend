import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '@src/app/core/models/post';
import { PostService } from '@src/app/core/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postService.getPostById(params.get('id')).subscribe(post => {
        this.post = post;
      });
    });
  }

  onSave(data: FormData) {
    this.postService.updatePost(data, this.post.id).subscribe(() => {
      this.router.navigate(['/admin/posts']).then(() => {
        //this.notifierService.notify('success', 'News item successfully updated.');
      });
    });
  }

  onCancel() {
    this.router.navigate(['/admin/posts']);
  }

}
