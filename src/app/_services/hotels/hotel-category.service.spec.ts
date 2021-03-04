import { TestBed } from '@angular/core/testing';

import { HotelCategoryService } from './hotel-category.service';

describe('HotelCategoryService', () => {
  let service: HotelCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
