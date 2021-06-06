import { Component, OnInit } from '@angular/core';
import { Video } from '@src/app/core/models/video';
import { VideoService } from '@src/app/core/services/video.service';

@Component({
  selector: 'app-isha',
  templateUrl: './isha.component.html',
  styleUrls: ['./isha.component.scss']
})
export class IshaComponent implements OnInit {
  quote: string;
  videoUrls: Video[] = [];
  paginationPage = 0;
  paginationSize = 9;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.getVideos();
    this.getQuote();
    console.log(this.videoUrls);
  }

  getQuote() {
    this.quote = this.videoService.getQuote();
  }

  getVideos() {
    this.videoService.getIshaVideos().subscribe(videoUrls => this.videoUrls = videoUrls);
  }

}
