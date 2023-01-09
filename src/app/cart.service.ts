import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() { 
    window.alert('CartService created');
  }

  addToCart(product: Product) {
    window.alert('Product added');
    this.items.push(product);
  }

  getItems() {
    window.alert('Product returning ' + this.items);
    return this.items;
  }

  clearCart() {
    window.alert('Cart cleared');
    this.items = [];
    return this.items;
  }
  
}
