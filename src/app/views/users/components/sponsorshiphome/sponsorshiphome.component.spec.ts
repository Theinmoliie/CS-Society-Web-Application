import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshiphomeComponent } from './sponsorshiphome.component';

describe('SponsorshiphomeComponent', () => {
  let component: SponsorshiphomeComponent;
  let fixture: ComponentFixture<SponsorshiphomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorshiphomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorshiphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
