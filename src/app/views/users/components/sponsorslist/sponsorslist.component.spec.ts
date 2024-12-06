import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorslistComponent } from './sponsorslist.component';

describe('SponsorslistComponent', () => {
  let component: SponsorslistComponent;
  let fixture: ComponentFixture<SponsorslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
