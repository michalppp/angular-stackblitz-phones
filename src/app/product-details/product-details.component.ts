import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;
  private ids: number[];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { 
    this.ids = products.map(p => p.id);
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


  next()   {
    const id = this.product?.id ?? products.length -1;
    let index: number = this.ids.indexOf(id);
    if(index < products.length-1) {
      index++;
    } else {
      index = 0;
    }
    this.product = products[index];
}

previous()   {
  const id = this.product?.id ?? 1;
    let index: number = this.ids.indexOf(id);
    if(index>0) {
        index--;
      } else {
        index = products.length -1;
      }     
      this.product = products[index];
   }
}
