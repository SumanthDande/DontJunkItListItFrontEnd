// product-resolver.service.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Products } from './Models/Products';
import { ProductService } from './service/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Products | null> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products | null> {

    console.log('Resolver received state:', state);
    const productId = route.paramMap.get('id');

    // Retrieve the product data directly from the route data
    //const product = route.data['product'];
    //const product = state.root?.firstChild?.params['product'];
    // const product = route.params['product'];
    //console.log('Resolver received product data:', product);

   console.log('Resolver received product ID:', productId);


   
   if (productId) {
    return this.productService.getProductById(parseInt(productId)).pipe(
      map(product => product || null),
      catchError(() => {
        console.error('Error fetching product details');
        return of(null);
      })
    );
  } else {
    console.error('Product ID not available');
    return of(null);
  }

   
  }
}
