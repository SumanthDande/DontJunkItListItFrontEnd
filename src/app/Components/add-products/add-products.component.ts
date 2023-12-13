import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddProductsService } from 'src/app/service/add-products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  productForm: FormGroup;
  selectedImages: FileList | null = null;

  constructor(private fb: FormBuilder, private productService: AddProductsService, private toastr: ToastrService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      color: ['', Validators.required],
      manufacturer: ['', Validators.required],
      yearOfManufacture: ['', Validators.required],
      condition: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      images: ['']
    });
  }

  onFileSelected(event: any) {
    this.selectedImages = event.target.files;
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = new FormData();
      productData.append('name', this.productForm.get('name')?.value);
      productData.append('description', this.productForm.get('description')?.value);
      productData.append('color', this.productForm.get('color')?.value);
      productData.append('manufacturer', this.productForm.get('manufacturer')?.value);
      productData.append('yearOfManufacture', this.productForm.get('yearOfManufacture')?.value);
      productData.append('condition', this.productForm.get('condition')?.value);
      productData.append('category', this.productForm.get('category')?.value);
      productData.append('price', this.productForm.get('price')?.value);

      if (this.selectedImages) {
        for (let i = 0; i < this.selectedImages.length; i++) {
          productData.append('images', this.selectedImages[i], this.selectedImages[i].name);
        }
      }

      this.productService.addProduct(productData).subscribe(
        (response) => {
          console.log('Product added successfully', response.body);
          
          this.productForm.reset();
          this.selectedImages=null;
          this.toastr.success("Product added Successfully");
          // Optionally, you can navigate to a different page or reset the form here
        },
        (error) => {
          console.error('Error adding product', error.body);
        }
      );
    }
  }
}
