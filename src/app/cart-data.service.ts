import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class CartDataService {
  products: Product[] = [];

  constructor() { }

  addProduct(product: Product): CartDataService {
    this.products.push(product);
    return this;
  }

  deleteProductById(id: number): CartDataService {
    this.products = this.products.filter(
      product => product.id !== id
    );
    return this;
  }

  getAllProducts(): Product[] {
    return this.products;
  }




}
