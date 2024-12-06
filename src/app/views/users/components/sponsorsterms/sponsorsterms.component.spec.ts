import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorstermsComponent } from './sponsorsterms.component';

describe('SponsorstermsComponent', () => {
  let component: SponsorstermsComponent;
  let fixture: ComponentFixture<SponsorstermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorstermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorstermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
