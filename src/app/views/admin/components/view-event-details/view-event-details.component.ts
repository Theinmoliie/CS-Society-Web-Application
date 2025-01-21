import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../../../../shared/services/event.service';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './view-event-details.component.html',
  styleUrls: ['./view-event-details.component.css']
})
export class ViewEventDetailsComponent {
  events: any[] = [];
  newEvent = { title: '', description: '', date: '', time: '', location: '' };
  selectedIndex: number | null = null;
  authservice: any;

  constructor(private eventService: EventService) {
      this.events = this.eventService.getEvents();
  }

  addEvent() {
    this.eventService.addEvent(this.newEvent);
    this.newEvent = { title: '', description: '', date: '', time: '', location: '' };
  }

  editEvent(index: number) {
    this.selectedIndex = index;
    this.newEvent = { ...this.events[index] };
  }

  updateEvent() {
    if (this.selectedIndex !== null) {
      this.eventService.updateEvent(this.selectedIndex, this.newEvent);
      this.selectedIndex = null;
      this.newEvent = { title: '', description: '', date: '', time: '', location: '' };
    }
  }

  deleteEvent(index: number) {
    this.eventService.deleteEvent(index);
  }

  logoutAdmin(): void {
    this.authservice.logoutAdmin();
  }
}
