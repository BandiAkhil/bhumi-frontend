import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = '/api/videos';
  quote: string;
  videoUrls: string[] = [];

  constructor(private http: HttpClient) { this.initIsha(); }

  initIsha() {
    this.quote = "The damage we cause to the environment is a consequence of how we are within ourselves. If we realize that maintaining our inner climate is in our hands, we will understand that taking action for the environment is also in our hands.";
  }

  getQuote() {
    return this.quote;
  }

  setQuote(quote: string) {
    this.quote = quote;
  }

  getAllVideos() {
    return this.http.get<Video[]>(`${this.baseUrl}`);
  }

  getIshaVideos() {
    return this.http.get<Video[]>(`${this.baseUrl}/isha`);
  }

  getHomeVideos() {
    return this.http.get<Video[]>(`${this.baseUrl}/home`);
  }

  addVideo(video: Video) {
    return this.http.post<Video>(`${this.baseUrl}`, video);
  }

  deleteVideo(id: number | string) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
