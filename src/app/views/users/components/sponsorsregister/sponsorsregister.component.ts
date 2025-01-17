import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorsregister',
  templateUrl: './sponsorsregister.component.html',
  styleUrl: './sponsorsregister.component.css'
})
export class SponsorsregisterComponent {
  constructor(private authservice: Authentication) {} 
  
  logout(): void {
    this.authservice.logout();
  }
  
}
