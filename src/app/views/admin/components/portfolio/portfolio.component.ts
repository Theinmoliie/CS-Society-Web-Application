import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { LogoutService } from '../../../../shared/services/logout.service';

@Component({
  selector: 'app-portfolio-admin',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private logoutservice: LogoutService) {}

  // Flags for managing form visibility
  isAddingCarousel = false;
  isAddingAchievement = false;
  isAddingEvent = false;

  // Data arrays
  carouselImages = [
    { src: '../../../../../assets/3.jpg' },
    { src: '../../../../../assets/4.jpg' },
    { src: '../../../../../assets/5.jpg' },
  ];

  achievements = [
    {
      title: 'Annual Computer Science Internship Recruitment Fair',
      description: 'The Annual Computer Science Internship Recruitment Fair ...',
      image: '../../../../../assets/Internship.jpeg',
    },
    {
      title: 'Campus Mobility Projects',
      description: 'The Campus Mobility Projects undertaken ...',
      image: '../../../../../assets/bus.jpeg',
    },
  ];

  pastEvents = [
    {
      title: 'Varsity Hackathon 2024',
      date: '2024-07-12',
      location: 'Dewan Utama Pelajar, USM',
      description: 'Varsity Hackathon, a significant student-led hackathon...',
      image: '../../../../../assets/vhack.webp',

    },
    {
      title: 'PIXEL 2024',
      date: '2024-06-30',
      location: 'Dewan Utama Pelajar, USM',
      description: 'An annual flagship exhibition programme ...',
      image: '../../../../../assets/pixel.png',

    },
    {
      title: 'Log Off Night 2024',
      date: '2024-06-10',
      location: ' Bayview Hotel, Penang',
      description: 'An annual dinner to celebrate and appreciate final year computer science students...',
      image: '../../../../../assets/logOff.png',

    },
  ];

  // Form and Editing Item
  editingItem: any = {}; // This will store form data dynamically
  formTitle = '';
  formButtonText = '';

  // Carousel methods
  toggleAddCarousel() {
    this.isAddingCarousel = true;
    this.isAddingAchievement = false;
    this.isAddingEvent = false;
    this.editingItem = { image: '' }; // For carousel
    this.openModal('Add Carousel Image');
  }

  editCarouselImage(index: number) {
    this.isAddingCarousel = true;
    this.isAddingAchievement = false;
    this.isAddingEvent = false;
    this.editingItem = { image: this.carouselImages[index].src };
    this.openModal('Edit Carousel Image');
  }

  deleteCarouselImage(index: number) {
    this.carouselImages.splice(index, 1);
  }

  // Achievement methods
  toggleAddAchievement() {
    this.isAddingAchievement = true;
    this.isAddingCarousel = false;
    this.isAddingEvent = false;
    this.editingItem = { title: '', description: '', image: '' }; // For achievements
    this.openModal('Add Achievement');
  }

  editAchievement(index: number) {
    this.isAddingAchievement = true;
    this.isAddingCarousel = false;
    this.isAddingEvent = false;
    this.editingItem = { ...this.achievements[index] };
    this.openModal('Edit Achievement');
  }

  deleteAchievement(index: number) {
    this.achievements.splice(index, 1);
  }

  // Past Event methods
  toggleAddEvent() {
    this.isAddingEvent = true;
    this.isAddingCarousel = false;
    this.isAddingAchievement = false;
    this.editingItem = { title: '', date: '', location: '', description: '' }; // For events
    this.openModal('Add Past Event');
  }

  editEvent(index: number) {
    this.isAddingEvent = true;
    this.isAddingCarousel = false;
    this.isAddingAchievement = false;
    this.editingItem = { ...this.pastEvents[index] };
    this.openModal('Edit Past Event');
  }

  deleteEvent(index: number) {
    this.pastEvents.splice(index, 1);
  }

   // Handle file selection for images
   onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editingItem.image = e.target.result;
      };
      reader.readAsDataURL(file); // Convert image to base64 URL
    }
  }

  // Common methods for modal control
  openModal(title: string) {
    this.formTitle = title;
    this.formButtonText = title.includes('Edit') ? 'Save Changes' : 'Add Item';
  
    // Initialize and show the modal
    const modal = new bootstrap.Modal(document.getElementById('formModal')!);
    modal.show();
  }

  submitForm() {
    if (this.isAddingCarousel) {
      // Handle adding carousel image
      this.carouselImages.push({ src: this.editingItem.image });
    } else if (this.isAddingAchievement) {
      // Handle adding achievement
      this.achievements.push({ ...this.editingItem });
    } else if (this.isAddingEvent) {
      // Handle adding past event
      this.pastEvents.push({ ...this.editingItem });
    }

    // Reset the form and close the modal
    this.editingItem = {};
    const modal = new bootstrap.Modal(document.getElementById('formModal'));
    modal.hide();
  }

  logout(): void {
    this.logoutservice.logout();
  }
}
