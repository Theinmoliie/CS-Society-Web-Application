// using firebase authentication checking service
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { auth } from '../../../../src/environments/environment'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject Router

  return new Promise<boolean>((resolve) => {
    // Check the authentication state using Firebase
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is authenticated:', user.email);
        resolve(true); // Allow access if the user is authenticated
      } else {
        console.log('User is not authenticated');
        router.navigate(['/admin/auth']); // Redirect to login page if not authenticated
        resolve(false); // Deny access
       }
    });
  });
};

//old authentication checking using auth service file
// import { CanActivateFn, Router} from '@angular/router';
// import { AuthService } from '../../../../src/app/services/auth.service';  // Import your AuthService
// import { inject } from '@angular/core';

// export const adminGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService);  // Inject AuthService using inject()
//   const router = inject(Router);  // Inject Router

//   console.log('Admin check:', authService.isAuthenticated());  // Debug line


//   // Check if the user is authenticated
//   if (authService.isAuthenticated()) {
//     console.log('Login Successful');
//     // Allow access if authenticated
//     return true;
//   } else {
//     // Redirect to login page if not authenticated
//     router.navigate(['/admin/login']);
//     return false;
//   }
// };