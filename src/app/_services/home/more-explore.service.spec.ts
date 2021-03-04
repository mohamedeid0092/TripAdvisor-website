import { TestBed } from '@angular/core/testing';

import { MoreExploreService } from './more-explore.service';

describe('MoreExploreService', () => {
  let service: MoreExploreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreExploreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
