import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../../shared/models/order-model';
import { ModalConfirmationComponent } from '../../../../shared/components/modal-confirmation/modal-confirmation.component';
import { ModalEditOrderComponent } from '../../../../shared/components/modal-edit-order/modal-edit-order.component';
import { LogoutService } from '../../../../shared/services/logout.service';


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
              private toast: ToastrService,
              private logoutservice: LogoutService) { }

  // Fetches the order list by calling refreshOrderList()
  ngOnInit(): void {
    this.refreshOrderList();
  }

  // Fetches the list of orders from the service and updates orderList
  refreshOrderList() {
    this.orderList = this.orderService.getOrder();
  }

  editOrder(order: Order) {
    // Open the edit modal and pass the selected order
    this.bsModalRef = this.modalService.show(ModalEditOrderComponent, {
      initialState: {
        selectedOrder: order
      },
      class: 'custom-modal-width'
    });

    // Subscribe to the updateOrder event to save the edited order
    this.bsModalRef.content.updateOrder.subscribe((updatedOrder: Order) => {
      this.orderService.editOrder(updatedOrder); // Update the order in localStorage
      this.toast.success('Order updated successfully!');
      this.refreshOrderList(); // Refresh the order list
    });
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
  
  logout(): void {
    this.logoutservice.logout();
  }
}
