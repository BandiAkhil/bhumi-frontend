import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForumAnswer } from '../models/forumAnswer';

@Injectable({
  providedIn: 'root'
})
export class ForumAnswerService {

  baseUrl = 'api/forums/{forumId}/forum-answers';

  constructor(private http: HttpClient) { }

  getForums(forumId: number | string) {
    return this.http.get<ForumAnswer[]>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}`);
  }

  getPostById(forumId: number | string, id: number | string) {
    return this.http.get<ForumAnswer>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}/${id}`);
  }

  createPost(forumId: number | string, data: FormData) {
    return this.http.post<ForumAnswer>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}`, data);
  }

  updatePost(forumId: number | string, data: FormData, id: number | string) {
    return this.http.put<ForumAnswer>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}/${id}`, data);
  }

  deletePost(forumId: number | string, id: number) {
    return this.http.delete<void>(`${this.baseUrl.replace('{forumId}', `${forumId}`)}/${id}`);
  }
}
