import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://your-backend-api-url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<any> {
    const url = `${this.baseUrl}/${email}`;
    return this.http.get<any>(url);
  }

  updateUserDetails(email: string, updatedUserData: any): Observable<any> {
    const url = `${this.baseUrl}/${email}`;
    return this.http.put<any>(url, updatedUserData);
  }
}
