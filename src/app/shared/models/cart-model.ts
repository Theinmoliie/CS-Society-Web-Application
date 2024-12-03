// Use model to define the structure of the data used in the app
// easy to check for the variables

import { Merchandise } from "./merchandise-model";

export class Cart {
    selectedMerchandise: Merchandise; // store the merchandise item that is added to the cart
    selectedSize: string; //store the size of the selected merchandise
    selectedQuantity: number; //store the quantity of the selected merchandise
    subTotal: number; //hold the total price for the selected merchandise (price * quantity)

    constructor(merchandise: Merchandise, size: string, quantity: number) {
        this.selectedMerchandise = merchandise; // Assigning the merchandise object passed into the constructor to the selectedMerchandise property
        this.selectedSize = size;
        this.selectedQuantity = quantity;
        this.subTotal = merchandise.price * quantity;
    }
}
