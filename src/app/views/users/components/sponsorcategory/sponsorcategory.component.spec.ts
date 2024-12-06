import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorcategoryComponent } from './sponsorcategory.component';

describe('SponsorcategoryComponent', () => {
  let component: SponsorcategoryComponent;
  let fixture: ComponentFixture<SponsorcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorcategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
