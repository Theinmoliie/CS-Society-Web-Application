import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { auth } from '../../../../environments/environment'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject Router

  return new Promise<boolean>((resolve) => {
    // Check the authentication state using Firebase
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is authenticated:', user.email);
        resolve(true); // Allow access if the user is authenticated
      } else {
        console.log('User is not authenticated');
        router.navigate(['/users/loginuser']); // Redirect to login page if not authenticated
        resolve(false); // Deny access
       }
    });
  });
};
