import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Image } from '@src/app/core/models/image';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImgUploadComponent),
      multi: true
    }
  ]
})
export class ImgUploadComponent implements OnInit, ControlValueAccessor {
  @Input() img: Image;
  @Input() action: string;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  addImg(img: Image) {
    this.img = img;
    this.updateChanges();
  }

  removeImg(img: Image) {
    this.updateChanges();
  }

  onChange: (_: any) => void = (_: any) => {};

  onTouched: () => void = () => {};

  updateChanges() {
    this.onChange(this.img);
  }

  /**
   * OVERRIDES
   */

  writeValue(img: Image): void {
    this.img = img;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  deleteImg(img: Image) {
    this.delete.emit(img);
  }

}
