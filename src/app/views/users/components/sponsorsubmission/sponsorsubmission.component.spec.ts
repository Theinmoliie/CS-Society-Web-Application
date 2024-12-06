import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsubmissionComponent } from './sponsorsubmission.component';

describe('SponsorsubmissionComponent', () => {
  let component: SponsorsubmissionComponent;
  let fixture: ComponentFixture<SponsorsubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorsubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
