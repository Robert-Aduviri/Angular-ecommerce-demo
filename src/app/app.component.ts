import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductDataService } from './product-data.service';
import { CartDataService } from './cart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private productDataService: ProductDataService,
              private cartDataService: CartDataService){}

  get productsInCart() {
    return this.cartDataService.getAllProducts();
  }

  get products() {
    return this.productDataService.getAllProducts();
  }

  onAddToCart(product: Product) {
    this.cartDataService.addProduct(product);
  }

}
