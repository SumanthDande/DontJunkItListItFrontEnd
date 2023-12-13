import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Models/Products';
import { Base64ToBlobService } from 'src/app/service/Base64ToBlobService';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!:Products | undefined;

  imageData:SafeUrl[] =[];

   mimeType = 'image/png'; // optional
  // blob = base;

  constructor(private route: ActivatedRoute, 
    private cartService:CartService,
    private sanitizer: DomSanitizer,
    private base64ToBlobService: Base64ToBlobService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if(data.product){
        this.product = data.product;
        this.generateSafeUrls();}
    else{/*TODO*/}
    });  
    //debugging
    console.log(this.product?.partID);
    

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

    getImage(){

    }

    // //method to create safeURLs
    // private createSafeUrl(blob: Blob): SafeUrl {
    //   try {
    //     console.log('Current Blob:', blob);
    //     const imageUrl = URL.createObjectURL(blob);
    //     console.log('Created URL:', imageUrl);
    //     return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    //   } catch (error) {
    //     console.error('Error creating SafeUrl:', error);
    //     return '';
    //   }
    // }

    
    
    private createSafeUrl(base64String: string): SafeUrl {
      const imageUrl = `data:image/png;base64,${base64String}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    }

    // private createSafeUrl(base64String: Blob): SafeUrl {
    //   const imageUrl = `data:image/png;base64,${base64String}`;
    //   return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    // }
    

    //method to iterate through all images and to call createSafeUrl method

    // generateSafeUrls(): void {
    //   // Assuming you have a known range of blob properties, adjust the loop as needed
    //   for (let i = 0; i < 5; i++) {
    //     const imageNumber = `image${i}` as keyof Products;
    //     const currentImage = this.product?.[imageNumber];
    //     if (currentImage) {
    //       this.imageData.push(this.createSafeUrl(currentImage));
    //     }
    //   }
  
    //   // You can access the SafeUrls in the imageData array now
    //   console.log(this.imageData);
    // }


    generateSafeUrls(): void {
      if (this.product) {
        const imageKeys = Object.keys(this.product) as (keyof Products)[];
        
        for (const key of imageKeys) {
          if (key.startsWith('image') && this.product[key]) {
            //console.log(`Processing ${key}:`, this.product[key]);
            this.imageData.push(this.createSafeUrl(this.product[key]!));
          }
        }
    
        // You can access the SafeUrls in the imageData array now
        console.log('SafeUrls:', this.imageData);
      }
    }

    
    
    
    
    private loadImage(imageUrl: string): Promise<Blob> {
      return new Promise((resolve, reject) => {
        fetch(imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            resolve(blob);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
    
    

}
