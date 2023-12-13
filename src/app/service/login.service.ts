import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DjiliURLSModule } from '../djili-urls/djili-urls.module';
import { CredentialsDTO } from '../Models/CredentialsDTO';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginURL= DjiliURLSModule.LOGIN_URL ; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDTO): Observable<any> {
    console.log(credentials)
    return this.http.post(this.loginURL, credentials);
  }
}
