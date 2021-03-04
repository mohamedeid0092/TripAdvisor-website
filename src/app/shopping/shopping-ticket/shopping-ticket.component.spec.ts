import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingTicketComponent } from './shopping-ticket.component';

describe('ShoppingTicketComponent', () => {
  let component: ShoppingTicketComponent;
  let fixture: ComponentFixture<ShoppingTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
