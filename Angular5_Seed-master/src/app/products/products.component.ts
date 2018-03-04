import { Component } from '@angular/core';
import {IProduct} from './products'

@Component({
    selector:'products-ss',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent{
    title='Sangeet';
    showImage:boolean=false;
    userName="Saurabh";
    filterProduct;
    products:IProduct[]=[{
        "product_name": "Coke",
        "product_price": 10,
        "product_quantity": 500,
        "product_type": "Drink"
      }, {
        "product_name": "Pepsi",
        "product_price": 20,
        "product_quantity": 400,
        "product_type": "Drink"
      }, {
        "product_name": "DairyMilk",
        "product_price": 30,
        "product_quantity": 100,
        "product_type": "Food"
      }, {
        "product_name": "Cake",
        "product_price": 15,
        "product_quantity": 100,
        "product_type": "Food"
      }]
      

      toggleImage():void{
          console.log("toggleImage() is called");
          this.showImage = !this.showImage
      }

      constructor(){
        console.log("This msg is from contructor");
      }

      ngOnInit():void{
      console.log("This msg is from ngOnInit");
      }
}

