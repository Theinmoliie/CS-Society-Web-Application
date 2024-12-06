import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../../shared/models/order-model';
import { ModalConfirmationComponent } from '../../../../shared/components/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{

  // Stores the list of orders retrieved from the service
  orderList: Order[];

  // Stores a reference to the currently opened modal, allowing the component to control its behavior
  bsModalRef?: BsModalRef;

  constructor(private orderService: OrderService,
              private modalService: BsModalService,
              private toast: ToastrService) { }

  // Fetches the order list by calling refreshOrderList()
  ngOnInit(): void {
    this.refreshOrderList();
  }

  // Fetches the list of orders from the service and updates orderList
  refreshOrderList() {
    this.orderList = this.orderService.getOrder();
  }

  // Opens a confirmation modal to delete an order
  deleteOrder(order: Order) {
    this.bsModalRef = this.modalService.show(ModalConfirmationComponent, {
      initialState: {
        title: 'Delete Order - ' + order.id,
        content: 'Are you sure you want to delete this order?',
        cancelText: 'No',
        confirmText: 'Yes'
      },
      class: 'custom-modal-width'
    })

    this.bsModalRef.content.onConfirm.subscribe(() => {
      this.orderService.deleteOrder(order.id);
      this.toast.success("Order deleted successfully!");
      this.refreshOrderList();
    });
  }

}
