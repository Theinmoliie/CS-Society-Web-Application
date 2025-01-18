import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import auth from firebase
import { auth } from '../../../environments/environment';    // import the environment's auth
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class Authentication {

  constructor(private router: Router) {}

  // loginUser(email: string, password: string): Promise<void> {
  //   return signInWithEmailAndPassword(auth, email, password)
  //     .then(() => {
  //       console.log('Login successful');
  //       this.router.navigate(['/users/home']); // Navigate to home page after login
  //     })
  //     .catch(error => {
  //       console.error('Login failed:', error);
  //       throw error;
  //     });
  // }

  loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Google SSO Login Successful:', result.user.email);
        this.router.navigate(['/users/home']); // Redirect to user home page
      })
      .catch((error) => {
        console.error('Google SSO Login Failed:', error);
        throw error;
      });
  }

  loginAdmin(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(auth, email, password)
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
    signOut(auth)
      .then(() => {
        console.log('Logged out');
        this.router.navigate(['/users/loginuser']); // Navigate to login page after logout
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  }

  logoutAdmin(): void {
    signOut(auth)
      .then(() => {
        console.log('Logged out');
        this.router.navigate(['/admin/auth']); // Navigate to login page after logout
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  }
}

