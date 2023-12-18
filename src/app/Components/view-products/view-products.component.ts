import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../Models/Products';
import { CartService } from '../../service/cart.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css'],
})
export class ViewProductsComponent implements OnDestroy, OnInit {
  products: Products[]=[];
  imageData:SafeUrl[] =[];

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    //this.loadProducts();
    console.log(localStorage.getItem('email'))
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.generateSafeUrls();
    });
  }

  ngOnDestroy(): void {
  }

 

  getQuantityInCart(product: Products) {
    return this.cartService.getQuantityInCart(product);
  }

  addToCart(product: Products) {
    const isInCart = this.cartService.isProductInCart(product);

    if (!isInCart) {
      this.cartService.addToCart(product);
    }
  }

  increaseQuantity(product: Products) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Products) {
    this.cartService.decreaseQuantity(product);
  }

  
  


  private createSafeUrl(base64String: any): SafeUrl {
    const imageUrl = `data:image/png;base64,${base64String}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl) as string;
  }
  // generateSafeUrls(products: Products[]): void {
  //   this.imageData = [];
  
  //   for (const product of products) {
  //     if (product) {
  //       const imageKeys = Object.keys(product) as (keyof Products)[];
  
  //       for (const key of imageKeys) {
  //         if (key.startsWith('image') && product[key]) {
  //           this.imageData.push(this.createSafeUrl(product[key]!));
  //         }
  //       }
  //     }
  //   }
  //   this.products.forEach((product) => (product.imagesLoaded = true));

  
  //   // You can access the SafeUrls in the imageData array now
  //   console.log('SafeUrls:', this.imageData);
  // }

  generateSafeUrls(): void {
    this.products.forEach((product) => {
      const productImageData: SafeUrl[] = [];
  
      if (product.imageUrls) {
        for (const image of product.imageUrls) {
          // Assuming the server sends image URLs
          productImageData.push(this.createSafeUrl(image));
        }
      }
  
      product.imageUrls = productImageData;
      product.imagesLoaded = true;
    });
  }

  currentSlideIndex = 0;

nextSlide() {
  if (this.currentSlideIndex < this.imageData.length - 1) {
    this.currentSlideIndex++;
  }
}

prevSlide() {
  if (this.currentSlideIndex > 0) {
    this.currentSlideIndex--;
  }
}

  
}
