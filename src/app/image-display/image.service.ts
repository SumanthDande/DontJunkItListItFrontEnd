import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }



  getImageById(id: number): Observable<Blob> {
    return this.http.get(`http://localhost:8082/djili/images/${id}`, { responseType: 'blob' });
  }
}
