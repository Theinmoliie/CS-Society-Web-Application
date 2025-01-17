import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import auth from firebase
import { auth} from '../../../environments/environment'  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class Authentication {
  constructor(private router: Router) {}
  private auth = getAuth();

   signUp(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('Sign-Up successful');
        this.router.navigate(['/users/home']); // Navigate to home page after sign-up
      })
      .catch(error => {
        console.error('Sign-Up failed:', error);
        throw error;
      });
  }


  loginUser(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/users/home']); // Navigate to home page after login
      })
      .catch(error => {
        console.error('Login failed:', error);
        throw error;
      });
  }

  loginAdmin(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('Login successful');
        this.router.navigate(['/admin/home']); // Navigate to home page after login
      })
      .catch(error => {
        console.error('Login failed:', error);
        throw error;
      });
  }


  logout(): void {
    auth.signOut()
      .then(() => {
        console.log('Logged out');
        this.router.navigate(['admin/auth']); // Navigate to login page after logout
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  }
}
