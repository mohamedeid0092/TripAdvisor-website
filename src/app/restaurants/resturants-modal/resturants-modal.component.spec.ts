import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsModalComponent } from './resturants-modal.component';

describe('ResturantsModalComponent', () => {
  let component: ResturantsModalComponent;
  let fixture: ComponentFixture<ResturantsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
