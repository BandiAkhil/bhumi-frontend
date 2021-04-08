import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '@src/app/core/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = '/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(limit = -1) {
    if (limit === -1) {
      return this.http.get<Post[]>(this.baseUrl);
    }
    return this.http.get<Post[]>(this.baseUrl, {
      params: {limit: limit.toString()}
    });
  }

  getPostById(id: number | string) {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  createPost(data: FormData) {
    return this.http.post<Post>(this.baseUrl, data);
  }

  updatePost(data: FormData, id: number | string) {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, data);
  }

  deletePost(id: number) {
    return this.http.delete<Post>(`${this.baseUrl}/${id}`);
  }
}
