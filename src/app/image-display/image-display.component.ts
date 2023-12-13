import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  imageId: number = 1; // Replace with the actual image ID

  imageData: SafeUrl | null = null;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage() {
    this.imageService.getImageById(this.imageId).subscribe(
      (data: Blob) => {
        const imageUrl = URL.createObjectURL(data);
        this.imageData = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      },
      (error: any) => {
        console.error('Error loading image', error);
      }
    );
  }

}
