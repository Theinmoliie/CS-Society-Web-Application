import { Component } from '@angular/core';
import { EventService } from '../../../../shared/services/event.service';

@Component({
  selector: 'app-view-event-details',
  templateUrl: './view-event-details.component.html',
  styleUrl: './view-event-details.component.css'
})
export class ViewEventDetailsComponent {

  events: any[];
  authservice: any;

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  logout(): void {
    this.authservice.logout();
  }

}
