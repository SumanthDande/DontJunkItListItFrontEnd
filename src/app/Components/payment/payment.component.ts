import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StripeService } from 'src/app/service/stripe.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  card: any; // Reference to the card element in the template
  cardNumber: string = '';

  constructor(private stripeService: StripeService, 
    private toastrService: ToastrService,
    private router: Router) {}

  ngOnInit() {
   
  }

  validateCard() {
    console.log('Card Number:', this.cardNumber);

    this.stripeService.validateCard(this.cardNumber).subscribe(
      (response) => {
        this.toastrService.success("Payment Successfully completed");
        setTimeout(() => {
          
          this.router.navigate(['/viewproducts']);
        }, 3000);
        console.log('Validation successful:', response);
      },
      (error) => {
        this.toastrService.error("Invalid Card Number")
        console.error('Validation failed:', error);
      }
    );
  }
  
}
