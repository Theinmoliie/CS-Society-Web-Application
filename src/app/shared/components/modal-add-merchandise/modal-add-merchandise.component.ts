import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Merchandise } from '../../models/merchandise-model';

@Component({
  selector: 'app-modal-add-merchandise',
  templateUrl: './modal-add-merchandise.component.html',
  styleUrl: './modal-add-merchandise.component.css'
})
export class ModalAddMerchandiseComponent implements OnInit{

  @Input() selectedMerchandise: Merchandise;
  @Output() updateMerchandise = new EventEmitter<Merchandise>();

  // Holds the data entered in the add merchandise form
  newMerchant: Merchandise = {
    id: '',
    title: '',
    price: 0,
    imageUrl: '',
    description: ''
  };

  // to control the modal's behavior
  constructor(public modalRef: BsModalRef) {}

  // If selectedMerchandise is not provided, the modal opens with a blank form to add a new item
  // If selectedMerchandise is provided, it copies the data into newMerchant so the form can be pre-filled, allowing the user to edit the existing item
  ngOnInit(): void {
    if (this.selectedMerchandise) {
      this.newMerchant = { ...this.selectedMerchandise }; // Copy instead of direct assign
    }
  }

  // Hides the modal dialog using BsModalRef
  closeModal(): void {
    this.modalRef.hide();
  }

  // Emits the updated newMerchant object to the parent and closes the modal
  updateMerchandiseMethod() {
    this.updateMerchandise.emit(this.newMerchant);
    this.closeModal();
  }

}
