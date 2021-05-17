import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '@src/app/core/models/post';
import { UploadedImg } from '@src/app/core/models/uploaded-img';
import { UploadedImgService } from '@src/app/core/services/uploaded-img.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() post: Post;
  @Output() save: EventEmitter<FormData> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  mode: string;
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    uploadedImg: new FormControl()
  });
  submitted = false;

  constructor(
    private uploadedImgService: UploadedImgService,
    //private notifierService: NotifierService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.postForm.patchValue(this.post);
  }

  get f() { return this.postForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.postForm.invalid) {
      return;
    }

    const data = new FormData();
    data.append('title', this.postForm.value.title);
    data.append('body', this.postForm.value.body);

    this.postForm.value.uploadedImg(img => {
      data.append('img', img);
    });

    this.save.emit(data);
  }

  onCancel() {
    this.cancel.emit();
  }

  replaceImg(oldImg: UploadedImg, newImg: UploadedImg) {
    const modalRef = this.openDeleteModal();
    modalRef.componentInstance.objRef = 'existing image and replace with new image';

    modalRef.componentInstance.delete.subscribe(() => {
      this.uploadedImgService.deleteImg(oldImg.id);
      this.uploadedImgService.uploadImg(newImg).subscribe(img => {
        //this.notifierService.notify('default', 'The file has been deleted.');
        this.post.image = img;
      });
    });
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }
}
