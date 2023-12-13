// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Products } from '../../Models/Products';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  cartItems$: Observable<Products[]>;

  constructor(public  cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
    ;
  }
  ngOnInit() {}

  increaseQuantity(product: Products) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Products) {
    this.cartService.decreaseQuantity(product);
  }
}
