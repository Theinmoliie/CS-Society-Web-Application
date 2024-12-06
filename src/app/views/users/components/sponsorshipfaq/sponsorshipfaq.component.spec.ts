import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipfaqComponent } from './sponsorshipfaq.component';

describe('SponsorshipfaqComponent', () => {
  let component: SponsorshipfaqComponent;
  let fixture: ComponentFixture<SponsorshipfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorshipfaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorshipfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
