import { CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../../../../src/app/services/auth.service';  // Import your AuthService
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inject AuthService using inject()
  const router = inject(Router);  // Inject Router

  console.log('Admin check:', authService.isAuthenticated());  // Debug line


  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    console.log('Login Successful');
    // Allow access if authenticated
    return true;
  } else {
    // Redirect to login page if not authenticated
    router.navigate(['/admin/login']);
    return false;
  }
};