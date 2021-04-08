import { TestBed } from '@angular/core/testing';

import { IshaEventService } from './isha-event.service';

describe('IshaEventService', () => {
  let service: IshaEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IshaEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
