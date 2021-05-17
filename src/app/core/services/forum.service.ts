import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../models/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  baseUrl = 'api/forums';

  constructor(private http: HttpClient) { }

  getForums() {
    return this.http.get<Forum[]>(`${this.baseUrl}`);
  }

  getPostById(id: number | string) {
    return this.http.get<Forum>(`${this.baseUrl}/${id}`);
  }

  createPost(data: FormData) {
    return this.http.post<Forum>(`${this.baseUrl}`, data);
  }

  updatePost(data: FormData, id: number | string) {
    return this.http.put<Forum>(`${this.baseUrl}/${id}`, data);
  }

  deletePost(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
