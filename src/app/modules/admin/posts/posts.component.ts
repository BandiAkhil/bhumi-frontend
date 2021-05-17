import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@src/app/core/models/post';
import { PostService } from '@src/app/core/services/post.service';
import { HtmlToTextPipe } from 'src/app/shared/pipes/html-to-text.pipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';
//import { NotifierService } from 'angular-notifier';
import { VoteService } from '@src/app/core/services/vote.service';
import { TruncatePipe } from '@src/app/shared/pipes/truncate.pipe';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  articles: Post[];
  votes: Array<number> = [];
  columnDefs = [
    {
      key: 'body',
      format: b => this.formatArticleBody(b, 80)
    },
    {
      key: 'id',
      format: l => this.getArticleLikes(l)
    }
  ];


  constructor(
    private postService: PostService,
    private voteService: VoteService,
    private router: Router,
    private modalService: NgbModal,
    private htmlToTextPipe: HtmlToTextPipe,
    private truncatePipe: TruncatePipe
    //private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.postService.getPosts().subscribe(
      posts => {
        this.articles = posts;
        for(let i = 0; i < this.articles.length; i++) {
          this.voteService.getPostVoteCount(this.articles[i].id).subscribe((voteCount: number) => { this.votes.splice(i, 0, voteCount);});
        };
      }
    );
  }

  getArticleLikes(articleid: number) {
    return this.votes[articleid - 1];
  }

  onDeleteArticle(article: Post) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this Article';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteArticle(article.id);
    });
  }

  editArticle(article: Post) {
    this.router.navigate([`/admin/posts/${article.id}/edit`]);
  }

  deleteArticle(id: number) {
    this.postService.deletePost(id).subscribe(
      () => {
        //this.notifierService.notify('success', 'Activity deleted successfully');
        this.articles = this.articles.filter(a => a.id !== id);
      },
      () => {
        //this.notifierService.notify('error', 'Could not delete activity, try again later.');
      }
    );
  }

  formatArticleBody(body: string, limit: number) {
    const text = this.htmlToTextPipe.transform(body);
    return this.truncatePipe.transform(text, limit)
  }
}
