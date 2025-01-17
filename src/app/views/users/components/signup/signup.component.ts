import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authservice: Authentication) { }

  signUp() {
    this.authservice.signUp(this.email, this.password).then(
      () => alert('Sign-Up Successful!'),
      (err) => alert(`Sign-Up Failed: ${err.message}`)
    );
  }

}
