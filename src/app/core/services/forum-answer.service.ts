import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForumAnswer } from '../models/forumAnswer';

@Injectable({
  providedIn: 'root'
})
export class ForumAnswerService {

  baseUrl = 'api/forums/{forumId}/forum-answers';

  constructor(private http: HttpClient) { }

  getAllForumAnswers() {
    return this.http.get<ForumAnswer[]>(`${this.baseUrl.replace('forums/{forumId}', 'admin')}`);
  }

  getForumAnswers(forumId: number | string) {
    return this.http.get<ForumAnswer[]>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}`);
  }

  getForumAnswerById(forumId: number | string, id: number | string) {
    return this.http.get<ForumAnswer>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}/${id}`);
  }

  createForumAnswer(forumId: number | string, data: FormData) {
    return this.http.post<ForumAnswer>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}`, data);
  }

  updateForumAnswer(forumId: number | string, data: FormData, id: number | string) {
    return this.http.put<ForumAnswer>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}/${id}`, data);
  }

  deleteForumAnswer(forumId: number | string, id: number) {
    return this.http.delete<void>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}/${id}`);
  }
}
