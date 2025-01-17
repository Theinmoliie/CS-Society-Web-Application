import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorslist',
  templateUrl: './sponsorslist.component.html',
  styleUrl: './sponsorslist.component.css'
})
export class SponsorslistComponent {

  constructor(private authservice: Authentication) {} 
  
      logout(): void {
        this.authservice.logout();
      }

}
