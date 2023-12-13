import { SafeUrl } from "@angular/platform-browser";

// product.model.ts
export class Products {
  partID: number;
  partName: string;
  manufacturer: string;
  quantity: number;
  year: number;
  image1?: Blob;
  image2?: Blob;
  image3?: Blob;
  image4?: Blob;
  image5?: Blob;
  condition: string;
  category: string | null;
  price: number;
  color: string;
  description: string;
  user: any; // TODO: replace 'any' with a user model 
  cart: any; // TODO: replace 'any' with a cart model 
  imageUrls?: string[]; 
  imagesLoaded?: boolean; // optional property indicating if images are loaded
  imagesPromise: Promise<SafeUrl[]>; 

  constructor(
    partID: number,
    partName: string,
    manufacturer: string,
    quantity: number,
    year: number,
    condition: string,
    category: string | null,
    price: number,
    color: string,
    description: string,
    user: any,
    cart: any,
    imagesPromise: Promise<SafeUrl[]>,
    image1?: Blob,
    image2?: Blob,
    image3?: Blob,
    image4?: Blob,
    image5?: Blob,
    imageUrls?: string[],
    imagesLoaded?: boolean,
  ) {
    this.partID = partID;
    this.partName = partName;
    this.manufacturer = manufacturer;
    this.quantity = quantity;
    this.year = year;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.image5 = image5;
    this.condition = condition;
    this.category = category;
    this.price = price;
    this.color = color;
    this.description = description;
    this.user = user;
    this.cart = cart;
    this.imageUrls = imageUrls;
    this.imagesLoaded = imagesLoaded;
    this.imagesPromise = imagesPromise;
  }
}
