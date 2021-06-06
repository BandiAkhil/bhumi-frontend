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

  getForumById(id: number | string) {
    return this.http.get<Forum>(`${this.baseUrl}/${id}`);
  }

  createForum(data: FormData) {
    return this.http.post<Forum>(`${this.baseUrl}`, data);
  }

  updateForum(data: FormData, id: number | string) {
    return this.http.put<Forum>(`${this.baseUrl}/${id}`, data);
  }

  deleteForum(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
