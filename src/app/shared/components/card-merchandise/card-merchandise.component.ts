import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Merchandise } from '../../models/merchandise-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card-merchandise',
  templateUrl: './card-merchandise.component.html',
  styleUrl: './card-merchandise.component.css'
})
export class CardMerchandiseComponent {

  //To receive a `Merchandise` object
  @Input() merchandise: Merchandise;

  //Declares an event named openModal
  //Allows the CardMerchandiseComponent to emit a number (merchandise ID) to its parent component
  @Output() openModal = new EventEmitter<number>();

  //Determine modal (if used) is currently shown or not
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // A method triggered when the "Add to Cart" button is clicked.
  addToCart() {
    this.openModal.emit(this.merchandise.id);
  }
}
