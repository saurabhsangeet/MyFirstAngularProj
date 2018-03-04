import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SaurabhComponent } from './saurabh.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilter } from "./products/product-filter.pipe";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SaurabhComponent,
    ProductsComponent,
    ProductFilter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
