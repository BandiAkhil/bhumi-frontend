import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '@src/app/core/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'api/admin/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.baseUrl.replace('admin/', '')}`);
  }

  getPostById(id: number | string) {
    return this.http.get<Post>(`${this.baseUrl.replace('admin/', '')}/${id}`);
  }

  createPost(data: Post) {
    return this.http.post<Post>(`${this.baseUrl}`, data);
  }

  updatePost(data: Post, id: number | string) {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, data);
  }

  deletePost(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
