import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorsterms',
  templateUrl: './sponsorsterms.component.html',
  styleUrl: './sponsorsterms.component.css'
})
export class SponsorstermsComponent {
 constructor(private authservice: Authentication) {} 
  
  logout(): void {
    this.authservice.logout();
  }
}
