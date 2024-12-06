import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Order } from '../../models/order-model';

@Component({
  selector: 'app-modal-edit-order',
  templateUrl: './modal-edit-order.component.html',
  // styleUrls: ['./modal-edit-order.component.css']
})
export class ModalEditOrderComponent implements OnInit {

  @Input() selectedOrder: Order;
  @Output() updateOrder = new EventEmitter<Order>();

  // Local copy of the order for editing
  editedOrder: Order;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
    if (this.selectedOrder) {
      this.editedOrder = { ...this.selectedOrder };
    }
  }

  // Emit the updated order and close the modal
  saveOrderChanges() {
    this.updateOrder.emit(this.editedOrder);
    this.modalRef.hide();
  }

  // Close the modal without saving changes
  closeModal() {
    this.modalRef.hide();
  }
}
