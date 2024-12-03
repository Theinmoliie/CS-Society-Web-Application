import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  successUpload: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Triggers the transition from the upload view to the success message.
  // Simulates clearing the cart after a successful receipt upload.
  onUpload(event: any){
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.successUpload = true;
      localStorage.setItem("cartList", "[]");
    }
  }

  // Navigates the user to the home page
  navToHome() {
    this.router.navigate(["/users/home"]);
  }
}
