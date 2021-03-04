import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantDetailsComponent } from './resturant-details.component';

describe('ResturantDetailsComponent', () => {
  let component: ResturantDetailsComponent;
  let fixture: ComponentFixture<ResturantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
