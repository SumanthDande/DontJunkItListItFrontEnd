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
  private productsCache: Products[] = [];

  constructor(private http: HttpClient) { }

  // private products: Product[] = [
  //   new Product(1, 'Carbureator', 20.0, 5, "https://th.bing.com/th/id/R.0e2c63c0e2886959e700a3328d945b2d?rik=ULxqV9lywPHIlg&pid=ImgRaw&r=0"),
  //   new Product(2, 'Car Mirror', 30.0, 10, 'https://www.carid.com/images/replace/items/to1320215-3.jpg'),
  //   new Product(3, 'Maxx Hual 80684 LED', 20.0, 5, 'https://i5.walmartimages.com/asr/befcab5a-2183-4b21-bf4f-c0fb24f269a1_1.57ce8df343146cc251a938ac85edfa1b.jpeg'),
  //   new Product(4, 'Disc Brake Rotor. Brake', 30.0, 10, 'https://images.simplepart.com/images/uploads/SimplePart%20-%20Subaru/fullsize/a_20170927_1040125999.png')
  //   // Add more products with image URLs
  // ];

  // getProducts(): Observable<Products[]> {
  //   //return this.products;
  //   return this.http.get<any[]>(`${this.baseUrl}/list`);
  // }

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

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return of([]);
  }
}
