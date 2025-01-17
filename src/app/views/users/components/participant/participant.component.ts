import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  participantForm: FormGroup;
  showPopup = false;
  rateLimitError = false;
  maxRequests = 1; // Maximum number of requests allowed
  timeWindow = 420000; // Time window in milliseconds (e.g., 7 minute)
  requestTimestamps: number[] = [];

  // Method to check and enforce rate limiting
  enforceRateLimit(): boolean {
    const now = Date.now();

    // Filter out timestamps older than the time window
    this.requestTimestamps = this.requestTimestamps.filter(
      (timestamp) => now - timestamp < this.timeWindow
    );

    if (this.requestTimestamps.length >= this.maxRequests) {
      return false; // Rate limit exceeded
    }

    this.requestTimestamps.push(now);
    return true; // Allow request
  }

  // Input validation
  // Injects FormBuilder service to manage form controls
  // Form group with specific form controls and validation rules
  constructor(private fb: FormBuilder) {
    this.participantForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s'-/.]*$/)]],
      matricNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      school: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      yearOfStudy: ['', Validators.required],
      campus: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // Input sanitization
  sanitizeInput(input: string, fieldName?: string): string {
    if (fieldName === 'email') {
      return input
        .trim()
        .replace(/[^a-zA-Z0-9@._-]/g, '') // Allow characters specific to email addresses
        .replace(/\s+/g, ' ');
    }
    return input
      .trim()
      .replace(/[^a-zA-Z0-9\s'-/.]/g, '')
      .replace(/\s+/g, ' ');
  }


  // Method to sanitize individual form fields
  sanitizeField(fieldName: string): void {
    const control = this.participantForm.get(fieldName);
    if (control && control.value) {
      control.setValue(this.sanitizeInput(control.value, fieldName));
    }
  }

  // Method to sanitize all form inputs
  sanitizeFormInputs(): void {
    Object.keys(this.participantForm.controls).forEach((key) => {
      const control = this.participantForm.get(key);
      if (control && control.value) {
        control.setValue(this.sanitizeInput(control.value));
      }
    });
  }

  // Method to submit the form
  onSubmit(): void {
    if (!this.enforceRateLimit()) {
      this.rateLimitError = true;
      setTimeout(() => {
        this.rateLimitError = false; // Clear error after a short duration
      }, 3000); // Display error for 3 seconds
      return;
    }

    if (this.participantForm.valid) {
      // Sanitize all inputs before submission
      this.sanitizeFormInputs();

      // Show the popup
      this.showPopup = true;

      // Hide the popup after 3 seconds
      setTimeout(() => {
        this.showPopup = false;
      }, 3000);

      console.log('Sanitized Form Submitted:', this.participantForm.value);
    } else {
      // Mark all fields as touched to show validation errors
      this.participantForm.markAllAsTouched();
    }
  }
}
