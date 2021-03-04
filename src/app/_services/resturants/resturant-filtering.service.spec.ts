import { TestBed } from '@angular/core/testing';

import { ResturantFilteringService } from './resturant-filtering.service';

describe('ResturantFilteringService', () => {
  let service: ResturantFilteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantFilteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
