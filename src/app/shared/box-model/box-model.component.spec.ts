import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxModelComponent } from './box-model.component';

describe('BoxModelComponent', () => {
  let component: BoxModelComponent;
  let fixture: ComponentFixture<BoxModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
