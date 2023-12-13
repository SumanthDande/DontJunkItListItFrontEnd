import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  selectedFile: File | undefined;
  imageData: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  
  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:8082/djili/upload', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    } else {
      console.warn('No file selected');
    }
  }

 

}
