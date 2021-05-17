import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { Comment } from 'src/app/core/models/comment';
import { CommentService } from 'src/app/core/services/comment.service';
import { VoteService } from 'src/app/core/services/vote.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { NotifierService } from 'angular-notifier';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  postItem: Post;
  comments: Comment[] = [];
  voteCount: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private voteService: VoteService,
    //private notifierService: NotifierService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getPostItem(params.get('id'));
      this.getComments(params.get('id'));
      this.getVoteCount(params.get('id'));
    });
  }

  getPostItem(id: string) {
    this.postService.getPostById(id)
      .subscribe(item => {
        this.postItem = item;
      }, () => {
        this.router.navigate(['/posts']).then(() => {
          //this.notifierService.notify('warning', 'The news item does not exist.');
        });
      });
  }

  getVoteCount(id: string) {
    this.voteService.getPostVoteCount(id).subscribe(voteCount => this.voteCount = voteCount);
  }

  getComments(id: string) {
    this.commentService.getComments(id).subscribe(comments => this.comments = comments);
  }

  get content() {
    // return this.sanitizer.sanitize(SecurityContext.HTML, this.newsItem.content);
    return this.sanitizer.bypassSecurityTrustHtml(this.postItem.body);
  }
}
