import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: any[] = JSON.parse(localStorage.getItem('events') || '[]');
  private nextId = this.events.length > 0 ? Math.max(...this.events.map(e => e.id)) + 1 : 1;

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

  private saveToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}
