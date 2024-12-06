import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  slides = [
    {
      title: 'Log Off Night 2024',
      description: 'The epic celebration for final-year Computer Science students!',
      imgSrc: 'event1.png',
    },
    {
      title: 'Pixel 2024',
      description: 'Explore and innovate beyond horizons with CS students.',
      imgSrc: 'event2.png',
    },
    {
      title: 'Annual General Meeting 2024',
      description: 'Celebrate achievements and elect new executives.',
      imgSrc: 'event3.png',
    },
  ];
  currentIndex = 0;

  moveSlide(direction: number): void {
    this.currentIndex = (this.currentIndex + direction + this.slides.length) % this.slides.length;
  }

  eventDetails = {
    title: 'Log Off Night 2024',
    description: 'An unforgettable celebration for CS graduates!',
    date: '2024-07-07',
    time: '18:00',
    location: 'Z Auditorium',
  };

  saveChanges() {
    console.log('Updated Event Details:', this.eventDetails);
    // Add logic to save or update the event details
  }
}

