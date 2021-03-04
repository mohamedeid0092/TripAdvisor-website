import { TestBed } from '@angular/core/testing';

import { DreamTripService } from './dream-trip.service';

describe('DreamTripService', () => {
  let service: DreamTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreamTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
