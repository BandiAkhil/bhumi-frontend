import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Forum } from '@src/app/core/models/forum';
import { ForumAnswer } from '@src/app/core/models/forumAnswer';
import { ForumAnswerService } from '@src/app/core/services/forum-answer.service';
import { ForumService } from '@src/app/core/services/forum.service';
import { VoteService } from '@src/app/core/services/vote.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';
import { HtmlToTextPipe } from '@src/app/shared/pipes/html-to-text.pipe';
import { TruncatePipe } from '@src/app/shared/pipes/truncate.pipe';

@Component({
  selector: 'app-forum-answers',
  templateUrl: './forum-answers.component.html',
  styleUrls: ['./forum-answers.component.scss']
})
export class ForumAnswersComponent implements OnInit {

  forumAnswers: ForumAnswer[];
  forumTitles: string[] = [];
  votes: number[] = [];
  columnDefs = [
    {
      key: 'forumId',
      format: f => this.getForumTitle(f, 100)
    },
    {
      key: 'body',
      format: b => this.formatText(b, 100)
    },
    {
      key: 'id',
      format: l => this.getForumAnswerLikes(l)
    }
  ];


  constructor(
    private forumService: ForumService,
    private forumAnswerService: ForumAnswerService,
    private voteService: VoteService,
    private modalService: NgbModal,
    private htmlToTextPipe: HtmlToTextPipe,
    private truncatePipe: TruncatePipe
    //private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getForumAnswers();
  }

  getForumAnswers() {
    this.forumAnswerService.getAllForumAnswers().subscribe(
      forumAnswers => {
        this.forumAnswers = forumAnswers;
        for(let i = 0; i < this.forumAnswers.length; i++) {
          this.forumService.getForumById(this.forumAnswers[i].forumId).subscribe((forum: Forum) => {this.forumTitles.splice(i, 0, forum.title);});
          this.voteService.getCommentVoteCount(this.forumAnswers[i].id).subscribe((voteCount: number) => {this.votes.splice(i, 0, voteCount);});
        };
      }
    );
  }

  getForumAnswerLikes(forumAnswerid: number) {
    return this.votes[forumAnswerid - 1];
  }

  getForumTitle(forumid: number, limit: number) {
    return this.forumTitles[forumid - 1] != undefined ? this.formatText(this.forumTitles[forumid - 1], limit): undefined;
  }

  onDeleteForumAnswer(forumAnswer: ForumAnswer) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this forum answer';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteForumAnswer(forumAnswer.forumId, forumAnswer.id);
    });
  }

  editForumAnswer(forumAnswer: ForumAnswer) {
    //this.notifierService.notify('success', 'Cannot edit comments here! Go to the comment location to edit your own comment.');
  }

  deleteForumAnswer(forumid: number, id: number) {
    this.forumAnswerService.deleteForumAnswer(forumid, id).subscribe(
      () => {
        //this.notifierService.notify('success', 'Activity deleted successfully');
        this.forumAnswers = this.forumAnswers.filter(a => a.id !== id);
      },
      () => {
        //this.notifierService.notify('error', 'Could not delete activity, try again later.');
      }
    );
  }

  formatText(body: string, limit: number) {
    const text = this.htmlToTextPipe.transform(body);
    return this.truncatePipe.transform(text, limit)
  }

}
