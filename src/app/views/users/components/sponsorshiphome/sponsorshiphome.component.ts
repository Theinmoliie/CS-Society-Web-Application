import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorshiphome',
  templateUrl: './sponsorshiphome.component.html',
  styleUrl: './sponsorshiphome.component.css'
})
export class SponsorshiphomeComponent {
constructor(private authservice: Authentication) {} 

    logout(): void {
      this.authservice.logout();
    }
}
