import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Merchandise } from '../../../shared/models/merchandise-model';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  // Static list of merchandise items
  private merchandiseJson: Merchandise[] = [
    {
      id: 1,
      title: "Code & Coffee T-Shirt",
      price: 35.00,
      imageUrl: "assets/product1.png",
      description: "A minimalist black tee featuring a steaming coffee cup and a snippet of code, perfect for late-night coders."
    },
    {
      id: 2,
      title: "Binary Beats T-Shirt",
      price: 45.00,
      imageUrl: "assets/product2.png",
      description: "A funky white shirt with binary patterns forming a music equalizer, merging code and rhythm."
    },
    {
      id: 3,
      title: "Hello, World! T-Shirt",
      price: 72.00,
      imageUrl: "assets/product3.png",
      description: "Classic navy blue tee showcasing the iconic programming phrase in various programming languages."
    },
    {
      id: 4,
      title: "Code and Chill Shirt",
      price: 89.00,
      imageUrl: "assets/product4.png",
      description: "Maroon shirt with a relaxed font saying Code and Chill."
    },
    {
      id: 5,
      title: "Hacker's Paradise Tee",
      price: 49.00,
      imageUrl: "assets/product5.png",
      description: "Black tee with a green matrix-style background."
    },
    {
      id: 6,
      title: "Coding Ninja Shirt",
      price: 69.00,
      imageUrl: "assets/product6.png",
      description: "Dark grey tee with a ninja mascot and Coding Ninja text."
    }
]

  constructor() { }

  getMerchandise(): Observable<Merchandise[]> {
    return of(this.merchandiseJson);
  }
}
