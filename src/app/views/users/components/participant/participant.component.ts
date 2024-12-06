import { Component } from '@angular/core';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {
  showPopup = false;

  onSubmit() {
    // Show the popup
    this.showPopup = true;

    // Hide the popup after 3 seconds
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }

}
