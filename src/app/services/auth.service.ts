import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.loggedIn = true;
      console.log('Authenticated');
      this.router.navigate(['/admin/home']);  // Redirect after successful login
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
    console.log('Authentication failed');
    this.router.navigate(['/admin/login']);  // Redirect to login on logout
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
