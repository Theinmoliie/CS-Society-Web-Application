import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.css'
})
export class ParticipantsComponent implements OnInit {
  participantsList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialize the participantsList with some data or fetch from a service
    this.participantsList = [
      {
        eventId: 'E001',
        name: 'John Doe',
        matricNumber: 'A123456',
        email: 'john.doe@example.com',
        contact: '0123456789',
        school: 'School of Engineering',
        yearOfStudy: 'Year 3',
        campus: 'Main Campus'
      },
      {
        eventId: 'E002',
        name: 'Jane Smith',
        matricNumber: 'B234567',
        email: 'jane.smith@example.com',
        contact: '0987654321',
        school: 'School of Business',
        yearOfStudy: 'Year 2',
        campus: 'City Campus'
      },
      {
        eventId: 'E003',
        name: 'Alice Johnson',
        matricNumber: 'C345678',
        email: 'alice.johnson@example.com',
        contact: '0123456780',
        school: 'School of Arts',
        yearOfStudy: 'Year 1',
        campus: 'Main Campus'
      },
      {
        eventId: 'E004',
        name: 'Bob Brown',
        matricNumber: 'D456789',
        email: 'bob.brown@example.com',
        contact: '0987654320',
        school: 'School of Science',
        yearOfStudy: 'Year 4',
        campus: 'City Campus'
      },
      {
        eventId: 'E005',
        name: 'Charlie Davis',
        matricNumber: 'E567890',
        email: 'charlie.davis@example.com',
        contact: '0123456790',
        school: 'School of Law',
        yearOfStudy: 'Year 3',
        campus: 'Main Campus'
      },
      {
        eventId: 'E006',
        name: 'Diana Evans',
        matricNumber: 'F678901',
        email: 'diana.evans@example.com',
        contact: '0987654310',
        school: 'School of Medicine',
        yearOfStudy: 'Year 2',
        campus: 'City Campus'
      }
    ];
  }

  removeParticipant(participant: any) {
    const index = this.participantsList.indexOf(participant);
    if (index > -1) {
      this.participantsList.splice(index, 1);
    }
  }
}
