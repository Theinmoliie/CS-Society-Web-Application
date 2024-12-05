import { Injectable } from '@angular/core';
import { Merchandise } from '../../../shared/models/merchandise-model';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  private merchandiseJson: Merchandise[] = [
    {
      id: "M1",
      title: "Code & Coffee T-Shirt",
      price: 35.00,
      imageUrl: "assets/product1.png",
      description: "A minimalist black tee featuring a steaming coffee cup and a snippet of code, perfect for late-night coders."
    },
    {
      id: "M2",
      title: "Binary Beats T-Shirt",
      price: 45.00,
      imageUrl: "assets/product2.png",
      description: "A funky white shirt with binary patterns forming a music equalizer, merging code and rhythm."
    },
    {
      id: "M3",
      title: "Hello, World! T-Shirt",
      price: 72.00,
      imageUrl: "assets/product3.png",
      description: "Classic navy blue tee showcasing the iconic programming phrase in various programming languages."
    },
    {
      id: "M4",
      title: "Code and Chill Shirt",
      price: 89.00,
      imageUrl: "assets/product4.png",
      description: "Maroon shirt with a relaxed font saying Code and Chill."
    },
    {
      id: "M5",
      title: "Hacker's Paradise Tee",
      price: 49.00,
      imageUrl: "assets/product5.png",
      description: "Black tee with a green matrix-style background."
    },
    {
      id: "M6",
      title: "Coding Ninja Shirt",
      price: 69.00,
      imageUrl: "assets/product6.png",
      description: "Dark grey tee with a ninja mascot and Coding Ninja text."
    }
  ]

  // Ensures that localStorage is initialized with the default merchandise items (merchandiseJson) if it doesn¡¯t already exist
  constructor() {
    if (!localStorage.getItem("merchandiseList")) {
      localStorage.setItem("merchandiseList", JSON.stringify(this.merchandiseJson));
    }
  }

  // Fetches all merchandise items from localStorage
  getMerchandise() {
    if (localStorage.getItem("merchandiseList")) {
      return JSON.parse(localStorage.getItem("merchandiseList"));
    }
    return [];
  }

  // Adds a new merchandise item to localStorage
  // Fetches the current merchandise list (getMerchandise())
  // Creates a new merchandise object
  // Adds the new object to the list
  // Updates localStorage with the modified list
  addMerchandise(newMerchandise: Merchandise) {
    let latestMerchandise = this.getMerchandise();

    const merchandise: Merchandise = {
      id: newMerchandise.id,
      title: newMerchandise.title,
      price: newMerchandise.price,
      imageUrl: '',
      description: newMerchandise.description
    }


    latestMerchandise.push(merchandise);

    localStorage.setItem("merchandiseList", JSON.stringify(latestMerchandise))
  }

  // Updates an existing merchandise item in localStorage
  // Fetches the current merchandise list
  // Finds the item to update by matching its id
  // Updates the item's properties (e.g., title, price, description)
  // Saves the updated list back to localStorage
  editMerchandise(merchandise: Merchandise) {
    let latestMerchandise = this.getMerchandise();

    const itemToUpdate = latestMerchandise.find((merc: Merchandise) => merc.id === merchandise.id);
    if (itemToUpdate) {
      itemToUpdate.id = merchandise.id;
      itemToUpdate.title = merchandise.title;
      itemToUpdate.price = merchandise.price;
      itemToUpdate.description = merchandise.description;
    }

    localStorage.setItem("merchandiseList", JSON.stringify(latestMerchandise))

  }

  // Deletes a merchandise item by its id
  // Fetches the current merchandise list
  // Filters out the item with the specified id
  // Saves the updated list back to localStorage
  deleteMerchandise(id: string) {
    const latestMerchandise = this.getMerchandise().filter((merc: Merchandise) => merc.id !== id);

    localStorage.setItem("merchandiseList", JSON.stringify(latestMerchandise))
  }
}
