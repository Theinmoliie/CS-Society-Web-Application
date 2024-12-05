import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddMerchandiseComponent } from './modal-add-merchandise.component';

describe('ModalAddMerchandiseComponent', () => {
  let component: ModalAddMerchandiseComponent;
  let fixture: ComponentFixture<ModalAddMerchandiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddMerchandiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
