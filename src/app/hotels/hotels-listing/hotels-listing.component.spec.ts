import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsListingComponent } from './hotels-listing.component';

describe('HotelsListingComponent', () => {
  let component: HotelsListingComponent;
  let fixture: ComponentFixture<HotelsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
