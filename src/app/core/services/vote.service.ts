import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vote } from '@src/app/core/models/vote';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  baseUrl = environment.apiBaseUrl + 'posts';

  constructor(private http: HttpClient) {}

  getPostVoteCount(postId: number | string) {
    return this.http.get<number>(`${this.baseUrl}/${postId}/votes/count`);
  }

  getVotesByUser(postId: number | string) {
    return this.http.get<Vote[]>(`${this.baseUrl}/${postId}/votes`);
  }

  addVote(postId: number | string, data: FormData) {
    return this.http.post<Vote>(`${this.baseUrl}/${postId}/votes`, data);
  }

  deleteVote(postId: number | string, voteId: number | string) {
    return this.http.delete<void>(`${this.baseUrl}/${postId}/posts/${voteId}/delete`);
  }
}
