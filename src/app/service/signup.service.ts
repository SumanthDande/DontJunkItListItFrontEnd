// signup.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DjiliURLSModule} from '../djili-urls/djili-urls.module'
import { UserDTO } from '../Models/UserDTO';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
 
  private signupUrl = DjiliURLSModule.SIGNUP_URL;

  constructor(private http: HttpClient) {}

  signup(user: UserDTO): Observable<any> {
    return this.http.post(this.signupUrl, user, { responseType: 'text' });
  }
}
