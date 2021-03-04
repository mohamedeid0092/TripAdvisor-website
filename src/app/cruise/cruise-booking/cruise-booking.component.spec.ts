import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseBookingComponent } from './cruise-booking.component';

describe('CruiseBookingComponent', () => {
  let component: CruiseBookingComponent;
  let fixture: ComponentFixture<CruiseBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
