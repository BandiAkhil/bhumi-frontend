import { TestBed } from '@angular/core/testing';

import { UploadedImgService } from './uploaded-img.service';

describe('UploadedImgService', () => {
  let service: UploadedImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadedImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
