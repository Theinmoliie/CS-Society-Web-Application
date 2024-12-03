import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal'; // Provides the modal reference for controlling the visibility and functionality of the modal
import { Merchandise } from '../../models/merchandise-model';

@Component({
  selector: 'app-modal-merchandise',
  templateUrl: './modal-merchandise.component.html',
  styleUrl: './modal-merchandise.component.css'
})
export class ModalMerchandiseComponent {
  @Input() selectedMerchandise: Merchandise;
  @Input() availableSize: string[] = [];
  @Output() addToCart = new EventEmitter<{ merchandise: Merchandise; size: string; quantity: number }>();

  selectedSize: string;
  selectedQuantity: number = 1;

  constructor(public modalRef: BsModalRef) {}

  // Hides the modal
  closeModal(): void {
    this.modalRef.hide();
  }

  // Emits the `addToCart` event with the selected merchandise, size, and quantity
  confirmAddCart(): void {
    this.addToCart.emit({
      merchandise: this.selectedMerchandise,
      size: this.selectedSize,
      quantity: this.selectedQuantity
    });
    this.closeModal();
  }
}
