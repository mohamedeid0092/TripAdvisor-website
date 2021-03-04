import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSectionComponent } from './date-section.component';

describe('DateSectionComponent', () => {
  let component: DateSectionComponent;
  let fixture: ComponentFixture<DateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
