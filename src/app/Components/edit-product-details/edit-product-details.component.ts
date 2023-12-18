// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Product } from 'src/app/Models/Product';
// import { Products } from 'src/app/Models/Products';

// @Component({
//   selector: 'app-edit-product-details',
//   templateUrl: './edit-product-details.component.html',
//   styleUrls: ['./edit-product-details.component.css']
// })
// export class EditProductDetailsComponent implements OnInit {

//   productForm: FormGroup;

//   constructor( private route: ActivatedRoute,
//     private formBuilder: FormBuilder,
//     private router: Router) { 
//       this.productForm = this.formBuilder.group({
//         productId: [{ value: '', disabled: true }],
//         partName: [{ value: '', disabled: true }],
//         price: [''],
//       color: [''],
//       description: ['']
//       });
//     }

//   ngOnInit(): void {
//     this.route.data.subscribe(data=>{
//       const product: Products | null = this.router.getCurrentNavigation()?.extras.state?.product;
//     //queryParamMap.get('product');
//     if (product !== null) {
//       // Update the form values with the product details
//       this.productForm.patchValue(product);
//     } else {
//       // Handle the case where product is null
//       console.error('Product details not found.');
//     }
//     })
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product-details',
  templateUrl: './edit-product-details.component.html',
  styleUrls: ['./edit-product-details.component.css']
})
export class EditProductDetailsComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      productId: [{ value: '', disabled: true }],
      partName: [{ value: '', disabled: true }],
      price: [''],
      color: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.queryParams.id;
  
    if (productId) {
      // Fetch product details from local storage based on the product ID
      const productDetailsJSON = localStorage.getItem('productDetails');
      
      if (productDetailsJSON) {
        const product: Products = JSON.parse(productDetailsJSON);
  
        if (product && typeof product === 'object') {
          // Update the form values with the product details
          this.productForm.patchValue({
            productId: product.partID,
            partName: product.partName,
            // Add other form controls for additional product details
            // Example:
            price: product.price,
            color: product.color,
            description: product.description,
          });
        } else {
          console.error('Invalid product details format in local storage. Expected an object.');
        }
      } else {
        console.error('Invalid product details in local storage.');
      }
    } else {
      console.error('Missing product ID in query parameters.');
    }
  }

  updateDetails() {
    this.productService
    }
  
  
}
