import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = '/api/images';

  constructor(private http: HttpClient) { }

  getPostImg(id: number | string) {
    return this.http.get<Image>(`${this.baseUrl}/post/${id}`);
  }

  getUserImg(id: number | string) {
    return this.http.get<Image>(`${this.baseUrl}/user/${id}`);
  }

  uploadImg(img: Image) {
    return this.http.post<Image>(`${this.baseUrl}`, img);
  }

  deleteImg(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
