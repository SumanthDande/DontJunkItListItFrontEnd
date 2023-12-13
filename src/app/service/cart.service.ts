// // cart.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Product } from './Products';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cartItemsSubject = new BehaviorSubject<Product[]>([]);
//   cartItems$ = this.cartItemsSubject.asObservable();

//   addToCart(item: Product) {
//     const currentCartItems = this.cartItemsSubject.value;
//     const updatedCartItems = [...currentCartItems, item];
//     this.cartItemsSubject.next(updatedCartItems);
//   }

//   removeFromCart(item: Product) {
//     const currentCartItems = this.cartItemsSubject.value;
//     const updatedCartItems = currentCartItems.filter((i) => i.id !== item.id);
//     this.cartItemsSubject.next(updatedCartItems);
//   }

//   isProductInCart(product: Product): boolean {
//     const currentCartItems = this.cartItemsSubject.value;
//     return currentCartItems.some((item) => item.id === product.id);
//   }

//   getQuantityInCart(product: Product): number {
//     const currentCartItems = this.cartItemsSubject.value;
//     const matchingItems = currentCartItems.filter((item) => item.id === product.id);
//     return matchingItems.length;
//   }

//   increaseQuantity(product: Product) {
//     const currentCartItems = this.cartItemsSubject.value;
//     const updatedCartItems = [...currentCartItems, product];
//     this.cartItemsSubject.next(updatedCartItems);
//   }

//   decreaseQuantity(product: Product) {
//     const currentCartItems = this.cartItemsSubject.value;
//     const matchingItem = currentCartItems.find((item) => item.id === product.id);

//     if (matchingItem) {
//       const updatedCartItems = currentCartItems.filter((item) => item.id !== product.id);
//       this.cartItemsSubject.next(updatedCartItems);
//     }
//   }
// }

// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../Models/Products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Products[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: Products) {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedCartItems = [...currentCartItems, { ...item, quantity: 1 }];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeFromCart(item: Products) {
    const currentCartItems = this.cartItemsSubject.value;
    const updatedCartItems = currentCartItems.filter((i) => i.partID !== item.partID);
    this.cartItemsSubject.next(updatedCartItems);
  }

  isProductInCart(product: Products): boolean {
    const currentCartItems = this.cartItemsSubject.value;
    return currentCartItems.some((item) => item.partID === product.partID);
  }

  getQuantityInCart(product: Products): number {
    const currentCartItems = this.cartItemsSubject.value;
    const matchingItem = currentCartItems.find((item) => item.partID === product.partID);
    return matchingItem?.quantity || 0; // Use optional chaining
  }

  increaseQuantity(product: Products) {
    const currentCartItems = this.cartItemsSubject.value;
    const matchingItem = currentCartItems.find((item) => item.partID === product.partID);

    if (matchingItem) {
      // Increase the quantity by 1
      matchingItem.quantity = (matchingItem.quantity || 0) + 1;

      // Update the cart items
      const updatedCartItems = [...currentCartItems];
      this.cartItemsSubject.next(updatedCartItems);
    }
  }

  decreaseQuantity(product: Products) {
    const currentCartItems = this.cartItemsSubject.value;
    const matchingItem = currentCartItems.find((item) => item.partID === product.partID);

    if (matchingItem && matchingItem.quantity && matchingItem.quantity > 0) {
      // Decrease the quantity by 1
      matchingItem.quantity -= 1;

      // Update the cart items
      const updatedCartItems = [...currentCartItems];
      this.cartItemsSubject.next(updatedCartItems);
    }
  }
}
