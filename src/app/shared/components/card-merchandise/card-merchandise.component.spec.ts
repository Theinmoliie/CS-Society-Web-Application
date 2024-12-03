import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMerchandiseComponent } from './card-merchandise.component';

describe('CardMerchandiseComponent', () => {
  let component: CardMerchandiseComponent;
  let fixture: ComponentFixture<CardMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMerchandiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
