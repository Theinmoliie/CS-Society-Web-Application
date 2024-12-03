import { Component } from '@angular/core';
import { Cart } from '../../../../shared/models/cart-model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  // Array to store the list of items in the cart
  // `Cart[]` ensures the data structure adheres to the `Cart` model
  cartList: Cart[];

  constructor(private cartService: CartService,
          private router: Router) { }

  // getCart() method of the CartService to fetch the cart data
  // assigning the fetched data to the cartList
  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.cartList = data;
    })
  }

  //Move to payment page
  navToPaymentPage(){
    this.router.navigate(["/users/payment"]);
  }

  // Updates the cartList property when new data is passed
  updateCartList(data: any) {
    this.cartList = data;
  }
}
