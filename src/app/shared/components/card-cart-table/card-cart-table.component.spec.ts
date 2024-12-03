import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartTableComponent } from './card-cart-table.component';

describe('CardCartTableComponent', () => {
  let component: CardCartTableComponent;
  let fixture: ComponentFixture<CardCartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCartTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
