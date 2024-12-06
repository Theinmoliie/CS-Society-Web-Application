// Use model to define the structure of the data used in the app
// easy to check for the variables

// order details
export class Order {
  id: string;
  amount: number;
  orderedItem: OrderItem[];
  userName: string;
  email: string;
  contact: string;
  receiptUrl: string;
}

// order item
export class OrderItem {
  id: string;
  title: string;
  quantity: number;
  size: string;
}
