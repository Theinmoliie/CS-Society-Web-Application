import { Component, OnInit } from '@angular/core';
import { Merchandise } from '../../../../shared/models/merchandise-model';
import { MerchandiseService } from '../../services/merchandise.service';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../../../shared/models/cart-model';
import { CardMerchandiseComponent } from '../../../../shared/components/card-merchandise/card-merchandise.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalMerchandiseComponent } from '../../../../shared/components/modal-merchandise/modal-merchandise.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrl: './merchandise.component.css'
})
export class MerchandiseComponent implements OnInit{

  merchandiseItem: Merchandise[];
  selectedMerchandise: Merchandise;
  availableSize: string[] = ["S", "M", "L", "XL", "XXL"];
  cartItemsCount: number = 0; //total number of items in the cart

  bsModalRef?: BsModalRef;

  constructor(private merchandiseService: MerchandiseService,
              private cartService: CartService,
              private modalService: BsModalService,
              private toast: ToastrService,
              private authservice: Authentication) { }

  ngOnInit(): void {
    // Fetches merchandise data using the MerchandiseService
    this.merchandiseService.getMerchandise().subscribe(data => {
      if (data) {
        this.merchandiseItem = data;

      }
    })

    this.getCartItemsCount();
  }

  // calculate the total quantity of items in the cart and updates the cartItemsCount
  getCartItemsCount() {
    this.cartService.getCart().subscribe((cartList : Cart[]) => {
      let total = 0;
      cartList.every(cart => total += cart.selectedQuantity);
      this.cartItemsCount = total;
    })
  }

  // If the merchandise exists, proceeds to open the modal
  // Opens a modal using BsModalService
  openModal(id: string) {
    const filteredMerchandise = this.merchandiseItem.filter((merchandise:Merchandise) => merchandise.id == id);
    if (filteredMerchandise.length > 0) {

      this.bsModalRef = this.modalService.show(ModalMerchandiseComponent, {
        initialState: {
          selectedMerchandise: filteredMerchandise[0],
          availableSize: this.availableSize
        },
        class: 'custom-modal-width',
      });

      // Subscribes to the addToCart event emitted by the modal.
      // Adds the selected merchandise, size, and quantity to the cart using CartService.
      // Updates the cart item count by calling getCartItemsCount().
      // Displays a success toast message using the ToastrService.
      this.bsModalRef.content.addToCart.subscribe((data: any) => {
        this.cartService.addCart(data.merchandise, data.size, data.quantity);
        this.getCartItemsCount();
        this.toast.success("Item added to cart successfully!")
       });

    }
  }

  logout(): void {
    this.authservice.logout();
  }

}
