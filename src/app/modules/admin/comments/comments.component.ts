import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '@src/app/core/models/comment';
import { Post } from '@src/app/core/models/post';
import { User } from '@src/app/core/models/user';
import { CommentService } from '@src/app/core/services/comment.service';
import { PostService } from '@src/app/core/services/post.service';
import { UserService } from '@src/app/core/services/user.service';
import { VoteService } from '@src/app/core/services/vote.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';
import { HtmlToTextPipe } from '@src/app/shared/pipes/html-to-text.pipe';
import { TruncatePipe } from '@src/app/shared/pipes/truncate.pipe';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  votes: number[] = [];
  posts: string[] = [];
  users: string[] = [];
  columnDefs = [
    {
      key: 'text',
      format: t => this.formatCommentText(t, 100)
    },
    {
      key: 'post',
      format: t => this.getCommentPostTitle(t)
    },
    {
      key: 'user',
      format: u => this.getCommentUsername(u)
    },
    {
      key: 'id',
      format: l => this.getCommentLikes(l)
    }
  ];


  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private userService: UserService,
    private voteService: VoteService,
    private modalService: NgbModal,
    private htmlToTextPipe: HtmlToTextPipe,
    private truncatePipe: TruncatePipe
    //private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getAllComments().subscribe(
      comments => {
        this.comments = comments;
        for(let i = 0; i < this.comments.length; i++) {
          this.postService.getPostById(this.comments[i].postId).subscribe((post: Post) => {this.posts.splice(i, 0, post.title);});
          this.userService.getUserById(this.comments[i].userId).subscribe((user: User) => {this.users.splice(i, 0, user.username);});
          this.voteService.getCommentVoteCount(this.comments[i].id).subscribe((voteCount: number) => {this.votes.splice(i, 0, voteCount);});
        };
      }
    );
  }

  getCommentLikes(commentid: number) {
    return this.votes[commentid - 1];
  }

  getCommentPostTitle(postid: number) {
    return this.posts[postid - 1];
  }

  getCommentUsername(userid: number) {
    return this.users[userid - 1];
  }

  onDeleteComment(comment: Comment) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this comment';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteComment(comment.postId, comment.id);
    });
  }

  editComment(comment: Comment) {
    //this.notifierService.notify('success', 'Cannot edit comments here! Go to the comment location to edit your own comment.');
  }

  deleteComment(postId: number, id: number) {
    this.commentService.deleteComment(postId, id).subscribe(
      () => {
        //this.notifierService.notify('success', 'Activity deleted successfully');
        this.comments = this.comments.filter(a => a.id !== id);
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
