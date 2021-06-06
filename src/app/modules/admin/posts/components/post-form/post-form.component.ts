import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '@src/app/core/models/post';
import { Image } from '@src/app/core/models/image';
import { ImageService } from '@src/app/core/services/image.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() post: Post;
  @Output() save: EventEmitter<Post> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  mode: string;
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    uploadedImg: new FormControl()
  });
  submitted = false;

  constructor(
    private imageService: ImageService,
    //private notifierService: NotifierService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.post == undefined ? this.post = {id: null, title: null, body: null, date: null, imageUrl: null} : this.postForm.patchValue(this.post);
  }

  get f() { return this.postForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.postForm.invalid) {
      return;
    }

    this.post.title = this.postForm.value.title;
    this.post.body = this.postForm.value.body;
    this.post.imageUrl = this.postForm.value.uploadedImg;

    this.save.emit(this.post);
  }

  onCancel() {
    this.cancel.emit();
  }

  replaceImg(oldImg: Image, newImg: Image) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'existing image and replace with new image';

    modalRef.componentInstance.delete.subscribe(() => {
      this.imageService.deleteImg(oldImg.id);
      this.imageService.uploadImg(newImg).subscribe(img => {
        //this.notifierService.notify('default', 'The file has been deleted.');
        this.post.imageUrl = "img";
      });
    });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
