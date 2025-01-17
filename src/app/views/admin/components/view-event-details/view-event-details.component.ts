import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LogoutService } from '../../../../shared/services/logout.service';

@Component({
  selector: 'app-view-event-details',
  templateUrl: './view-event-details.component.html',
  styleUrls: ['./view-event-details.component.css']
})
export class ViewEventDetailsComponent implements OnInit {
  event: any = null;
  eventID: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,  // To navigate back
    private firestore: AngularFirestore, // Firestore service
    private logoutservice: LogoutService
  ) {}

  ngOnInit(): void {
    // Get the eventID from the URL query params
    this.route.queryParams.subscribe(params => {
      this.eventID = params['eventID'];  // Extract eventID from query params
      if (this.eventID) {
        this.fetchEventDetails();
      } else {
        console.error('No event ID found');
      }
    });
  }

  // Fetch event details from Firestore
  fetchEventDetails() {
    const eventRef = doc(this.firestore.firestore, 'events', this.eventID);
    getDoc(eventRef).then(docSnap => {
      if (docSnap.exists()) {
        this.event = docSnap.data();
      } else {
        console.error("Event not found!");
        this.event = null;  // In case event is not found
      }
    }).catch(error => {
      console.error("Error fetching event:", error);
      this.event = null;  // Set to null if an error occurs
    });
  }

  // Method to go back to the previous page
  goBack() {
    this.router.navigate(['/admin/view-event-details']);  // Or adjust this to the relevant page
  }

  logout(): void {
    this.logoutservice.logout();
  }
}
