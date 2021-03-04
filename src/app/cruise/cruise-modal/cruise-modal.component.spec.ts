import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseModalComponent } from './cruise-modal.component';

describe('CruiseModalComponent', () => {
  let component: CruiseModalComponent;
  let fixture: ComponentFixture<CruiseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
