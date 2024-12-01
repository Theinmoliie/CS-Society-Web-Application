import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  standalone: true,  // Add this property to make it standalone
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';  // Store the username
  password: string = '';  // Store the password
  errorMessage: string = '';  // Store error message for invalid login attempts

  constructor(private router: Router, private authService: AuthService) {}

  // Function to handle login
  login() {
    if (this.authService.login(this.username, this.password)) {
      console.log("Navigating to admin/home");
      // If login is successful, redirect to the admin home page
    } else {
      // Display error message if login fails
      this.errorMessage = 'Invalid credentials';
    }
  }
}
