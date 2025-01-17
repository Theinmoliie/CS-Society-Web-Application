import { Component } from '@angular/core';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authservice: Authentication) { }

  // loginUser() {
  //   this.authservice.loginUser(this.email, this.password).then(
  //     () => alert('Login Successful!'),
  //     (err) => alert(`Login Failed: ${err.message}`)
  //   );
  // }

  loginWithGoogle() {
    this.authservice
      .loginWithGoogle()
      .then(() => alert('Google Login Successful!'))
      .catch((err) => alert(`Google Login Failed: ${err.message}`));
  }
}
