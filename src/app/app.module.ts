import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductDataService } from './product-data.service';
import { CartDataService } from './cart-data.service';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CartComponent } from './header/cart/cart.component';
import { CartListComponent } from './header/cart/cart-list/cart-list.component';
import { CartItemComponent } from './header/cart/cart-list/cart-item/cart-item.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FooterComponent,
    ProductItemComponent,
    CartComponent,
    CartListComponent,
    CartItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductDataService,
    CartDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
