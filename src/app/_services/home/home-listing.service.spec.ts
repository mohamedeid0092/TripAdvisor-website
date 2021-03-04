import { TestBed } from '@angular/core/testing';

import { HomeListingService } from './home-listing.service';

describe('HomeListingService', () => {
  let service: HomeListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
