import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-sponsorcategory',
  templateUrl: './sponsorcategory.component.html',
  styleUrl: './sponsorcategory.component.css'
})
export class SponsorcategoryComponent {
    constructor(private authservice: Authentication) {} 

    logout(): void {
      this.authservice.logout();
    }
}
