import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMerchandiseComponent } from './modal-merchandise.component';

describe('ModalMerchandiseComponent', () => {
  let component: ModalMerchandiseComponent;
  let fixture: ComponentFixture<ModalMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMerchandiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
