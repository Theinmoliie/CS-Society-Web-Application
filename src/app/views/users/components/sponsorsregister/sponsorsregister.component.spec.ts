import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsregisterComponent } from './sponsorsregister.component';

describe('SponsorsregisterComponent', () => {
  let component: SponsorsregisterComponent;
  let fixture: ComponentFixture<SponsorsregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorsregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
