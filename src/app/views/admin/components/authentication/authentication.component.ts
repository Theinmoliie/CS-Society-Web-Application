import { Component } from '@angular/core';
import { auth, signInWithEmailAndPassword } from '../../../../../environments/environment'; // Firebase auth import
import { FirebaseError } from 'firebase/app';
import { Router } from '@angular/router';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authservice: Authentication) {}

  loginAdmin() {
    this.authservice.loginAdmin(this.email, this.password).then(
      () => alert('Login Successful!'),
      (err) => alert(`Login Failed: ${err.message}`)
    );
  }

  // async onSubmit(): Promise<void> {
  //   if (this.email && this.password) {
  //     try {
  //       await signInWithEmailAndPassword(auth, this.email, this.password);
  //       console.log('Login successful');
  //       // Navigate to the admin dashboard or desired route after successful login.
  //       this.router.navigate(['/admin/home']);  // Redirect after successful login

  //     } catch (error) {
  //       // Type-cast the error as FirebaseError
  //       if (error instanceof FirebaseError) {
  //         this.errorMessage = error.message; // Now this will work without TypeScript errors
  //       } else {
  //         this.errorMessage = 'An unknown error occurred.';
  //       }
  //       console.error('Login failed:', error);
  //     }
  //   } else {
  //     this.errorMessage = 'Please enter email and password.';
  //   }
  // }
  
}