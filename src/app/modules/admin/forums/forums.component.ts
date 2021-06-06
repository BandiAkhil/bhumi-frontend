import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Forum } from '@src/app/core/models/forum';
import { ForumService } from '@src/app/core/services/forum.service';
import { VoteService } from '@src/app/core/services/vote.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';
import { HtmlToTextPipe } from '@src/app/shared/pipes/html-to-text.pipe';
import { TruncatePipe } from '@src/app/shared/pipes/truncate.pipe';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

  forums: Forum[];
  votes: number[] = [];
  columnDefs = [
    {
      key: 'title',
      format: t => this.formatCommentText(t, 100)
    },
    {
      key: 'body',
      format: b => this.formatCommentText(b, 100)
    },
    {
      key: 'id',
      format: l => this.getForumLikes(l)
    }
  ];


  constructor(
    private forumService: ForumService,
    private voteService: VoteService,
    private modalService: NgbModal,
    private htmlToTextPipe: HtmlToTextPipe,
    private truncatePipe: TruncatePipe
    //private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getForums();
  }

  getForums() {
    this.forumService.getForums().subscribe(
      forums => {
        this.forums = forums;
        for(let i = 0; i < this.forums.length; i++) {
          this.voteService.getCommentVoteCount(this.forums[i].id).subscribe((voteCount: number) => {this.votes.splice(i, 0, voteCount)});
        };
      }
    );
  }

  getForumLikes(forumid: number) {
    return this.votes[forumid - 1];
  }

  onDeleteForum(forum: Forum) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this forum';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteForum(forum.id);
    });
  }

  editForum(forum: Forum) {
    //this.notifierService.notify('success', 'Cannot edit comments here! Go to the comment location to edit your own comment.');
  }

  deleteForum(id: number) {
    this.forumService.deleteForum(id).subscribe(
      () => {
        //this.notifierService.notify('success', 'Activity deleted successfully');
        this.forums = this.forums.filter(a => a.id !== id);
      },
      () => {
        //this.notifierService.notify('error', 'Could not delete activity, try again later.');
      }
    );
  }

  formatCommentText(body: string, limit: number) {
    const text = this.htmlToTextPipe.transform(body);
    return this.truncatePipe.transform(text, limit)
  }

}
