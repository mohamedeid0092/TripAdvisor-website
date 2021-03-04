import { TestBed } from '@angular/core/testing';

import { HotelsFilteringService } from './hotels-filtering.service';

describe('HotelsFilteringService', () => {
  let service: HotelsFilteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsFilteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
