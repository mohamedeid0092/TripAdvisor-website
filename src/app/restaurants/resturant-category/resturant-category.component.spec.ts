import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantCategoryComponent } from './resturant-category.component';

describe('ResturantCategoryComponent', () => {
  let component: ResturantCategoryComponent;
  let fixture: ComponentFixture<ResturantCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
