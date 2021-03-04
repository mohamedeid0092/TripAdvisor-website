import { TestBed } from '@angular/core/testing';

import { ResturantCategoryService } from './resturant-category.service';

describe('ResturantCategoryService', () => {
  let service: ResturantCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
