import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import auth from firebase
import { auth } from '../../../environments/environment'   

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private router: Router) {}

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
