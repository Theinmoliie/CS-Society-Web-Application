import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: any[] = [];

  constructor() { }

  getEvents() {
    return this.events;
  }

  addEvent(event: any) {
    this.events.push(event);
  }

  updateEvent(index: number, event: any) {
    this.events[index] = event;
  }

  deleteEvent(index: number) {
    this.events.splice(index, 1);
  }
}
