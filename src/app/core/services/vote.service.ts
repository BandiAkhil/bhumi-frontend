import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vote } from '@src/app/core/models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  baseUrl = 'api';

  constructor(private http: HttpClient) {}

  getPostVoteCount(postId: number | string) {
    return this.http.get<number>(`${this.baseUrl}/posts/${postId}/votes/count`);
  }

  getCommentVoteCount(commentId: number | string) {
    return this.http.get<number>(`${this.baseUrl}/comments/${commentId}/votes/count`);
  }

  getVotesByUser(userId: number | string) {
    return this.http.get<Vote[]>(`${this.baseUrl}/user/${userId}/votes`);
  }

  addVote(postId: number | string, data: FormData) {
    return this.http.post<Vote>(`${this.baseUrl}/votes`, data);
  }

  deleteVote(postId: number | string, voteId: number | string) {
    return this.http.delete<void>(`${this.baseUrl}/votes/${voteId}`);
  }
}
