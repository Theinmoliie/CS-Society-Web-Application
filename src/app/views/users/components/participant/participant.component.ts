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
  sanitizeInput(input: string): string {
    return input
      .trim() // Removes leading and trailing spaces.
      .replace(/[^a-zA-Z0-9\s'-/.]/g, '') // Removes any special characters except alphanumeric, spaces and some special character.
      .replace(/\s+/g, ' ') // Collapses multiple spaces into a single space.
  }

  // Method to sanitize individual form fields
  sanitizeField(fieldName: string): void {
    const control = this.participantForm.get(fieldName);
    if (control && control.value) {
      control.setValue(this.sanitizeInput(control.value));
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
