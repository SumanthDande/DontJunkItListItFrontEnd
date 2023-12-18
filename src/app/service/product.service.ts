// product.service.ts
import { Injectable } from '@angular/core';
import { Products } from '../Models/Products';
import { HttpClient } from '@angular/common/http';
import { DjiliURLSModule } from '../djili-urls/djili-urls.module';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 
  private baseUrl = 'http://localhost:8082/djili/products';
  private PRODUCTSBYUSERID = DjiliURLSModule.GET_PRODUCTS_BY_USER_ID;
  private GETUSERIDBYEMAIL = DjiliURLSModule.GET_USER_ID_BY_EMAIL;
  private UPDATEPART = DjiliURLSModule.UPDATE_CAR_PART;

  private productsCache: Products[] = [];

  constructor(private http: HttpClient) { }

  

  getProducts(): Observable<Products[]> {
    if (this.productsCache.length > 0) {
      // If products are already in cache, return them
      return of(this.productsCache);
    } else {
      // Otherwise, fetch products from the server and cache them
      return this.http.get<Products[]>(DjiliURLSModule.GET_ALL_PRODUCTS_URL)
        .pipe(
        tap((products) => (this.productsCache = products)),
        catchError(this.handleError)
      );
    }
  }

  getProductById(productId: number): Observable<Products | undefined> {
    // Check if the product is in the cache
    const cachedProduct = this.productsCache.find((product) => product.partID === productId);

    if (cachedProduct) {
      return of(cachedProduct);
    } else {
      // If not in cache, fetch from the server and cache
      return this.http.get<Products>(`${DjiliURLSModule.GET_ALL_PRODUCTS_URL}/${productId}`).pipe(
        tap((product) => {
          this.productsCache.push(product);
        }),
        catchError(this.handleError)
      );
    }
  }

   getUserIdByEmail(email: string): Observable<string> {
    // Implement logic to fetch user ID based on email
    return this.http.get<any>(`${this.GETUSERIDBYEMAIL}/${email}`);
  }

  getProductsByUserId(userId: string): Observable<any[]> {
    // Implement logic to fetch products based on user ID
    return this.http.get<any[]>(`${this.PRODUCTSBYUSERID}/${userId}`);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return of([]);
  }


  updateProductDetails(productId: string, updatedDetails: any){
    return this.http.put(this.UPDATEPART, updatedDetails);
  }
  
}
