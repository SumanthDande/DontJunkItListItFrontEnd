import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  userProducts: any[] = []; 

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    // Get user ID from service based on the email in localStorage token
    const userEmail: string | null = localStorage.getItem('email'); // Update with your token key
    console.log(userEmail)
  
    if (userEmail !== null) {
      this.productService.getUserIdByEmail(userEmail).subscribe((userId: string) => {
        // Fetch products based on user ID
        this.productService.getProductsByUserId(userId).subscribe((products: any[]) => {
          // Filter car parts
          this.userProducts = products
          //.filter(product => product.category === 'car parts');
        });
      });
    } else {
      console.error('User email not found in localStorage token.');
    }
  }

  navigateToProductDetails(product: Products): void {
    if (product) {
      const productId = product.partID; // Extract the product ID
      localStorage.setItem('productDetails', JSON.stringify(product)); // Store the full product details
      this.router.navigate(['/edit-product-details'], { queryParams: { id: productId } }); // Send only the ID through query params
    } else {
      console.error('No product selected to edit.');
    }
  }
  
  

}
