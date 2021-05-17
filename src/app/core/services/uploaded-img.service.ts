import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadedImg } from '../models/uploaded-img';

@Injectable({
  providedIn: 'root'
})
export class UploadedImgService {

  private baseUrl = '/api/uploaded-images';

  constructor(private http: HttpClient) { }

  uploadImg(img: UploadedImg) {
    return this.http.post<UploadedImg>(`${this.baseUrl}`, img);
  }

  deleteImg(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
