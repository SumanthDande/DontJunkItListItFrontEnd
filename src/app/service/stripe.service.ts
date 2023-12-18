import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DjiliURLSModule } from '../djili-urls/djili-urls.module';
import { ToastrService } from 'ngx-toastr';
declare const Stripe: any;

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  private URL = DjiliURLSModule.PAYMENT;
  constructor(private http: HttpClient) {
    // Load Stripe.js asynchronously
  }

  validateCard(cardNumber: string): Observable<any> {
    const payload = { cardNumber };
    return this.http.post(this.URL, cardNumber, { responseType: 'text' });
  }

  
}
