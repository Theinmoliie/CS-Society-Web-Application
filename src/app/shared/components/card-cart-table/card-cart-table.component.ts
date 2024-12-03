import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../models/cart-model';

@Component({
  selector: 'app-card-cart-table',
  templateUrl: './card-cart-table.component.html',
  styleUrl: './card-cart-table.component.css'
})
export class CardCartTableComponent {
  @Input() cartList: Cart[]; //receive cart array
  @Output() updateCartList = new EventEmitter<Cart[]>(); //emits an updated cart list to the parent component

  totalPrice: number = 0; // `totalPrice` tracks the total cost of items in the cart.

  constructor() { }

  ngOnInit(): void {
    this.updateTotalPrice();
  }

  //adds its `subTotal` to `totalPrice`
  updateTotalPrice() {
    this.totalPrice = 0;
    this.cartList.every(cart => this.totalPrice+= cart.subTotal);
  }

  decreaseQuantity(cart: Cart): void {
    if (cart.selectedQuantity > 1) { // Only decrease if the current quantity is greater than 1
      cart.selectedQuantity--;
      this.updateQuantity(cart);
    }
  }

  increaseQuantity(cart: Cart): void {
    cart.selectedQuantity++;
    this.updateQuantity(cart);
  }

  // Updates the `subTotal` for the modified cart item
  updateQuantity(cart: Cart) {
    if (cart.selectedQuantity < 1) {
      cart.selectedQuantity = 1;
    }
    cart.subTotal = cart.selectedMerchandise.price * cart.selectedQuantity;
    this.updateTotalPrice();
    localStorage.setItem("cartList", JSON.stringify(this.cartList));     // Saves the updated cart list to the browser's local storage
    this.updateCartList.emit(this.cartList); // Emits the updated cart list to the parent component
  }

  removeMerchandise(selectedCart: Cart, event: any) {
    event.preventDefault();

    // Remove merchandise from cart list
    this.cartList = this.cartList.filter(cart =>
      !(cart.selectedMerchandise.id === selectedCart.selectedMerchandise.id &&
        cart.selectedSize === selectedCart.selectedSize)
    );

    this.updateTotalPrice();     // Recalculates the total price after removing the item.
    localStorage.setItem("cartList", JSON.stringify(this.cartList));
    this.updateCartList.emit(this.cartList);
  }
}
