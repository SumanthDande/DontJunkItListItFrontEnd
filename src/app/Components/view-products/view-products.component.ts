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
    this.productService.getProducts().subscribe((data)=>this.products=data)
    this.generateSafeUrls(this.products);
  }

  ngOnDestroy(): void {
    // Clean up any resources here if needed
  }

  // async loadProducts(): Promise<void> {
  //   // Load your products from wherever they come from (e.g., a service)
  //   this.products$ = await this.productService.getProducts();

  //   // Call the method to create SafeUrls for the images
  //   await this.createSafeUrls();
  // }

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

  // async createSafeUrls(): Promise<void> {
  //   this.products$.subscribe(async (products) => {
  //     const promises: Promise<void>[] = products.map(async (product) => {
  //       // Assuming createSafeUrlForProduct returns a string
  //       const safeUrl = await this.createSafeUrlForProduct(product);
  //       product.imageUrls = [safeUrl.toString()]; // Convert to an array with a single element
  //     });
  
  //     // Wait for all promises to resolve before proceeding
  //     await Promise.all(promises);
  
  //     // Now you can use the SafeUrls or check the imagesLoaded property if needed
  //     products.forEach((product) => {
  //       console.log(`Product ${product.partName} imageUrls:`, product.imageUrls);
  //     });
  //   });
  // }
  

  // private async createSafeUrlForProduct(product: Products): Promise<SafeUrl[]> {
  //   const productUrls: SafeUrl[] = [];

  //   for (let i = 1; i <= 5; i++) {
  //     const imageProperty = `image${i}` as keyof Products;
  //     const blob = product[imageProperty];

  //     if (blob instanceof Blob) {
  //       try {
  //         const url = URL.createObjectURL(blob);
  //         const safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
  //         productUrls.push(safeUrl);
  //       } catch (error) {
  //         console.error(`Error creating SafeUrl for ${imageProperty} in product:`, product);
  //       }
  //     } else {
  //       console.error(`Invalid Blob for ${imageProperty} in product:`, product);
  //     }
  //   }

  //   // Wait for all images to be loaded before resolving the promise
  //   await Promise.all(productUrls);

  //   // Set flag after processing all images
  //   product.imagesLoaded = true;

  //   return productUrls;
  // }

  private createSafeUrl(base64String: string): SafeUrl {
    const imageUrl = `data:image/png;base64,${base64String}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }
  generateSafeUrls(products: Products[]): void {
    // Clear the existing imageData array before processing new products
    this.imageData = [];
  
    for (const product of products) {
      if (product) {
        const imageKeys = Object.keys(product) as (keyof Products)[];
  
        for (const key of imageKeys) {
          if (key.startsWith('image') && product[key]) {
            this.imageData.push(this.createSafeUrl(product[key]!));
          }
        }
      }
    }
  
    // You can access the SafeUrls in the imageData array now
    console.log('SafeUrls:', this.imageData);
  }
  
}
