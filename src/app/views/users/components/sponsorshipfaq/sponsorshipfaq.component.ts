import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorshipfaq',
  templateUrl: './sponsorshipfaq.component.html',
  styleUrl: './sponsorshipfaq.component.css'
})
export class SponsorshipfaqComponent {
constructor(private authservice: Authentication) {} 

    logout(): void {
      this.authservice.logout();
    }
}
