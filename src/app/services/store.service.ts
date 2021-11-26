import { Injectable } from '@angular/core';
import { Product } from '../components/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];

  constructor() {}

  addProductToCart(product: Product) {
    this.myShoppingCart.push(product);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotalPrice() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price,0);
  }
}
