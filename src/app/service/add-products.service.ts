// import { Injectable } from '@angular/core';
// import { Product } from '../Models/Products';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AddProductsService {

//   constructor() { }
//   private productsSubject = new BehaviorSubject<Product[]>([]);
//   products$ = this.productsSubject.asObservable();

//   addProduct(newProduct: Product) {
//     // Assuming you have an API endpoint to add a new product on the backend
//     // Replace 'http://localhost:80/api/addProduct' with your actual backend API endpoint
//     const apiUrl = 'http://localhost:80/api/addProduct';
    
//     // Assuming you are making a POST request to add a new product
//     // Adjust the request method and headers based on your backend API requirements
//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newProduct),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Handle the response from the backend if needed
//       console.log('Product added successfully:', data);
      
//       // Optionally, update the local state if your application needs it
//       const currentProducts = this.productsSubject.value;
//       const updatedProducts = [...currentProducts, newProduct];
//       this.productsSubject.next(updatedProducts);
//     })
//     .catch(error => {
//       console.error('Error adding product:', error);
//     });
//   }

// }

//  private addProductsURL = DjiliURLSModule.ADD_PRODUCTS;


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DjiliURLSModule } from '../djili-urls/djili-urls.module';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {

  private addProductsURL = DjiliURLSModule.ADD_PRODUCTS;

  constructor(private http: HttpClient) { }

  addProduct(productData: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    
    return this.http.post(this.addProductsURL, productData, { headers });
  }
}