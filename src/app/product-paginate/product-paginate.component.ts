import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-paginate',
  templateUrl: './product-paginate.component.html',
  styleUrls: ['./product-paginate.component.css']
})
export class ProductPaginateComponent {
   index: number = 0;

   product = products[this.index];

  next() {
    if(this.index<products.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.product = products[this.index];
  }

  previous() {
    if(this.index>0) {
      this.index--;
    } else {
      this.index = products.length -1;
    }
    this.product = products[this.index];
  }
}
