import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorsubmission',
  templateUrl: './sponsorsubmission.component.html',
  styleUrl: './sponsorsubmission.component.css'
})
export class SponsorsubmissionComponent {
  constructor(private authservice: Authentication) {} 
  
  logout(): void {
    this.authservice.logout();
  }
}
