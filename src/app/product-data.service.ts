import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductDataService {
  products: Product[] = [
    new Product(1, 'Sandwich', 5.50, 'http://www.earlofsandwichusa.com/wp-content/uploads/2016/05/Sandwich_Chipotle-Chicken-Avocado-min.jpg'),
    new Product(2, 'Maki', 9.90, 'https://karmelowy.pl/wp-content/uploads/2013/01/sr77.jpg'),
    new Product(3, 'Cake', 7.80, 'http://omgchocolatedesserts.com/wp-content/uploads/2016/05/Strawberry-Chocolate-Cake-1.jpg'),
    new Product(4, 'Potato Chips', 2.50, 'http://www.todayifoundout.com/wp-content/uploads/2014/09/potato.jpg'),
    new Product(5, 'Popcorn', 3.50, 'https://cdn.pixabay.com/photo/2015/12/09/17/12/popcorn-1085072_1280.jpg')
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }
}
