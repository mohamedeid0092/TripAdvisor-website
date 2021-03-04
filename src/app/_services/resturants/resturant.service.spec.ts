import { TestBed } from '@angular/core/testing';

import { ResturantService } from './resturant.service';

describe('ResturantService', () => {
  let service: ResturantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
