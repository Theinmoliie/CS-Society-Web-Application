import { Injectable } from '@angular/core';
import { Cart } from '../../../shared/models/cart-model';
import { Observable, of } from 'rxjs';
import { Merchandise } from '../../../shared/models/merchandise-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Holds the current list of cart items in memory
  private cartList: Cart[] = [];

  constructor() {}

  getCart(): Observable<Cart[]> {
    const storedCart = localStorage.getItem("cartList");
    if (storedCart) {
      return of(JSON.parse(storedCart));
    } else {
      return of([]);
    }
  }

  // Adds a new item to the cart or updates the quantity of an existing item
  addCart(merchandise: Merchandise, size: string, quantity: number) {
    if (quantity <= 0) {
      return;
    }

    if (localStorage.getItem("cartList")) {
      this.cartList = JSON.parse(localStorage.getItem("cartList"));
    }

    // Find the existing added merchandise
    const existCartItem = this.cartList.find(cart => cart.selectedMerchandise.id == merchandise.id && cart.selectedSize == size);

    if (existCartItem) {
      existCartItem.selectedQuantity += quantity;
    } else {
      this.cartList.push(new Cart(merchandise, size, quantity));
    }

    localStorage.setItem("cartList", JSON.stringify(this.cartList));
  }
}
