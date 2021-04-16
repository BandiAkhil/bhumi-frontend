import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Comment } from '@src/app/core/models/comment';
import { environment } from '@src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.apiBaseUrl + 'posts';

  constructor(private http: HttpClient) {}

  getComments(postId: number | string) {
    return this.http.get<Comment[]>(`${this.baseUrl}/${postId}/comments`);
  }

  createComment(postId: number | string, data: FormData) {
    return this.http.post<Comment>(`${this.baseUrl}/${postId}/comments`, data);
  }

  updateComment(data: FormData, postId: number | string, commentId: number | string) {
    return this.http.put<Comment>(`${this.baseUrl}/${postId}/comments/${commentId}/update/`, data);
  }

  deleteComment(postId: number | string, commentId: number | string) {
    return this.http.delete<void>(`${this.baseUrl}/${postId}/comments/${commentId}/delete`);
  }
}
