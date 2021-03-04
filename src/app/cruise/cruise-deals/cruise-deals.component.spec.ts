import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseDealsComponent } from './cruise-deals.component';

describe('CruiseDealsComponent', () => {
  let component: CruiseDealsComponent;
  let fixture: ComponentFixture<CruiseDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
