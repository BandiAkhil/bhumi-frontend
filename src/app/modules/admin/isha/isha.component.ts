import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from '@src/app/core/models/video';
import { VideoService } from '@src/app/core/services/video.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-isha',
  templateUrl: './isha.component.html',
  styleUrls: ['./isha.component.scss']
})
export class IshaComponent implements OnInit {

  quote: string;
  videoUrls: string[] = [];

  constructor(private videoService: VideoService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getQuote();
    this.getVideos();
  }

  getQuote() {
    return this.videoService.getQuote();
  }

  setQuote(quote: string) {
    this.quote = quote;
  }

  getVideos() {
    return this.videoService.getIshaVideos();
  }

  addVideo(video: Video) {
    this.videoService.addVideo(video);
  }

  onDeleteVideo(videoUrl: Video) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this Video';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteVideo(videoUrl.id);
    });
  }

  deleteVideo(videoId) {
    this.videoService.deleteVideo(videoId);
  }

}
