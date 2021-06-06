import { Component, Input } from '@angular/core';
import { Video } from '@src/app/core/models/video';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent {
  @Input() videosList: Video[];
}
