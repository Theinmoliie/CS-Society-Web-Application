import { Injectable } from '@angular/core';
import { Order } from '../../../shared/models/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderSampleJson: Order[] = [
    {
      id: "01",
      amount: 100.00,
      orderedItem: [
        {
          id: "M1",
          title: "Code & Coffee T-Shirt	",
          quantity: 2,
          size: "M"
        },
        {
          id: "M2",
          title: "Binary Beats T-Shirt	",
          quantity: 1,
          size: "L"
        }
      ],
      userName: "John",
      email: "john@gmail.com",
      contact: "+60123456789",
      receiptUrl: "assets/receipt.png"
    },
    {
      id: "02",
      amount: 49.00,
      orderedItem: [
        {
          id: "M1",
          title: "Code & Coffee T-Shirt	",
          quantity: 1,
          size: "L"
        },
      ],
      userName: "Alice Smith",
      email: "alicesmith@gmail.com",
      contact: "+60119876543",
      receiptUrl: "assets/receipt.png"
    },
    {
      id: "03",
      amount: 210.00,
      orderedItem: [
        {
          id: "M3",
          title: "Hello, World! T-Shirt	",
          quantity: 2,
          size: "M"
        },
        {
          id: "M4",
          title: "Code and Chill Shirt",
          quantity: 1,
          size: "M"
        }
      ],
      userName: "Bob",
      email: "bob@gmail.com",
      contact: "+60123451234",
      receiptUrl: "assets/receipt.png"
    }
  ]

  constructor() {
    if (!localStorage.getItem("orderList")) {
      localStorage.setItem("orderList", JSON.stringify(this.orderSampleJson));
    }
  }

  // Retrieves the list of orders from localStorage
  getOrder() {
    if (localStorage.getItem("orderList")) {
      return JSON.parse(localStorage.getItem("orderList"));
    }
    return [];
  }

  editOrder(updatedOrder: Order) {
    let latestOrders = this.getOrder();

    // Find the existing order and update its details
    const orderToUpdate = latestOrders.find((order:Order) => order.id === updatedOrder.id);
    if (orderToUpdate) {
      orderToUpdate.amount = updatedOrder.amount;
      orderToUpdate.userName = updatedOrder.userName;
      orderToUpdate.email = updatedOrder.email;
      orderToUpdate.contact = updatedOrder.contact;
      orderToUpdate.orderedItem = updatedOrder.orderedItem; // Optional, if editing items
    }

    localStorage.setItem('orderList', JSON.stringify(latestOrders));
  }


  // Deletes a specific order by its id
  deleteOrder(id: string) {
    let latestOrder = this.getOrder();

    latestOrder = latestOrder.filter((order: Order) => order.id !== id);

    localStorage.setItem("orderList", JSON.stringify(latestOrder));
  }
}
